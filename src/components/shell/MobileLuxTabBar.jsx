/**
 * Tab bar flottante — mobile uniquement, style app native (verre, icônes).
 */
import { NavLink } from 'react-router-dom'
import { Info, LayoutGrid, Mail } from 'lucide-react'
import { useShellTheme } from '../../context/ShellThemeContext.jsx'

const tabs = [
  { to: '/portfolio', label: 'Projets', Icon: LayoutGrid, end: false },
  { to: '/about', label: 'À propos', Icon: Info, end: false },
  { to: '/contact', label: 'Contact', Icon: Mail, end: false },
]

export function MobileLuxTabBar() {
  const { effectiveTheme, projectViewOpen } = useShellTheme()
  const L = effectiveTheme === 'light'

  if (projectViewOpen) {
    return null
  }

  return (
    <nav
      className="pointer-events-auto fixed inset-x-0 bottom-0 z-[220] md:hidden"
      style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
      aria-label="Navigation principale"
    >
      <div className="mx-auto max-w-lg px-3 pb-2">
        <div
          className={[
            'flex items-stretch justify-around gap-1 rounded-[1.35rem] border px-1 py-1.5 shadow-[0_-8px_40px_-12px_rgba(0,0,0,0.35)] backdrop-blur-2xl',
            L
              ? 'border-black/[0.08] bg-white/[0.72] shadow-black/[0.06]'
              : 'border-white/[0.12] bg-[rgba(12,12,14,0.65)]',
          ].join(' ')}
        >
          {tabs.map(({ to, label, Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                [
                  'flex min-h-[48px] min-w-[48px] flex-1 flex-col items-center justify-center gap-1 rounded-xl px-2 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] transition-[transform,background-color,color] duration-200 active:scale-[0.96]',
                  isActive
                    ? L
                      ? 'bg-black/[0.06] text-[#000000]'
                      : 'bg-white/[0.12] text-white'
                    : L
                      ? 'trstn-a11y-nav-link-light'
                      : 'trstn-a11y-nav-link-dark',
                ].join(' ')
              }
            >
              <Icon className="h-[22px] w-[22px] shrink-0" strokeWidth={1.35} aria-hidden tabIndex={-1} focusable="false" />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
