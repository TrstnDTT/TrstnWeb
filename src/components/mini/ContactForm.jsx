import { useMemo, useState } from 'react'

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate({ name, email, phone, message }) {
  const errors = {}
  if (!name.trim() || name.trim().length < 2) {
    errors.name = 'Indiquez au moins 2 caractères.'
  }
  if (!email.trim() || !emailRe.test(email.trim())) {
    errors.email = 'Une adresse e-mail valide est requise.'
  }
  if (phone.trim() && !/^[\d\s+.()-]{8,}$/.test(phone.trim())) {
    errors.phone = 'Numéro invalide.'
  }
  if (!message.trim() || message.trim().length < 10) {
    errors.message = 'Message trop court (10 caractères minimum).'
  }
  return errors
}

/** Formulaire stylé selon l’identité du site (couleurs inline). */
export function ContactForm({ contact, site }) {
  const t = site.textColor
  const s = site.secondaryColor
  const p = site.surfaceColor ?? site.primaryColor

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [touched, setTouched] = useState({})
  const [sent, setSent] = useState(false)

  const shouldValidate =
    sent || Object.values(touched).some(Boolean)

  const errors = useMemo(() => {
    if (!shouldValidate) return {}
    return validate(values)
  }, [values, shouldValidate])

  const setField = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }))
  }

  const onBlur = (field) => {
    setTouched((touchedState) => ({ ...touchedState, [field]: true }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setTouched({ name: true, email: true, phone: true, message: true })
    const next = validate(values)
    if (Object.keys(next).length) {
      setSent(false)
      return
    }
    setSent(true)
  }

  const showErr = (field) =>
    (touched[field] || sent) && errors[field] ? errors[field] : null

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 0',
    borderBottom: `1px solid ${s}66`,
    background: 'transparent',
    color: t,
    fontFamily: site.fontFamilyBody,
  }

  const labelStyle = {
    display: 'block',
    marginBottom: '0.35rem',
    fontSize: '10px',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    opacity: 0.75,
    color: t,
    fontFamily: site.fontFamilyBody,
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl" noValidate>
      <div className="mb-6">
        <label htmlFor="cf-name" style={labelStyle}>
          {contact.nameLabel}
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          autoComplete="name"
          style={inputStyle}
          value={values.name}
          onChange={setField('name')}
          onBlur={() => onBlur('name')}
        />
        {showErr('name') && (
          <p className="mt-1 text-xs text-red-400">{errors.name}</p>
        )}
      </div>
      <div className="mb-6">
        <label htmlFor="cf-email" style={labelStyle}>
          {contact.emailLabel}
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          autoComplete="email"
          style={inputStyle}
          value={values.email}
          onChange={setField('email')}
          onBlur={() => onBlur('email')}
        />
        {showErr('email') && (
          <p className="mt-1 text-xs text-red-400">{errors.email}</p>
        )}
      </div>
      <div className="mb-6">
        <label htmlFor="cf-phone" style={labelStyle}>
          {contact.phoneLabel}{' '}
          <span style={{ opacity: 0.5 }}>(optionnel)</span>
        </label>
        <input
          id="cf-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          style={inputStyle}
          value={values.phone}
          onChange={setField('phone')}
          onBlur={() => onBlur('phone')}
        />
        {showErr('phone') && (
          <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
        )}
      </div>
      <div className="mb-6">
        <label htmlFor="cf-msg" style={labelStyle}>
          {contact.messageLabel}
        </label>
        <textarea
          id="cf-msg"
          name="message"
          rows={5}
          style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }}
          value={values.message}
          onChange={setField('message')}
          onBlur={() => onBlur('message')}
        />
        {showErr('message') && (
          <p className="mt-1 text-xs text-red-400">{errors.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="mt-2 px-8 py-3 text-xs font-semibold uppercase tracking-wider transition hover:opacity-90"
        style={{
          backgroundColor: s,
          color: p,
          fontFamily: site.fontFamilyBody,
          border: `2px solid ${s}`,
        }}
      >
        {contact.submitLabel}
      </button>
      {sent && (
        <p className="mt-4 text-sm opacity-90" style={{ color: t }} role="status">
          Merci — TrstnWeb vous recontactera bientôt.
        </p>
      )}
    </form>
  )
}
