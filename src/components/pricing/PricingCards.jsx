import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ShieldCheck, Sparkles } from 'lucide-react'
import { PRICING_PLANS, REASSURANCE_BADGES } from '../../data/pricingPlans.js'
import { startCheckoutForPlan } from '../../lib/stripeClient.js'

export function PricingCards() {
  const [submittingPlanId, setSubmittingPlanId] = useState(null)
  const [error, setError] = useState(null)

  const handleCheckout = async (planId) => {
    setError(null)
    setSubmittingPlanId(planId)
    try {
      await startCheckoutForPlan(planId)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur de paiement.')
      setSubmittingPlanId(null)
    }
  }

  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
      <div className="mb-6 flex flex-wrap gap-2">
        {REASSURANCE_BADGES.map((badge) => (
          <span
            key={badge}
            className="inline-flex min-h-[36px] items-center rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] font-medium tracking-[0.08em] text-[#d9d6cf] sm:text-[12px]"
          >
            <ShieldCheck className="mr-1.5 h-3.5 w-3.5 text-emerald-300" aria-hidden />
            {badge}
          </span>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-3 md:gap-6">
        {PRICING_PLANS.map((plan) => {
          const isLoading = submittingPlanId === plan.id
          return (
            <article
              key={plan.id}
              className={[
                'relative flex min-h-[420px] flex-col rounded-[12px] border bg-[#0f1012]/95 p-5 shadow-[0_16px_60px_-24px_rgba(0,0,0,0.7)] sm:p-6',
                plan.isPopular
                  ? 'border-amber-300/45 ring-1 ring-amber-300/35'
                  : 'border-white/[0.12]',
              ].join(' ')}
            >
              {plan.isPopular ? (
                <span className="mb-4 inline-flex w-fit items-center rounded-full border border-amber-300/35 bg-amber-200/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-100">
                  <Sparkles className="mr-1.5 h-3.5 w-3.5" aria-hidden />
                  Le plus populaire
                </span>
              ) : null}

              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b4b0a8]">
                {plan.name}
              </p>
              <h3
                className="mt-2 text-[30px] leading-none text-[#f5f3ef] sm:text-[34px]"
                style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
              >
                {plan.subtitle}
              </h3>
              {plan.tagline ? (
                <p className="mt-2 text-[14px] italic leading-snug text-[#b8b4ac]">{plan.tagline}</p>
              ) : null}
              <p className="mt-4 text-[20px] font-semibold text-[#f7f2e4]">{plan.depositLabel}</p>
              <p className="mt-1 text-[14px] text-[#bdb8ae]">{plan.recurringLabel}</p>
              <p className="mt-4 text-[14px] leading-relaxed text-[#cdc8bf]">{plan.description}</p>

              <ul className="mt-5 space-y-2.5 text-[13px] text-[#e3e0da]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-amber-200/75" aria-hidden />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                {plan.isContactOnly ? (
                  <Link
                    to="/contact"
                    className="inline-flex min-h-[48px] w-full items-center justify-center rounded-[8px] border border-white/20 bg-white/[0.02] px-4 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.16em] text-[#f4f1ea] transition-colors hover:bg-white/[0.09]"
                  >
                    {plan.ctaLabel}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleCheckout(plan.id)}
                    disabled={!!submittingPlanId}
                    className="inline-flex min-h-[48px] w-full items-center justify-center rounded-[8px] border border-amber-200/35 bg-amber-300/[0.12] px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#f9f7f2] transition-colors hover:bg-amber-300/[0.2] disabled:cursor-not-allowed disabled:opacity-55"
                  >
                    {isLoading ? 'Envoi vers Stripe...' : plan.ctaLabel}
                  </button>
                )}
              </div>
            </article>
          )
        })}
      </div>

      {error ? (
        <p role="alert" className="mt-5 text-[13px] text-red-300">
          {error}
        </p>
      ) : null}
    </section>
  )
}
