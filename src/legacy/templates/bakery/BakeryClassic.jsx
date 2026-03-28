import { motion } from 'framer-motion'
import { Clock, MapPin, Phone, Wheat, Croissant, Cake, ArrowRight } from 'lucide-react'
import { SiteNavigation } from '../../SiteNavigation.jsx'

function BakeryClassic({ theme }) {
  return (
    <div
      className="min-h-[100dvh] w-full max-w-full min-w-0 overflow-x-hidden break-words [overflow-wrap:anywhere]"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
        fontFamily: theme.fontFamily,
      }}
    >
      {/* Hero Section (editorial / terroir) */}
      <section className="relative overflow-hidden w-full max-w-full">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${theme.secondaryColor}22 1px, transparent 0)`,
            backgroundSize: '28px 28px',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-20 relative z-10 w-full min-w-0">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex-1 min-w-0 w-full max-w-full"
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
                style={{ borderColor: theme.accentColor, backgroundColor: `${theme.accentColor}88` }}
              >
                <Wheat className="w-4 h-4" style={{ color: theme.primaryColor }} />
                <span className="text-xs tracking-widest uppercase opacity-80">Levain naturel • Farines bio</span>
              </div>

              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] sm:leading-[1.02] mb-4 sm:mb-6"
                style={{ fontFamily: theme.headingFont, color: theme.textColor }}
              >
                La Boulangerie
                <br />
                <span style={{ color: theme.secondaryColor }}>Traditionnelle</span>
              </h1>

              <p className="text-base sm:text-xl md:text-2xl max-w-2xl opacity-90" style={{ color: theme.secondaryColor }}>
                Depuis 1952, l’art du pain artisanal — pétri, fermenté et cuit chaque matin.
              </p>

              <div className="mt-8 sm:mt-10 flex flex-col gap-4 items-stretch sm:items-start w-full max-w-full min-w-0">
                <motion.a
                  href="#specialites"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex w-full sm:w-auto justify-center items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold shadow-lg text-sm sm:text-base touch-manipulation"
                  style={{ backgroundColor: theme.primaryColor, color: theme.backgroundColor }}
                >
                  Découvrir nos produits
                  <ArrowRight className="w-5 h-5 shrink-0" />
                </motion.a>
                <SiteNavigation theme={theme} className="w-full" />
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-full max-w-full min-w-0 lg:w-[420px] lg:max-w-[420px] rounded-2xl border shadow-xl overflow-hidden"
              style={{ borderColor: theme.accentColor, backgroundColor: theme.accentColor }}
            >
              <div className="p-6 border-b" style={{ borderColor: `${theme.secondaryColor}22` }}>
                <p className="text-xs tracking-widest uppercase opacity-70">Aujourd’hui</p>
                <p className="text-2xl font-bold" style={{ fontFamily: theme.headingFont, color: theme.secondaryColor }}>
                  Pain du jour
                </p>
              </div>
              <div className="p-6">
                <div
                  className="rounded-xl p-5 border"
                  style={{ borderColor: `${theme.secondaryColor}22`, backgroundColor: theme.backgroundColor }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-bold text-lg">Campagne au levain</p>
                      <p className="text-sm opacity-80">Farine T80 • 24h de fermentation</p>
                    </div>
                    <div
                      className="px-3 py-1 rounded-full text-xs font-bold"
                      style={{ backgroundColor: theme.primaryColor, color: theme.backgroundColor }}
                    >
                      Best-seller
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="opacity-80">Disponible</span>
                    <span className="font-bold" style={{ color: theme.secondaryColor }}>3,80€</span>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { label: 'Baguette tradition', price: '1,30€' },
                    { label: 'Croissant pur beurre', price: '1,40€' },
                    { label: 'Pain au chocolat', price: '1,60€' },
                    { label: 'Tarte du moment', price: '4,50€' },
                  ].map((i) => (
                    <div
                      key={i.label}
                      className="rounded-xl border p-4"
                      style={{ borderColor: `${theme.secondaryColor}22`, backgroundColor: theme.backgroundColor }}
                    >
                      <div className="text-sm font-semibold">{i.label}</div>
                      <div className="text-xs opacity-70 mt-1">{i.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="legacy-about"
        className="py-12 sm:py-16 px-4 sm:px-8 max-w-6xl mx-auto w-full min-w-0"
      >
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center min-w-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="min-w-0"
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: theme.headingFont, color: theme.secondaryColor }}
            >
              Notre Histoire
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-4">
              Depuis trois générations, notre famille perpétue la tradition du pain fait à la main.
              Chaque matin, nos boulangers pétrissent avec passion des recettes ancestrales
              pour vous offrir le meilleur du pain artisanal.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-6">
              Nous utilisons uniquement des farines biologiques de qualité supérieure,
              du levain naturel et des ingrédients soigneusement sélectionnés.
            </p>
            <SiteNavigation theme={theme} className="mt-6" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-5 sm:p-8 shadow-xl min-w-0 w-full max-w-full"
            style={{ backgroundColor: theme.accentColor }}
          >
            <div className="aspect-square rounded-xl overflow-hidden mb-4"
              style={{ backgroundColor: theme.primaryColor }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <Croissant className="w-32 h-32 opacity-30" style={{ color: theme.backgroundColor }} />
              </div>
            </div>
            <p className="text-center italic" style={{ color: theme.secondaryColor }}>
              "Le pain, c'est la vie"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="specialites"
        className="py-12 sm:py-16 px-4 sm:px-8 w-full min-w-0 overflow-x-hidden"
        style={{ backgroundColor: theme.accentColor }}
      >
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 px-2"
            style={{ fontFamily: theme.headingFont, color: theme.secondaryColor }}
          >
            Nos Spécialités
          </h2>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 min-w-0">
            {[
              {
                icon: Wheat,
                title: 'Pains Traditionnels',
                items: ['Baguette tradition', 'Pain de campagne', 'Pain aux céréales'],
              },
              {
                icon: Croissant,
                title: 'Viennoiseries',
                items: ['Croissant pur beurre', 'Pain au chocolat', 'Chausson aux pommes'],
              },
              {
                icon: Cake,
                title: 'Pâtisseries',
                items: ['Tarte aux fruits', 'Éclair au chocolat', 'Mille-feuille'],
              },
            ].map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="p-5 sm:p-6 rounded-xl shadow-lg border min-w-0 max-w-full"
                style={{ backgroundColor: theme.backgroundColor, borderColor: `${theme.secondaryColor}22` }}
              >
                <div className="flex justify-center mb-4">
                  <category.icon
                    className="w-12 h-12"
                    style={{ color: theme.primaryColor }}
                  />
                </div>
                <h3
                  className="text-lg sm:text-2xl font-bold text-center mb-4 break-words px-1"
                  style={{ fontFamily: theme.headingFont }}
                >
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-center">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="legacy-contact"
        className="py-12 sm:py-16 px-4 sm:px-8 max-w-4xl mx-auto w-full min-w-0"
      >
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 px-2"
          style={{ fontFamily: theme.headingFont, color: theme.secondaryColor }}
        >
          Nous Trouver
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: MapPin, title: 'Adresse', info: '12 Rue du Pain, 75001 Paris' },
            { icon: Clock, title: 'Horaires', info: 'Lun-Sam: 6h-20h, Dim: 7h-13h' },
            { icon: Phone, title: 'Téléphone', info: '01 42 33 44 55' },
          ].map((contact, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center p-6 rounded-xl shadow-md"
              style={{ backgroundColor: theme.accentColor }}
            >
              <contact.icon
                className="w-8 h-8 mx-auto mb-3"
                style={{ color: theme.primaryColor }}
              />
              <h3
                className="font-bold mb-2"
                style={{ color: theme.secondaryColor }}
              >
                {contact.title}
              </h3>
              <p className="text-sm">{contact.info}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <SiteNavigation theme={theme} />
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 text-center"
        style={{ backgroundColor: theme.secondaryColor, color: theme.backgroundColor }}
      >
        <p>&copy; 2024 La Boulangerie Traditionnelle. Tous droits réservés.</p>
      </footer>
    </div>
  )
}

export default BakeryClassic

