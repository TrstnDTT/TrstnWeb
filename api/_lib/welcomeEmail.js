/* global process */

const EMAILJS_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send'

export async function sendWelcomeEmail({
  recipientName,
  recipientEmail,
  planId,
  sessionId,
}) {
  const serviceId = process.env.EMAILJS_SERVICE_ID || process.env.VITE_EMAILJS_SERVICE_ID
  const templateId = process.env.EMAILJS_TEMPLATE_ID_WELCOME
  const publicKey = process.env.EMAILJS_PUBLIC_KEY || process.env.VITE_EMAILJS_PUBLIC_KEY
  const privateKey = process.env.EMAILJS_PRIVATE_KEY

  if (!serviceId || !templateId || !publicKey) {
    return { skipped: true, reason: 'emailjs_config_missing' }
  }

  const payload = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: {
      to_name: recipientName || 'Client',
      to_email: recipientEmail || '',
      plan_id: planId || '',
      session_id: sessionId || '',
    },
    ...(privateKey ? { accessToken: privateKey } : {}),
  }

  const response = await fetch(EMAILJS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const body = await response.text().catch(() => '')
    throw new Error(`EmailJS welcome send failed: ${response.status} ${body}`)
  }

  return { skipped: false }
}
