/* global process, Buffer */

import Stripe from 'stripe'
import { sendWelcomeEmail } from '../_lib/welcomeEmail.js'
import { sendWelcomeWithResend } from './welcome-email.js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-06-20',
})

async function readRawBody(req) {
  const chunks = []
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
  }
  return Buffer.concat(chunks)
}

async function onCheckoutCompleted(session) {
  const recipientName = session.customer_details?.name || ''
  const recipientEmail = session.customer_details?.email || ''
  const planId = session.metadata?.planId || ''
  const sessionId = session.id

  let sentViaResend = false
  try {
    const resendResult = await sendWelcomeWithResend({
      recipientName,
      recipientEmail,
      planId,
      sessionId,
    })
    sentViaResend = !resendResult?.skipped
    console.info('[stripe:webhook] welcomeResend', {
      sessionId,
      recipientEmail,
      planId,
      skipped: !!resendResult?.skipped,
      id: resendResult?.id,
    })
  } catch (error) {
    console.error('[stripe:webhook] welcomeResend failed', {
      sessionId,
      recipientEmail,
      planId,
      error: error instanceof Error ? error.message : String(error),
    })
  }

  if (sentViaResend) {
    return
  }

  try {
    const result = await sendWelcomeEmail({
      recipientName,
      recipientEmail,
      planId,
      sessionId,
    })
    console.info('[stripe:webhook] welcomeEmail', {
      sessionId,
      recipientEmail,
      planId,
      skipped: !!result?.skipped,
    })
  } catch (error) {
    console.error('[stripe:webhook] welcomeEmail failed', {
      sessionId,
      recipientEmail,
      planId,
      error: error instanceof Error ? error.message : String(error),
    })
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).send('Method not allowed')
  }

  const secretKey = process.env.STRIPE_SECRET_KEY
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!secretKey || !webhookSecret) {
    return res.status(500).send('Stripe webhook is not configured.')
  }

  let event
  try {
    const rawBody = await readRawBody(req)
    const signature = req.headers['stripe-signature']
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret)
  } catch (error) {
    console.error('[stripe:webhook] signature error', error)
    return res.status(400).send('Webhook signature verification failed.')
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        await onCheckoutCompleted(event.data.object)
        break
      case 'invoice.paid':
        console.info('[stripe:webhook] invoice.paid', {
          invoiceId: event.data.object?.id,
          subscriptionId: event.data.object?.subscription,
        })
        break
      default:
        break
    }

    return res.status(200).json({ received: true })
  } catch (error) {
    console.error('[stripe:webhook] processing error', error)
    return res.status(500).send('Webhook processing error.')
  }
}
