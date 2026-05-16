import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PricingCards } from '../components/pricing/PricingCards.jsx'
import { ShellThemeToggle } from '../components/shell/ShellThemeToggle.jsx'
import { SITE } from '../constants.js'

const serif = { fontFamily: '"Cormorant Garamond", Georgia, serif' }

const journeySteps = [
  {
    title: 'Notification',
    body: 'Je reçois une alerte immédiate après votre paiement Stripe.',
  },
  {
    title: 'Appel de briefing (24h)',
    body: 'Je vous contacte personnellement pour définir la stratégie.',
  },
  {
    title: 'Création',
    body: 'Je code votre solution sur-mesure.',
  },
  {
    title: 'Livraison',
    body: 'Votre business prend une nouvelle dimension en ligne.',
  },
]

const whyModel = [
  {
    title: 'Accessibilité',
    body: "Pas besoin de sortir 3000€ d'un coup pour un site de qualité agence.",
  },
  {
    title: 'Sérénité',
    body: 'Votre site ne devient jamais obsolète. Je m’occupe des mises à jour et de la sécurité en continu.',
  },
  {
    title: 'Partenariat',
    body: 'Vous avez un expert au bout du fil, même à distance, pas un centre d’appel.',
  },
]

export default function TarifsPage() {
  return (
    <div className="trstn-ui min-h-[100dvh] bg-[#08090b] text-[#efede8] antialiased">
      <ShellThemeToggle className="fixed right-4 top-4 z-[300] md:right-8 md:top-6" />
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

      <main className="relative z-[1] pb-16 pt-10 sm:pt-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b8aa88]">
            Accompagnement digital
          </p>
          <h1
            className="mt-3 text-balance text-[32px] leading-[1.08] text-[#f8f5ed] sm:text-[44px] md:text-[48px]"
            style={serif}
          >
            Finalisez votre projet digital avec TrstnWeb
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-[#c9c5bc] sm:text-[16px]">
            Sélectionnez l&apos;accompagnement qui correspond à l&apos;étape actuelle de votre business. Chaque pack
            inclut mon expertise à distance, disponible <strong className="font-semibold text-[#ebe7df]">partout en France</strong>.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-[11px] font-semibold uppercase tracking-[0.26em] text-[#c4b896]">
            Nos formules d&apos;accompagnement
          </h2>
        </div>

        <div className="mt-6 sm:mt-8">
          <PricingCards />
        </div>

        <section className="mx-auto mt-16 max-w-3xl px-4 sm:px-6">
          <h2 className="text-center text-[11px] font-semibold uppercase tracking-[0.26em] text-[#c4b896]">
            L&apos;expertise humaine avant tout
          </h2>
          <blockquote
            className="mt-6 border-l-2 border-amber-300/40 pl-5 text-left text-[17px] leading-[1.75] text-[#dcd8cf] sm:text-[18px]"
            style={serif}
          >
            « Un site web n&apos;est pas un produit fini, c&apos;est un outil qui évolue. Je reste à vos côtés pour le
            piloter. »
          </blockquote>
        </section>

        <section className="mx-auto mt-16 max-w-3xl px-4 sm:px-6">
          <h2 className="text-center text-[11px] font-semibold uppercase tracking-[0.26em] text-[#c4b896]">
            Votre parcours après la commande
          </h2>
          <ol className="mt-8 space-y-6">
            {journeySteps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-[13px] font-semibold text-amber-100/95"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <div>
                  <p className="text-[15px] font-semibold text-[#f2efe8]">{step.title}</p>
                  <p className="mt-1 text-[14px] leading-relaxed text-[#b5b1a9]">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mx-auto mt-16 max-w-3xl px-4 sm:px-6">
          <h2 className="text-center text-[11px] font-semibold uppercase tracking-[0.26em] text-[#c4b896]">
            Pourquoi ce modèle (acompte + abonnement) ?
          </h2>
          <ul className="mt-8 space-y-5">
            {whyModel.map((item) => (
              <li key={item.title} className="rounded-[10px] border border-white/[0.08] bg-white/[0.03] px-4 py-4 sm:px-5">
                <p className="text-[14px] font-semibold text-[#f0ece4]">{item.title}</p>
                <p className="mt-1.5 text-[14px] leading-relaxed text-[#b5b1a9]">{item.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <p className="mx-auto mt-14 max-w-xl px-4 text-center text-[12px] leading-relaxed text-[#8a8680] sm:px-6">
          Paiement sécurisé via Stripe. Engagement de 12 mois.
        </p>
      </main>
    </div>
  )
}
