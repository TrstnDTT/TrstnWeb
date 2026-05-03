import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PricingCards } from '../components/pricing/PricingCards.jsx'
import { SITE } from '../constants.js'

export default function TarifsPage() {
  return (
    <div className="trstn-ui min-h-[100dvh] bg-[#08090b] text-[#efede8] antialiased">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_130%_80%_at_50%_-10%,rgba(212,178,108,0.12),transparent_60%)]" />

      <header className="relative z-[1] border-b border-white/[0.08] px-4 py-4 sm:px-6">
        <Link
          to="/"
          className="inline-flex min-h-[44px] items-center gap-2 text-[13px] text-[#b5b2ab] transition-colors hover:text-[#f1eee8]"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
          {SITE.title}
        </Link>
      </header>

      <main className="relative z-[1] pb-8 pt-10 sm:pt-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b8aa88]">
            Offres TrstnWeb
          </p>
          <h1
            className="mt-3 text-balance text-[34px] leading-[1.05] text-[#f8f5ed] sm:text-[48px]"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            Des tarifs clairs pour lancer votre croissance locale.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[#c9c5bc]">
            Choisissez le niveau d&apos;accompagnement adapte a votre commerce. Paiement securise
            avec Stripe, demarrage rapide et suivi humain.
          </p>
        </div>

        <div className="mt-10 sm:mt-12">
          <PricingCards />
        </div>
      </main>
    </div>
  )
}
