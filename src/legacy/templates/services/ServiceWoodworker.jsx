import { motion } from 'framer-motion'
import { Hammer, Phone, Mail, MapPin, Award, Heart, Ruler, ArrowRight } from 'lucide-react'

function ServiceWoodworker({ theme }) {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
        fontFamily: theme.fontFamily,
      }}
    >
      {/* Hero avec texture bois */}
      <section
        className="relative py-32 px-8 overflow-hidden"
        style={{ backgroundColor: theme.accentColor }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              ${theme.primaryColor} 0px,
              ${theme.primaryColor} 2px,
              transparent 2px,
              transparent 40px
            )`,
          }}
        />
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <Hammer
                className="w-16 h-16"
                style={{ color: theme.primaryColor }}
              />
            </div>
            <h1
              className="text-6xl md:text-7xl font-bold mb-6"
              style={{ fontFamily: theme.headingFont, color: theme.primaryColor }}
            >
              Ébénisterie Tradition
            </h1>
            <p className="text-2xl mb-8" style={{ color: theme.secondaryColor }}>
              L&apos;art du bois noble depuis 3 générations
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-lg font-semibold text-lg shadow-lg"
              style={{
                backgroundColor: theme.primaryColor,
                color: theme.backgroundColor,
              }}
            >
              Demander un Devis
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Savoir-faire */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2
                className="text-5xl font-bold mb-6"
                style={{ fontFamily: theme.headingFont, color: theme.primaryColor }}
              >
                Notre Savoir-Faire
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Depuis 1965, notre atelier perpétue la tradition de l&apos;ébénisterie française.
                Chaque pièce est façonnée à la main avec passion et minutie, dans le respect
                des techniques ancestrales.
              </p>
              <p className="text-lg leading-relaxed">
                Du mobilier sur-mesure aux restaurations d&apos;antiquités, nous donnons vie
                à vos projets les plus ambitieux en travaillant uniquement des essences
                nobles : chêne, noyer, merisier, acajou...
              </p>

              {/* Process (signature / different structure) */}
              <div className="mt-10 rounded-2xl border p-6" style={{ borderColor: theme.accentColor, backgroundColor: theme.accentColor }}>
                <p className="text-xs tracking-widest uppercase mb-4 opacity-70">Notre processus</p>
                <div className="space-y-4">
                  {[
                    { step: '01', title: 'Visite & brief', desc: 'Mesures, contraintes, usages.' },
                    { step: '02', title: 'Croquis & essences', desc: 'Propositions, finitions, budget.' },
                    { step: '03', title: 'Fabrication atelier', desc: 'Assemblages traditionnels, contrôle qualité.' },
                    { step: '04', title: 'Pose & livraison', desc: 'Installation soignée et suivi.' },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-4 items-start">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center font-bold"
                        style={{ backgroundColor: theme.primaryColor, color: theme.backgroundColor }}
                      >
                        {s.step}
                      </div>
                      <div>
                        <div className="font-bold">{s.title}</div>
                        <div className="text-sm opacity-80">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Award, text: 'Meilleur Ouvrier' },
                { icon: Heart, text: 'Passion du Bois' },
                { icon: Ruler, text: 'Sur-Mesure' },
                { icon: Hammer, text: 'Fait Main' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg text-center"
                  style={{ backgroundColor: theme.accentColor }}
                >
                  <item.icon
                    className="w-12 h-12 mx-auto mb-3"
                    style={{ color: theme.primaryColor }}
                  />
                  <p className="font-semibold">{item.text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos Prestations */}
      <section
        className="py-20 px-8"
        style={{ backgroundColor: theme.primaryColor, color: theme.backgroundColor }}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-5xl font-bold mb-16 text-center"
            style={{ fontFamily: theme.headingFont }}
          >
            Nos Prestations
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Mobilier Sur-Mesure',
                items: ['Bibliothèques', 'Tables & Bureaux', 'Dressings', 'Cuisines'],
              },
              {
                title: 'Aménagements',
                items: ['Escaliers', 'Parquets', 'Lambris', 'Portes & Fenêtres'],
              },
              {
                title: 'Restauration',
                items: ['Meubles anciens', 'Boiseries', 'Marqueterie', 'Dorure'],
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-8 rounded-lg"
                style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}
              >
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ fontFamily: theme.headingFont }}
                >
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: theme.primaryColor }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie de Réalisations */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-5xl font-bold mb-16 text-center"
            style={{ fontFamily: theme.headingFont, color: theme.primaryColor }}
          >
            Nos Réalisations
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div
                  className="aspect-square flex items-center justify-center"
                  style={{ backgroundColor: theme.secondaryColor }}
                >
                  <Hammer
                    className="w-24 h-24 opacity-20"
                    style={{ color: theme.backgroundColor }}
                  />
                </div>
                <div className="p-4" style={{ backgroundColor: theme.accentColor }}>
                  <p className="font-semibold">Projet {idx + 1}</p>
                  <p className="text-sm opacity-70">2024</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section
        className="py-20 px-8"
        style={{ backgroundColor: theme.accentColor }}
      >
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-5xl font-bold mb-16 text-center"
            style={{ fontFamily: theme.headingFont, color: theme.primaryColor }}
          >
            Ils Nous Font Confiance
          </h2>

          <div className="space-y-8">
            {[
              {
                text: 'Un travail d\'exception. La table sur-mesure qu\'ils ont réalisée pour nous est une véritable œuvre d\'art.',
                author: 'Famille Dubois',
                project: 'Table à manger en noyer',
              },
              {
                text: 'Restauration impeccable de notre bibliothèque ancienne. Professionnalisme et respect du patrimoine.',
                author: 'M. Laurent',
                project: 'Restauration bibliothèque XIXe',
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-8 rounded-lg border-l-4"
                style={{
                  backgroundColor: theme.backgroundColor,
                  borderColor: theme.primaryColor,
                }}
              >
                <p className="text-xl italic mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold" style={{ color: theme.primaryColor }}>
                      {testimonial.author}
                    </p>
                    <p className="text-sm opacity-70">{testimonial.project}</p>
                  </div>
                  <Heart className="w-6 h-6" style={{ color: theme.secondaryColor }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section
        className="py-32 px-8"
        style={{ backgroundColor: theme.primaryColor, color: theme.backgroundColor }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Hammer className="w-16 h-16 mx-auto mb-6" />
            <h2
              className="text-5xl font-bold mb-6"
              style={{ fontFamily: theme.headingFont }}
            >
              Un Projet ? Parlons-en !
            </h2>
            <p className="text-xl mb-12">
              Devis gratuit • Visite de l&apos;atelier sur rendez-vous
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Phone, label: 'Téléphone', info: '04 78 90 12 34' },
                { icon: Mail, label: 'Email', info: 'contact@ebenisterie.fr' },
                { icon: MapPin, label: 'Atelier', info: '25 Rue des Artisans, Lyon' },
              ].map((contact, idx) => (
                <div key={idx} className="text-center">
                  <contact.icon className="w-8 h-8 mx-auto mb-3" />
                  <p className="font-semibold mb-1">{contact.label}</p>
                  <p className="text-sm">{contact.info}</p>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 rounded-lg font-semibold text-lg"
              style={{
                backgroundColor: theme.backgroundColor,
                color: theme.primaryColor,
              }}
            >
              Demander un Devis Gratuit
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 px-8 border-t-2"
        style={{ borderColor: theme.accentColor }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Hammer className="w-6 h-6" style={{ color: theme.primaryColor }} />
            <span
              className="text-xl font-bold"
              style={{ fontFamily: theme.headingFont }}
            >
              Ébénisterie Tradition
            </span>
          </div>
          <p>&copy; 2024 Ébénisterie Tradition. Artisan certifié.</p>
        </div>
      </footer>
    </div>
  )
}

export default ServiceWoodworker

