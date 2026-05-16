import { Link } from 'react-router-dom'
import { ShellThemeToggle } from '../components/shell/ShellThemeToggle.jsx'

export default function MerciPage() {
  return (
    <div className="trstn-ui flex min-h-[100dvh] items-center justify-center bg-[#07080a] px-4 text-[#efede8]">
      <ShellThemeToggle className="fixed right-4 top-4 z-[300] md:right-8 md:top-6" />
      <div className="w-full max-w-2xl rounded-[12px] border border-white/[0.12] bg-white/[0.03] p-7 text-center shadow-[0_24px_80px_-30px_rgba(0,0,0,0.75)] sm:p-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#beaf8b]">
          Paiement confirme
        </p>
        <h1
          className="mt-4 text-balance text-[32px] leading-tight text-[#f7f4ec] sm:text-[42px]"
          style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
        >
          Bienvenue chez TrstnWeb, je vous contacte sous 24h pour lancer votre projet.
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-[#cdc8bf]">
          Merci pour votre confiance. Vous recevez egalement un recapitulatif de paiement via Stripe.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            to="/"
            className="inline-flex min-h-[46px] items-center justify-center rounded-[8px] border border-white/20 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.15em] text-[#f4f1ea] transition-colors hover:bg-white/[0.08]"
          >
            Retour a l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  )
}
