/* global process */

import Stripe from 'stripe'
import { getLineItemsFromEnv, resolvePlanConfig } from '../_lib/stripePlanCatalog.js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-06-20',
})

function getOrigin(req) {
  const proto = req.headers['x-forwarded-proto'] || 'https'
  const host = req.headers['x-forwarded-host'] || req.headers.host
  return `${proto}://${host}`
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return res.status(500).json({ error: 'Server misconfigured: STRIPE_SECRET_KEY missing.' })
  }

  try {
    const { planId } = req.body || {}
    const planConfig = resolvePlanConfig(planId)
    if (!planConfig) {
      return res.status(400).json({ error: 'Invalid plan selected.' })
    }

    const lineItems = getLineItemsFromEnv(planConfig)
    const origin = getOrigin(req)

    const session = await stripe.checkout.sessions.create({
      mode: planConfig.mode,
      line_items: lineItems,
      success_url: `${origin}/merci?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/tarifs?cancelled=1`,
      allow_promotion_codes: true,
      metadata: {
        planId,
      },
      subscription_data: {
        metadata: {
          planId,
        },
      },
    })

    if (!session.url) {
      console.error('[stripe:create-checkout-session] session.url missing', { id: session.id })
      return res.status(500).json({ error: 'Checkout session has no hosted URL.' })
    }

    return res.status(200).json({ url: session.url, sessionId: session.id })
  } catch (error) {
    console.error('[stripe:create-checkout-session]', error)
    return res.status(500).json({ error: 'Unable to create Stripe Checkout session.' })
  }
}
