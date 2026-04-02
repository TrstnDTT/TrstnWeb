import { useEffect, useState } from 'react'

/** Image générique distante si tout échoue (bar, intérieur). */
export const DEFAULT_IMG_FALLBACK =
  'https://images.unsplash.com/photo-1514362546517-6272a9329d52?auto=format&fit=crop&w=1600&q=85'

/** Salon coiffure — si /stock-photos/ absent. */
export const SALON_IMG_FALLBACK =
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=82'

/** Barbier — si assets locaux absents. */
export const BARBER_IMG_FALLBACK =
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=82'

/**
 * <img> avec repli si l’URL est absente, 404, ou bloquée — évite l’icône « image cassée ».
 */
export function SafeImg({ src, fallback = DEFAULT_IMG_FALLBACK, onError: onErrorProp, ...rest }) {
  const [u, setU] = useState(src || fallback)
  useEffect(() => {
    setU(src || fallback)
  }, [src, fallback])

  return (
    <img
      {...rest}
      src={u}
      referrerPolicy="no-referrer"
      decoding="async"
      onError={(e) => {
        if (u !== fallback) setU(fallback)
        onErrorProp?.(e)
      }}
    />
  )
}
