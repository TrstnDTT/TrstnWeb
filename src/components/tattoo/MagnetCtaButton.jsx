import { useCallback, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

/**
 * CTA avec léger effet « aimant » + remplissage au survol.
 */
export function MagnetCtaButton({
  children,
  type = 'button',
  className = '',
  variant = 'light',
  onClick,
  to,
  href,
}) {
  const wrap = useRef(null)
  const [off, setOff] = useState({ x: 0, y: 0 })

  const move = useCallback((e) => {
    const el = wrap.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const cx = r.left + r.width / 2
    const cy = r.top + r.height / 2
    setOff({ x: (e.clientX - cx) * 0.12, y: (e.clientY - cy) * 0.12 })
  }, [])

  const leave = useCallback(() => setOff({ x: 0, y: 0 }), [])

  const base =
    variant === 'dark'
      ? 'border border-white/25 text-white/95 hover:text-[#0D0D0D]'
      : variant === 'warm'
        ? 'border border-[#2c2825]/30 text-[#2c2825] hover:text-[#f7f1e8]'
        : 'border border-[#1A1A1A]/28 text-[#1A1A1A] hover:text-[#F9F8F6]'

  const fill =
    variant === 'dark'
      ? 'before:bg-white'
      : variant === 'warm'
        ? 'before:bg-[#2c2825]'
        : 'before:bg-[#1A1A1A]'

  const inner = (
    <span
      ref={wrap}
      onMouseMove={move}
      onMouseLeave={leave}
      className={`relative isolate block overflow-hidden px-8 py-3.5 text-[10px] uppercase tracking-[0.28em] transition-all duration-500 hover:tracking-[0.2em] ${base} ${className} group`}
      style={{ transform: `translate(${off.x}px, ${off.y}px)` }}
    >
      <span
        className={`pointer-events-none absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100 ${fill}`}
        aria-hidden
      />
      <span className="relative z-[1] transition-colors duration-500 group-hover:delay-[35ms]">{children}</span>
    </span>
  )

  if (to) {
    return (
      <Link to={to} className="inline-block bg-transparent">
        {inner}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className="inline-block bg-transparent">
        {inner}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className="inline-block cursor-pointer border-0 bg-transparent p-0">
      {inner}
    </button>
  )
}
