import { loadStripe } from '@stripe/stripe-js'

let stripePromise

function getStripe() {
  if (!stripePromise) {
    const key = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
    if (!key) throw new Error('VITE_STRIPE_PUBLISHABLE_KEY is missing.')
    stripePromise = loadStripe(key)
  }
  return stripePromise
}

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

  const stripe = await getStripe()
  if (!stripe) throw new Error('Stripe failed to initialize.')

  const result = await stripe.redirectToCheckout({ sessionId: payload.sessionId })
  if (result?.error) throw new Error(result.error.message || 'Redirection Stripe impossible.')
}
