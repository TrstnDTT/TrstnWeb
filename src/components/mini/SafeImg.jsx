import { useState } from 'react'
import { normalizeUnsplashUrl } from '../../lib/unsplash.js'
import { DEFAULT_IMG_FALLBACK } from './safeImgConstants.js'

function SafeImgInner({
  primaryUrl,
  fallbackUrl,
  onError: onErrorProp,
  onLoad: onLoadProp,
  fadeIn = true,
  priority = false,
  alt,
  className = '',
  style,
  loading: loadingProp,
  ...rest
}) {
  const [u, setU] = useState(primaryUrl)
  const [loaded, setLoaded] = useState(false)

  const finalAlt = alt !== undefined && alt !== null ? alt : ''
  const loading = priority ? 'eager' : loadingProp ?? 'lazy'

  return (
    <img
      {...rest}
      src={u}
      alt={finalAlt}
      referrerPolicy="no-referrer"
      decoding="async"
      loading={loading}
      fetchPriority={priority ? 'high' : undefined}
      className={className}
      style={{
        ...style,
        ...(fadeIn
          ? {
              opacity: loaded ? 1 : 0,
              transition: 'opacity 0.38s ease-out',
            }
          : {}),
      }}
      onLoad={(e) => {
        setLoaded(true)
        onLoadProp?.(e)
      }}
      onError={(e) => {
        if (u !== fallbackUrl) {
          setU(fallbackUrl)
          return
        }
        onErrorProp?.(e)
      }}
    />
  )
}

/**
 * <img> avec repli si l’URL est absente, 404, ou bloquée — évite l’icône « image cassée ».
 * Normalise les URL Unsplash (w ≤ 1200, q=80). Fondu à l’arrivée pour limiter le CLS (sauf `fadeIn={false}`).
 * `priority` = chargement prioritaire pour les hero (équivalent next/image en Vite).
 */
export function SafeImg({
  src,
  fallback = DEFAULT_IMG_FALLBACK,
  onError: onErrorProp,
  onLoad: onLoadProp,
  fadeIn = true,
  priority = false,
  alt,
  className = '',
  style,
  loading: loadingProp,
  ...rest
}) {
  const normalizedSrc = typeof src === 'string' ? normalizeUnsplashUrl(src) : src
  const normalizedFallback =
    typeof fallback === 'string' ? normalizeUnsplashUrl(fallback) : fallback

  const primary = normalizedSrc || normalizedFallback
  const displayKey = `${String(primary)}|${String(normalizedFallback)}`

  return (
    <SafeImgInner
      key={displayKey}
      primaryUrl={primary}
      fallbackUrl={normalizedFallback}
      onError={onErrorProp}
      onLoad={onLoadProp}
      fadeIn={fadeIn}
      priority={priority}
      alt={alt}
      className={className}
      style={style}
      loading={loadingProp}
      {...rest}
    />
  )
}
