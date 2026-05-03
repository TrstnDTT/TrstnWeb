/* global process */

export const STRIPE_PLAN_CATALOG = {
  essential: {
    mode: 'subscription',
    lineItems: [
      { envKey: 'STRIPE_PRICE_ESSENTIAL_DEPOSIT', quantity: 1 },
      { envKey: 'STRIPE_PRICE_ESSENTIAL_SUB', quantity: 1 },
    ],
  },
  boost: {
    mode: 'subscription',
    lineItems: [
      { envKey: 'STRIPE_PRICE_BOOST_DEPOSIT', quantity: 1 },
      { envKey: 'STRIPE_PRICE_BOOST_SUB', quantity: 1 },
    ],
  },
}

export function resolvePlanConfig(planId) {
  return STRIPE_PLAN_CATALOG[planId] || null
}

export function getLineItemsFromEnv(planConfig) {
  return planConfig.lineItems.map(({ envKey, quantity }) => {
    const price = process.env[envKey]
    if (!price) throw new Error(`Missing required env var: ${envKey}`)
    return { price, quantity }
  })
}
