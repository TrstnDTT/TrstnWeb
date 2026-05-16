/**
 * Landing conversion nationale — formulaire EmailJS dédié (template LEAD).
 * Le formulaire général reste sur /contact.
 */
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { ContactLead } from '../components/contact/ContactLead.jsx'
import { ShellThemeToggle } from '../components/shell/ShellThemeToggle.jsx'
import { SITE } from '../constants.js'

export default function ContactLeadPage() {
  return (
    <div className="trstn-ui min-h-[100dvh] bg-[#060607] text-[#e8e6e1] antialiased">
      <ShellThemeToggle className="fixed right-4 top-4 z-[300] md:right-8 md:top-6" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(180,140,80,0.08),transparent_55%)]" />

      <header className="relative z-[1] border-b border-white/[0.06] px-4 py-4 sm:px-6">
        <Link
          to="/"
          className="inline-flex min-h-[44px] items-center gap-2 text-[13px] text-[#a8a5a0] transition-colors hover:text-[#f4f1ea]"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden />
          {SITE.title}
        </Link>
      </header>

      <main className="relative z-[1] mx-auto max-w-lg px-4 pb-16 pt-8 sm:px-6 sm:pt-12">
        <ContactLead />
      </main>
    </div>
  )
}
