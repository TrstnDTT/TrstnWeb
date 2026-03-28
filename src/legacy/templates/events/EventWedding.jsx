import { motion } from 'framer-motion'
import { Heart, Calendar, MapPin, Mail, Phone, Sparkles, ArrowRight } from 'lucide-react'

function EventWedding({ theme }) {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
        fontFamily: theme.fontFamily,
      }}
    >
      {/* Hero Section - Romantic */}
      <section id="invitation" className="relative py-32 px-8 text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle, ${theme.primaryColor} 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Sparkles
              className="w-12 h-12 mx-auto mb-6"
              style={{ color: theme.primaryColor }}
            />
            <h1
              className="text-7xl md:text-8xl font-bold mb-6"
              style={{ fontFamily: theme.headingFont, color: theme.primaryColor }}
            >
              Sophie & Thomas
            </h1>
            <div
              className="w-32 h-0.5 mx-auto mb-8"
              style={{ backgroundColor: theme.secondaryColor }}
            />
            <p className="text-3xl mb-4" style={{ color: theme.secondaryColor }}>
              Nous nous disons "Oui"
            </p>
            <p className="text-xl">
              Le 15 Juin 2025 • Château de Valrose
            </p>
            <div className="mt-10 flex justify-center">
              <motion.a
                href="#rsvp"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-semibold shadow-lg"
                style={{ backgroundColor: theme.primaryColor, color: theme.backgroundColor }}
              >
                RSVP
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section
        className="py-20 px-8"
        style={{ backgroundColor: theme.accentColor }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-5xl font-bold mb-8"
              style={{ fontFamily: theme.headingFont, color: theme.primaryColor }}
            >
              Notre Histoire d'Amour
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { year: '2018', title: 'Notre Rencontre', desc: 'Un café parisien, un sourire...' },
                { year: '2022', title: 'La Demande', desc: 'Sous les étoiles, le genou à terre' },
                { year: '2025', title: 'Le Grand Jour', desc: 'Pour toujours commence maintenant' },
              ].map((moment, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="p-6 rounded-2xl"
                  style={{ backgroundColor: theme.backgroundColor }}
                >
                  <div
                    className="text-4xl font-bold mb-3"
                    style={{ color: theme.primaryColor }}
                  >
                    {moment.year}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{moment.title}</h3>
                  <p className="text-sm italic">{moment.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Détails de la Cérémonie */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16"
            style={{ fontFamily: theme.headingFont, color: theme.primaryColor }}
          >
            Programme de la Journée
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Heart,
                time: '14:00',
                title: 'Cérémonie Laïque',
                location: 'Jardin du Château',
                desc: 'Échange des vœux dans un cadre enchanteur',
              },
              {
                icon: Sparkles,
                time: '16:00',
                title: 'Vin d\'Honneur',
                location: 'Terrasse Panoramique',
                desc: 'Cocktail et pâtisseries raffinées',
              },
              {
                icon: Calendar,
                time: '19:30',
                title: 'Dîner de Gala',
                location: 'Grande Salle',
                desc: 'Menu gastronomique 5 services',
              },
              {
                icon: Sparkles,
                time: '23:00',
                title: 'Soirée Dansante',
                location: 'Salle de Bal',
                desc: 'DJ & animations jusqu\'à l\'aube',
              },
            ].map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl"
                style={{ backgroundColor: theme.accentColor }}
              >
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: theme.primaryColor }}
                >
                  <event.icon
                    className="w-8 h-8"
                    style={{ color: theme.backgroundColor }}
                  />
                </div>
                <div className="flex-1">
                  <div
                    className="text-sm font-semibold mb-1"
                    style={{ color: theme.secondaryColor }}
                  >
                    {event.time}
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{event.title}</h3>
                  <p className="text-sm mb-2 flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </p>
                  <p className="text-sm italic">{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section
        id="rsvp"
        className="py-20 px-8"
        style={{ backgroundColor: theme.primaryColor, color: theme.backgroundColor }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Heart className="w-16 h-16 mx-auto mb-6" />
            <h2
              className="text-5xl font-bold mb-6"
              style={{ fontFamily: theme.headingFont }}
            >
              Confirmez votre Présence
            </h2>
            <p className="text-xl mb-12">
              Votre présence serait notre plus beau cadeau
            </p>
            {/* Faux formulaire RSVP (visuel only) */}
            <div
              className="max-w-2xl mx-auto rounded-3xl p-8 shadow-2xl text-left"
              style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Nom</label>
                  <input
                    disabled
                    className="w-full px-4 py-3 rounded-xl border opacity-70"
                    style={{ borderColor: theme.accentColor }}
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    disabled
                    className="w-full px-4 py-3 rounded-xl border opacity-70"
                    style={{ borderColor: theme.accentColor }}
                    placeholder="vous@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Présence</label>
                  <div className="flex gap-3">
                    <div className="flex-1 px-4 py-3 rounded-xl border text-sm opacity-70" style={{ borderColor: theme.accentColor }}>
                      Oui
                    </div>
                    <div className="flex-1 px-4 py-3 rounded-xl border text-sm opacity-70" style={{ borderColor: theme.accentColor }}>
                      Non
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Invités</label>
                  <input
                    disabled
                    className="w-full px-4 py-3 rounded-xl border opacity-70"
                    style={{ borderColor: theme.accentColor }}
                    placeholder="1"
                  />
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full px-10 py-4 rounded-full font-semibold shadow-lg"
                style={{ backgroundColor: theme.primaryColor, color: theme.backgroundColor }}
              >
                Envoyer (démo)
              </motion.button>
              <p className="mt-4 text-xs opacity-60">
                Démonstration visuelle — branchez une API/email si vous voulez le rendre fonctionnel.
              </p>
            </div>
            <p className="mt-8 text-sm">Merci de confirmer avant le 1er Mai 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Informations Pratiques */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-5xl font-bold text-center mb-16"
            style={{ fontFamily: theme.headingFont, color: theme.primaryColor }}
          >
            Informations Pratiques
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: MapPin,
                title: 'Lieu',
                info: 'Château de Valrose\n123 Route des Vignes\n06000 Nice',
              },
              {
                icon: Phone,
                title: 'Contact',
                info: 'Sophie: 06 12 34 56 78\nThomas: 06 98 76 54 32',
              },
              {
                icon: Mail,
                title: 'Email',
                info: 'mariage.sophiethomas\n@gmail.com',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6 rounded-2xl"
                style={{ backgroundColor: theme.accentColor }}
              >
                <item.icon
                  className="w-10 h-10 mx-auto mb-4"
                  style={{ color: theme.primaryColor }}
                />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm whitespace-pre-line">{item.info}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 text-center border-t"
        style={{ borderColor: theme.accentColor }}
      >
        <Heart
          className="w-8 h-8 mx-auto mb-4"
          style={{ color: theme.primaryColor }}
        />
        <p
          className="text-3xl mb-2"
          style={{ fontFamily: theme.headingFont, color: theme.primaryColor }}
        >
          Sophie & Thomas
        </p>
        <p className="text-sm">15 Juin 2025 • #SophieAimeThomas</p>
      </footer>
    </div>
  )
}

export default EventWedding

