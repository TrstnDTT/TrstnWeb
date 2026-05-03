/**
 * Démarre le Checkout Stripe via l’URL hébergée (session.url).
 * redirectToCheckout a été retiré de Stripe.js — redirection HTTP directe.
 */
export async function startCheckoutForPlan(planId) {
  const res = await fetch('/api/stripe/create-checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ planId }),
  })

  const payload = await res.json().catch(() => ({}))
  if (!res.ok) {
    throw new Error(payload?.error || 'Impossible de lancer le paiement.')
  }

  const url = typeof payload?.url === 'string' ? payload.url.trim() : ''
  if (!url || !/^https?:\/\//i.test(url)) {
    throw new Error('Réponse Stripe invalide : URL de paiement manquante.')
  }

  window.location.href = url
}
