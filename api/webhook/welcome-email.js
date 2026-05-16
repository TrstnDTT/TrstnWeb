/* global process */
/**
 * Email de bienvenue post-paiement Stripe via Resend.
 * Les formulaires du site restent sur EmailJS (non modifiés).
 *
 * Note : le paquet npm demandé « @resend/node » n’existe pas sur le registre ;
 * le SDK officiel est `resend` (déclaré dans package.json).
 */
import { Resend } from 'resend'

function buildWelcomeHtml({ recipientName, planId, sessionId }) {
  const name = recipientName?.trim() || 'Bonjour'
  return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8" /></head>
<body style="font-family:system-ui,sans-serif;line-height:1.6;color:#1a1a1a;">
  <p>${name},</p>
  <p>Merci pour votre confiance. Votre paiement est bien enregistré.</p>
  <p><strong>Pack :</strong> ${planId || '—'}<br/>
  <strong>Référence :</strong> ${sessionId || '—'}</p>
  <p>Je vous contacte sous 24h pour lancer votre projet.</p>
  <p>— Tristan, TrstnWeb</p>
</body>
</html>
`.trim()
}

/**
 * @returns {{ skipped: boolean, reason?: string, id?: string }}
 */
export async function sendWelcomeWithResend({ recipientEmail, recipientName, planId, sessionId }) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return { skipped: true, reason: 'resend_api_key_missing' }
  }
  const to = String(recipientEmail || '').trim()
  if (!to) {
    return { skipped: true, reason: 'recipient_email_missing' }
  }

  const from = process.env.RESEND_FROM_EMAIL?.trim() || 'TrstnWeb <onboarding@resend.dev>'
  const resend = new Resend(apiKey)

  const { data, error } = await resend.emails.send({
    from,
    to,
    subject: 'Bienvenue chez TrstnWeb — merci pour votre commande',
    html: buildWelcomeHtml({ recipientName, planId, sessionId }),
  })

  if (error) {
    throw new Error(error.message || String(error))
  }

  return { skipped: false, id: data?.id }
}

/** Route Vercel : ce fichier est surtout un module ; pas d’usage HTTP direct prévu. */
export default async function handler(_req, res) {
  res.setHeader('Allow', 'GET')
  return res.status(405).json({
    error: 'Ce endpoint ne sert pas directement. Les emails partent depuis le webhook Stripe.',
  })
}
