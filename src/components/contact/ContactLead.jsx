/**
 * Formulaire conversion locale — EmailJS dédié (template LEAD).
 * N’altère pas le formulaire Contact général du site.
 */
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Téléphone FR / international : au moins 8 chiffres, max raisonnable. */
function isValidPhone(value) {
  const digits = String(value).replace(/\D/g, '')
  return digits.length >= 8 && digits.length <= 15
}

export function ContactLead({ className = '' }) {
  const formRef = useRef(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submittedName, setSubmittedName] = useState('')
  const [error, setError] = useState(null)

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateIdLead = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_LEAD
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    const form = formRef.current
    if (!form) return

    const fd = new FormData(form)
    const name = String(fd.get('name') ?? '').trim()
    const email = String(fd.get('email') ?? '').trim()
    const phone = String(fd.get('phone') ?? '').trim()
    const message = String(fd.get('message') ?? '').trim()

    if (!name || !email || !phone || !message) {
      setError('Merci de remplir tous les champs obligatoires.')
      return
    }
    if (!emailRe.test(email)) {
      setError('Indiquez une adresse e-mail professionnelle valide.')
      return
    }
    if (!isValidPhone(phone)) {
      setError('Indiquez un numéro de téléphone valide (au moins 8 chiffres).')
      return
    }

    if (!serviceId || !templateIdLead || !publicKey) {
      setError(
        'Configuration EmailJS incomplète : renseignez VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_PUBLIC_KEY et VITE_EMAILJS_TEMPLATE_ID_LEAD (template dédié lead) dans .env.local.',
      )
      return
    }

    setIsSubmitting(true)
    try {
      await emailjs.sendForm(serviceId, templateIdLead, form, { publicKey })
      setSubmittedName(name)
      setIsSuccess(true)
      form.reset()
    } catch {
      setError("L'envoi a échoué. Réessayez dans un instant ou contactez-nous par e-mail.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div
        className={[
          'rounded-[10px] border border-white/[0.12] bg-[#0c0c0e]/90 px-5 py-10 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.65)] backdrop-blur-md sm:px-8 sm:py-12',
          className,
        ].join(' ')}
        role="status"
        aria-live="polite"
      >
        <p
          className="text-center text-[17px] leading-[1.65] text-[#e8e6e1] sm:text-[18px]"
          style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
        >
          C&apos;est parti ! Merci {submittedName}, je vous rappelle très vite.
        </p>
      </div>
    )
  }

  return (
    <div
      className={[
        'rounded-[10px] border border-white/[0.12] bg-[#0c0c0e]/90 px-5 py-8 shadow-[0_24px_80px_-24px_rgba(0,0,0,0.65)] backdrop-blur-md sm:px-8 sm:py-10',
        className,
      ].join(' ')}
    >
      <h2
        className="text-balance text-[22px] font-light leading-snug tracking-tight text-[#f4f1ea] sm:text-[26px] md:text-[28px]"
        style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
      >
        Propulsez votre commerce local sur Google dès aujourd&apos;hui.
      </h2>
      <p className="mt-3 text-[13px] leading-relaxed text-[#a8a5a0] sm:text-[14px]">
        Tristan analyse personnellement votre projet. Réponse sous 24h.
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
        <div>
          <label htmlFor="lead-name" className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.2em] text-[#8a8780]">
            Nom ou enseigne <span className="text-amber-200/90">*</span>
          </label>
          <input
            id="lead-name"
            name="name"
            type="text"
            autoComplete="organization"
            required
            className="w-full min-h-[48px] rounded-[6px] border border-white/[0.14] bg-black/35 px-3.5 py-3 text-[15px] text-[#f4f1ea] outline-none ring-0 transition-[border-color,box-shadow] placeholder:text-[#5c5955] focus:border-amber-200/35 focus:shadow-[0_0_0_1px_rgba(251,191,36,0.12)]"
            placeholder="Boulangerie Martin"
          />
        </div>

        <div>
          <label htmlFor="lead-email" className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.2em] text-[#8a8780]">
            E-mail professionnel <span className="text-amber-200/90">*</span>
          </label>
          <input
            id="lead-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full min-h-[48px] rounded-[6px] border border-white/[0.14] bg-black/35 px-3.5 py-3 text-[15px] text-[#f4f1ea] outline-none ring-0 transition-[border-color,box-shadow] placeholder:text-[#5c5955] focus:border-amber-200/35 focus:shadow-[0_0_0_1px_rgba(251,191,36,0.12)]"
            placeholder="contact@commerce.fr"
          />
        </div>

        <div>
          <label htmlFor="lead-phone" className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.2em] text-[#8a8780]">
            Téléphone <span className="text-amber-200/90">*</span>
          </label>
          <input
            id="lead-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            className="w-full min-h-[48px] rounded-[6px] border border-white/[0.14] bg-black/35 px-3.5 py-3 text-[15px] text-[#f4f1ea] outline-none ring-0 transition-[border-color,box-shadow] placeholder:text-[#5c5955] focus:border-amber-200/35 focus:shadow-[0_0_0_1px_rgba(251,191,36,0.12)]"
            placeholder="06 12 34 56 78"
          />
        </div>

        <div>
          <label htmlFor="lead-message" className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.2em] text-[#8a8780]">
            Détails du projet <span className="text-amber-200/90">*</span>
          </label>
          <textarea
            id="lead-message"
            name="message"
            rows={4}
            required
            className="min-h-[120px] w-full resize-y rounded-[6px] border border-white/[0.14] bg-black/35 px-3.5 py-3 text-[15px] text-[#f4f1ea] outline-none ring-0 transition-[border-color,box-shadow] placeholder:text-[#5c5955] focus:border-amber-200/35 focus:shadow-[0_0_0_1px_rgba(251,191,36,0.12)]"
            placeholder="Ville, type d’activité, objectifs visibilité locale…"
          />
        </div>

        {error ? (
          <p className="text-[13px] leading-relaxed text-red-400/95" role="alert">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 w-full min-h-[52px] rounded-[6px] border border-amber-200/25 bg-amber-500/[0.12] px-4 py-3.5 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#faf6ef] transition-[background-color,opacity] hover:bg-amber-500/[0.18] disabled:cursor-not-allowed disabled:opacity-55"
        >
          {isSubmitting ? 'Envoi en cours...' : 'Demander une analyse'}
        </button>
      </form>
    </div>
  )
}
