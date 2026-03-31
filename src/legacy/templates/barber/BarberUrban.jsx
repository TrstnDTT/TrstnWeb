import { motion } from 'framer-motion'
import { Scissors, Calendar, Star, Zap } from 'lucide-react'

/** Photos issues de PicFolder/SalonDeCoiffure → public/urban-cuts */
const ASSETS = {
  hero: '/urban-cuts/industry-barber.jpg',
  ambianceBarbier: '/urban-cuts/iranian-barber.jpg',
  galerie: [
    '/urban-cuts/pack-quir.jpg',
    '/urban-cuts/salon-abscon.jpg',
    '/urban-cuts/salon-faidherbe.webp',
    '/urban-cuts/todecacho.webp',
  ],
  contact: '/urban-cuts/a-propos.jpeg',
}

function BarberUrban({ theme }) {
  return (
    <div
      className="min-h-[100dvh]"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
        fontFamily: theme.fontFamily,
      }}
    >
      {/* Hero */}
      <section className="relative flex h-[100dvh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ASSETS.hero}
            alt=""
            className="h-full w-full object-cover"
            style={{ filter: 'contrast(1.05) saturate(0.95)' }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#141414]/88 to-black/92"
            aria-hidden
          />
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                ${theme.primaryColor} 0px,
                ${theme.primaryColor} 2px,
                transparent 2px,
                transparent 10px
              )`,
            }}
            aria-hidden
          />
        </div>

        <div className="relative z-10 px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mb-8"
            >
              <Scissors className="mx-auto h-24 w-24 drop-shadow-lg" style={{ color: theme.primaryColor }} />
            </motion.div>
            <h1
              className="mb-4 text-8xl font-bold uppercase tracking-tighter text-white drop-shadow-md md:text-9xl"
              style={{ fontFamily: theme.headingFont }}
            >
              URBAN
              <br />
              CUTS
            </h1>
            <div className="mx-auto mb-6 h-1 w-32" style={{ backgroundColor: theme.primaryColor }} />
            <p className="mb-8 text-2xl uppercase tracking-widest text-white/95">
              Des vrais hommes. Des vraies coupes.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-12 py-5 text-xl font-bold uppercase tracking-wider"
              style={{
                backgroundColor: theme.primaryColor,
                color: theme.backgroundColor,
              }}
            >
              Réserver
            </motion.button>
          </motion.div>
        </div>

        <div className="absolute left-0 top-0 z-[5] h-2 w-full" style={{ backgroundColor: theme.primaryColor }} />
        <div className="absolute bottom-0 left-0 z-[5] h-2 w-full" style={{ backgroundColor: theme.primaryColor }} />
      </section>

      {/* Prestations */}
      <section className="px-8 py-24" style={{ backgroundColor: theme.secondaryColor, color: theme.accentColor }}>
        <div className="mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-6xl font-bold uppercase"
            style={{ fontFamily: theme.headingFont }}
          >
            Prestations
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: 'Le classique',
                desc: 'Coupe traditionnelle & mise en forme',
                price: '45 €',
                duration: '45 min',
              },
              {
                title: 'Le dégradé',
                desc: 'Dégradé net, finitions au rasoir',
                price: '55 €',
                duration: '60 min',
              },
              {
                title: 'Barbe & soin',
                desc: 'Taille de barbe & serviette chaude',
                price: '35 €',
                duration: '30 min',
              },
              {
                title: 'Le complet',
                desc: 'Coupe, dégradé, barbe & mise en forme',
                price: '85 €',
                duration: '90 min',
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group border-2 p-8 transition-transform hover:scale-105"
                style={{ borderColor: theme.primaryColor }}
              >
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-3xl font-bold uppercase" style={{ fontFamily: theme.headingFont }}>
                    {service.title}
                  </h3>
                  <span className="text-2xl font-bold" style={{ color: theme.primaryColor }}>
                    {service.price}
                  </span>
                </div>
                <p className="mb-2 text-lg">{service.desc}</p>
                <p className="text-sm opacity-70">{service.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bandeau barbier */}
      <section className="relative h-[min(48vh,480px)] w-full overflow-hidden">
        <img
          src={ASSETS.ambianceBarbier}
          alt="Poste barbier"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/35" aria-hidden />
      </section>

      {/* Pourquoi nous */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-6xl">
          <h2
            className="mb-16 text-center text-6xl font-bold uppercase"
            style={{ fontFamily: theme.headingFont }}
          >
            Pourquoi nous choisir
          </h2>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              { icon: Star, title: 'Expertise', desc: "Plus de 10 ans d'expérience" },
              { icon: Zap, title: 'Rapide', desc: 'Pas d’attente interminable' },
              { icon: Scissors, title: 'Précision', desc: 'À chaque passage' },
              { icon: Calendar, title: 'Flexible', desc: '7 jours sur 7' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="mb-4 inline-flex p-6" style={{ backgroundColor: theme.primaryColor }}>
                  <item.icon className="h-12 w-12" style={{ color: theme.backgroundColor }} />
                </div>
                <h3 className="mb-2 text-2xl font-bold uppercase" style={{ fontFamily: theme.headingFont }}>
                  {item.title}
                </h3>
                <p className="text-sm uppercase tracking-wider opacity-70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie — photos SalonDeCoiffure */}
      <section className="px-8 py-24" style={{ backgroundColor: theme.primaryColor, color: theme.backgroundColor }}>
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-8 text-6xl font-bold uppercase" style={{ fontFamily: theme.headingFont }}>
            Nos réalisations
          </h2>
          <p className="mb-16 text-xl uppercase tracking-widest">Quelques coupes du moment</p>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {ASSETS.galerie.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group relative aspect-square overflow-hidden rounded-sm border-2 border-white/20"
              >
                <img
                  src={src}
                  alt={`Réalisation ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Réservation + photo lieu */}
      <section className="px-8 py-24 text-center">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center md:gap-16 md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-sm border-4 shadow-xl"
            style={{ borderColor: theme.primaryColor }}
          >
            <img
              src={ASSETS.contact}
              alt="Espace salon"
              className="aspect-[4/3] w-full object-cover md:aspect-[5/4]"
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="mb-8 text-5xl font-bold uppercase md:text-6xl" style={{ fontFamily: theme.headingFont }}>
              Réservez votre coupe
            </h2>
            <p className="mb-12 text-xl uppercase tracking-wider opacity-90">
              Sans rendez-vous possible · Réservation en ligne
            </p>
            <div className="mb-12 space-y-4">
              <p className="text-lg">
                <span className="font-bold">Adresse :</span> 42 rue Oberkampf, 75011 Paris
              </p>
              <p className="text-lg">
                <span className="font-bold">Horaires :</span> lun.–dim., 9h–21h
              </p>
              <p className="text-lg">
                <span className="font-bold">Téléphone :</span> 01 23 45 67 89
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-16 py-6 text-xl font-bold uppercase tracking-widest"
              style={{
                backgroundColor: theme.primaryColor,
                color: theme.backgroundColor,
              }}
            >
              Réserver en ligne
            </motion.button>
          </motion.div>
        </div>
      </section>

      <footer
        className="border-t-4 py-8 text-center"
        style={{
          backgroundColor: theme.secondaryColor,
          borderColor: theme.primaryColor,
          color: theme.accentColor,
        }}
      >
        <p className="font-bold uppercase tracking-wider">
          © {new Date().getFullYear()} Urban Cuts — Le style au rendez-vous
        </p>
      </footer>
    </div>
  )
}

export default BarberUrban
