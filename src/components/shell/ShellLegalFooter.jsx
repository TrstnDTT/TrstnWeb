import { Link } from 'react-router-dom'
import { SITE } from '../../constants.js'

/**
 * Pied de page shell — marque TrstnWeb visible + liens légaux (SEO & conformité).
 */
export function ShellLegalFooter({ light = true, className = '' }) {
  const y = new Date().getFullYear()
  const L = light

  return (
    <footer
      className={[
        'border-t px-5 py-10 sm:px-8',
        L ? 'border-black/[0.08] bg-[#ececee]/90' : 'border-white/[0.08] bg-[#08080a]/95',
        className,
      ].join(' ')}
      role="contentinfo"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p
          className={[
            'text-[15px] font-extrabold tracking-[-0.02em]',
            L ? 'text-[#0a0a0a]' : 'text-white',
          ].join(' ')}
          style={{ fontFamily: "'Syne', ui-sans-serif, system-ui, sans-serif" }}
        >
          {SITE.title}
        </p>
        <p
          className={['mt-2 text-[12px] leading-relaxed', L ? 'text-[#575757]' : 'text-[#a1a1a1]'].join(' ')}
        >
          {SITE.legal.tagline}
        </p>
        <p
          className={['mt-6 text-[11px] leading-relaxed', L ? 'text-[#575757]' : 'text-[#a1a1a1]'].join(' ')}
        >
          {SITE.legal.copyright(y)}
        </p>
        <p className={['mt-3 text-[11px] leading-relaxed', L ? 'text-[#575757]' : 'text-[#a1a1a1]'].join(' ')}>
          {SITE.legal.editor}
        </p>
        <p className={['mt-2 text-[11px] leading-relaxed', L ? 'text-[#575757]' : 'text-[#a1a1a1]'].join(' ')}>
          {SITE.legal.contactLine(SITE.contactEmail)}
        </p>
        <p className={['mt-2 text-[11px] leading-relaxed', L ? 'text-[#575757]' : 'text-[#a1a1a1]'].join(' ')}>
          {SITE.legal.hosting}
        </p>
        <p className={['mt-3 text-[11px] leading-relaxed', L ? 'text-[#575757]' : 'text-[#a1a1a1]'].join(' ')}>
          {SITE.legal.dataNotice}
        </p>
        <p className="mt-6">
          <Link
            to="/mentions-legales"
            className={[
              'text-[11px] font-medium underline underline-offset-4 transition-colors',
              L ? 'text-[#0a0a0a] hover:text-black' : 'text-[#e5e5e5] hover:text-white',
            ].join(' ')}
          >
            {SITE.legal.mentionsLinkLabel}
          </Link>
        </p>
      </div>
    </footer>
  )
}
