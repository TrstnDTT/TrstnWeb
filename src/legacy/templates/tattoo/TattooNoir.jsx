import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Download, MapPin, Phone, Share2, ShieldCheck, Sparkles, User } from 'lucide-react'
import { SiteNavigation } from '../../SiteNavigation.jsx'

function TattooNoir({ theme }) {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
        fontFamily: theme.fontFamily,
      }}
    >
      {/* Header + navigation (studio / editorial) */}
      <header
        className="sticky top-0 z-50 border-b backdrop-blur"
        style={{
          borderColor: `${theme.primaryColor}22`,
          backgroundColor: `${theme.backgroundColor}E6`,
        }}
      >
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-full border" style={{ borderColor: `${theme.primaryColor}55` }} />
            <div>
              <div className="font-bold tracking-tight" style={{ fontFamily: theme.headingFont, letterSpacing: 0.5 }}>
                INK &amp; IRON
              </div>
              <div className="text-xs opacity-70">Piercing &amp; Tattoo — Paris</div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm">
            {[
              { label: 'Accueil', href: '#accueil' },
              { label: "L'Équipe", href: '#equipe' },
              { label: 'Le shop', href: '#shop' },
              { label: 'Piercing', href: '#piercing' },
              { label: 'Tattoo', href: '#tattoo' },
              { label: 'Téléchargements', href: '#downloads' },
              { label: 'Contact', href: '#contact' },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="hover:opacity-60 transition-opacity"
                style={{ color: theme.primaryColor }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border text-sm"
              style={{ borderColor: `${theme.primaryColor}22`, color: theme.primaryColor }}
            >
              <Share2 className="w-4 h-4" />
              Social
            </a>
            <a
              href="#projet"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold"
              style={{ backgroundColor: theme.primaryColor, color: theme.backgroundColor }}
            >
              <Calendar className="w-4 h-4" />
              Soumettre un projet
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="accueil" className="py-16 px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <p className="text-xs tracking-[0.28em] uppercase opacity-70 mb-5">
              Studio — piercing &amp; tattoo
            </p>
            <h1
              className="text-5xl md:text-6xl font-bold leading-[1.02] mb-6"
              style={{ fontFamily: theme.headingFont, color: theme.primaryColor }}
            >
              Une équipe stable,
              <br />
              un shop calme,
              <br />
              une hygiène stricte.
            </h1>
            <p className="text-lg opacity-80 max-w-2xl">
              Ici on prend le temps : conseils, placement, composition bijoux, et suivi aftercare. L’objectif est simple : un résultat propre et durable.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#projet"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold shadow-sm"
                style={{ backgroundColor: theme.primaryColor, color: theme.backgroundColor }}
              >
                Soumettre un projet
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border font-semibold"
                style={{ borderColor: `${theme.primaryColor}22`, color: theme.primaryColor }}
              >
                Nous contacter
              </motion.a>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                { icon: ShieldCheck, title: 'Protocole', desc: 'Stérilisation + usage unique' },
                { icon: Sparkles, title: 'Bijoux', desc: 'Compositions & conseils' },
                { icon: User, title: 'Équipe', desc: 'Artistes & pierceurs identifiés' },
              ].map((b) => (
                <div
                  key={b.title}
                  className="rounded-2xl border p-5"
                  style={{ borderColor: `${theme.primaryColor}22`, backgroundColor: '#FFFFFF' }}
                >
                  <b.icon className="w-5 h-5 mb-3" style={{ color: theme.primaryColor }} />
                  <div className="font-semibold">{b.title}</div>
                  <div className="text-sm opacity-70 mt-1">{b.desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <SiteNavigation
                theme={theme}
                aboutHref="#equipe"
                contactHref="#contact"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl border overflow-hidden shadow-sm" style={{ borderColor: `${theme.primaryColor}22`, backgroundColor: '#FFFFFF' }}>
              <div className="p-6 border-b" style={{ borderColor: `${theme.primaryColor}14` }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs tracking-widest uppercase opacity-60">Actus</p>
                    <p className="text-xl font-semibold">Guests • conventions • flash</p>
                  </div>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-sm font-semibold hover:opacity-70" style={{ color: theme.primaryColor }}>
                    @inkiron
                  </a>
                </div>
              </div>
              <div className="p-6 space-y-4">
                {[
                  { title: 'Guest — 12/04', desc: '2 jours • ornemental' },
                  { title: 'Flash day — 27/04', desc: 'sans RDV • pièces petites' },
                  { title: 'Bijoux — nouveautés', desc: 'titane • or 14k' },
                ].map((n) => (
                  <div key={n.title} className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-semibold">{n.title}</div>
                      <div className="text-sm opacity-70">{n.desc}</div>
                    </div>
                    <span className="text-xs opacity-50">→</span>
                  </div>
                ))}
                <div className="pt-3 border-t" style={{ borderColor: `${theme.primaryColor}14` }}>
                  <div className="text-sm opacity-70">
                    Suivez les annonces et disponibilités sur Instagram.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border p-6" style={{ borderColor: `${theme.primaryColor}22`, backgroundColor: '#FFFFFF' }}>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" style={{ color: theme.primaryColor }} />
                <div>
                  <div className="font-semibold">3 rue Vauban (exemple)</div>
                  <div className="text-sm opacity-70">Métro République • Paris</div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <Phone className="w-5 h-5" style={{ color: theme.primaryColor }} />
                <a className="font-semibold hover:opacity-70" href="tel:+33954914832">
                  09 54 91 48 32
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Artists */}
      <section id="equipe" className="py-20 px-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: theme.headingFont, color: theme.primaryColor }}>
            Notre équipe
          </h2>
          <p className="text-lg opacity-75 mb-10 max-w-3xl">
            Une line-up stable : pierceur·euse(s), tatoueur·euse(s), et une organisation claire. Chaque profil a ses spécialités.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Ernest', spec: 'Bodypiercer • compositions bijoux', tag: 'PIERCING' },
              { name: 'Kaxko', spec: 'Fineline • floral • ornemental', tag: 'TATTOO' },
              { name: 'La Sanguine', spec: 'Graphique • croquis • noir', tag: 'TATTOO' },
            ].map((a, idx) => (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="rounded-3xl border p-7 shadow-sm"
                style={{ borderColor: `${theme.primaryColor}18`, backgroundColor: theme.backgroundColor }}
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="text-2xl font-bold">{a.name}</div>
                    <div className="opacity-75">{a.spec}</div>
                  </div>
                  <div
                    className="px-3 py-1 rounded-full text-xs font-bold tracking-widest"
                    style={{ backgroundColor: theme.primaryColor, color: theme.backgroundColor }}
                  >
                    {a.tag}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-2xl border"
                      style={{
                        borderColor: `${theme.primaryColor}14`,
                        background: `linear-gradient(135deg, ${theme.accentColor}55, #FFFFFF)`,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Le shop */}
      <section id="shop" className="py-20 px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-5" style={{ fontFamily: theme.headingFont, color: theme.primaryColor }}>
              Le shop
            </h2>
            <p className="text-lg opacity-75 mb-8 max-w-xl">
              Un espace lumineux et calme, pensé pour l’accueil et la consultation. Piercing et tattoo ont des zones dédiées.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {['Espace accueil', 'Salle piercing', 'Postes tattoo', 'Expositions'].map((t) => (
                <div key={t} className="rounded-2xl border p-4" style={{ borderColor: `${theme.primaryColor}18`, backgroundColor: '#FFFFFF' }}>
                  <div className="text-sm font-semibold">{t}</div>
                  <div className="text-xs opacity-60 mt-1">Photo (placeholder)</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="rounded-3xl border overflow-hidden" style={{ borderColor: `${theme.primaryColor}18`, backgroundColor: '#FFFFFF' }}>
              <div className="p-6 border-b" style={{ borderColor: `${theme.primaryColor}14` }}>
                <div className="text-xs tracking-widest uppercase opacity-60">Aperçu</div>
                <div className="text-xl font-semibold">Photos du studio</div>
              </div>
              <div className="p-6 grid grid-cols-2 gap-3">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-[4/3] rounded-2xl border"
                    style={{
                      borderColor: `${theme.primaryColor}14`,
                      background: `linear-gradient(135deg, ${theme.accentColor}55, #FFFFFF)`,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Piercing / Tattoo */}
      <section id="piercing" className="py-20 px-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="rounded-3xl border p-8" style={{ borderColor: `${theme.primaryColor}18`, backgroundColor: theme.backgroundColor }}>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: theme.headingFont, color: theme.primaryColor }}>
                Piercing
              </h3>
              <p className="opacity-75 mb-6">
                Conseils, choix des bijoux, et compositions. Sans RDV sur certains créneaux.
              </p>
              <div className="space-y-3">
                {['Titane • or 14k', 'Aiguilles à usage unique', 'Aftercare fourni', 'Conseil composition'].map((t) => (
                  <div key={t} className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5" style={{ color: theme.primaryColor }} />
                    <span className="opacity-85">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div id="tattoo" className="rounded-3xl border p-8" style={{ borderColor: `${theme.primaryColor}18`, backgroundColor: theme.backgroundColor }}>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: theme.headingFont, color: theme.primaryColor }}>
                Tattoo
              </h3>
              <p className="opacity-75 mb-6">
                Projets sur-mesure et flash. Brief clair, placement, et exécution soignée.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="aspect-square rounded-2xl border"
                    style={{
                      borderColor: `${theme.primaryColor}14`,
                      background: `linear-gradient(135deg, ${theme.accentColor}55, #FFFFFF)`,
                    }}
                  />
                ))}
              </div>
              <p className="mt-4 text-sm opacity-60">Portfolio visuel (placeholders) — remplacez par photos/flash.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section id="downloads" className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-5" style={{ fontFamily: theme.headingFont, color: theme.primaryColor }}>
            Téléchargements
          </h2>
          <p className="text-lg opacity-75 mb-8 max-w-2xl">
            Documents utiles : aftercare, préparation séance, et infos bijoux. (Démo)
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Aftercare piercing', desc: 'Conseils cicatrisation & nettoyage' },
              { title: 'Aftercare tattoo', desc: 'Crème, lavage, exposition soleil' },
              { title: 'Préparer sa séance', desc: 'Sommeil, hydratation, douleurs' },
            ].map((d) => (
              <a
                key={d.title}
                href="#"
                className="rounded-3xl border p-6 hover:opacity-80 transition-opacity"
                style={{ borderColor: `${theme.primaryColor}18`, backgroundColor: '#FFFFFF' }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="font-semibold">{d.title}</div>
                    <div className="text-sm opacity-65 mt-1">{d.desc}</div>
                  </div>
                  <Download className="w-5 h-5" style={{ color: theme.primaryColor }} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Project submission (form-like) */}
      <section id="projet" className="py-20 px-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: theme.headingFont, color: theme.primaryColor }}>
            Soumettre un projet
          </h2>
          <p className="text-lg opacity-75 mb-10 max-w-3xl">
            Décrivez votre projet tattoo ou piercing. Cette section est une démonstration visuelle (branchez une API si vous voulez l’envoyer).
          </p>

          <div className="rounded-3xl border p-8" style={{ borderColor: `${theme.primaryColor}18`, backgroundColor: theme.backgroundColor }}>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: 'Nom *', placeholder: 'Dupont' },
                { label: 'Prénom *', placeholder: 'Camille' },
                { label: 'Date de naissance *', placeholder: 'JJ/MM/AAAA' },
                { label: 'Téléphone *', placeholder: '06 12 34 56 78' },
                { label: 'Email *', placeholder: 'vous@email.com' },
                { label: 'Tattoo / Piercing *', placeholder: 'Tattoo' },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-sm font-semibold mb-2">{f.label}</label>
                  <input
                    disabled
                    className="w-full px-4 py-3 rounded-xl border opacity-70"
                    style={{ borderColor: `${theme.primaryColor}18`, backgroundColor: '#FFFFFF' }}
                    placeholder={f.placeholder}
                  />
                </div>
              ))}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold mb-2">Description du projet *</label>
                <textarea
                  disabled
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border opacity-70"
                  style={{ borderColor: `${theme.primaryColor}18`, backgroundColor: '#FFFFFF' }}
                  placeholder="Style, taille, zone du corps, références, contraintes…"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
              <div className="text-sm opacity-70">
                * Champs requis — réponse sous 24–48h (exemple).
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold"
                style={{ backgroundColor: theme.primaryColor, color: theme.backgroundColor }}
              >
                Envoyer (démo)
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl border p-8" style={{ borderColor: `${theme.primaryColor}18`, backgroundColor: '#FFFFFF' }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: theme.headingFont, color: theme.primaryColor }}>
              Contact
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6" style={{ color: theme.primaryColor }} />
                <div>
                  <div className="font-semibold">Adresse</div>
                  <div className="text-sm opacity-70">3 rue Vauban, France (exemple)</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6" style={{ color: theme.primaryColor }} />
                <div>
                  <div className="font-semibold">Téléphone</div>
                  <a className="text-sm opacity-70 hover:opacity-90" href="tel:+33954914832">
                    09 54 91 48 32
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6" style={{ color: theme.primaryColor }} />
                <div>
                  <div className="font-semibold">Suivre</div>
                  <a className="text-sm opacity-70 hover:opacity-90" href="https://instagram.com" target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <SiteNavigation
                theme={theme}
                aboutHref="#equipe"
                contactHref="#contact"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-8 border-t" style={{ borderColor: `${theme.primaryColor}18` }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-70">
          <div>© {new Date().getFullYear()} Ink &amp; Iron</div>
          <div className="flex items-center gap-4">
            <a className="hover:opacity-90" href="#accueil">Accueil</a>
            <a className="hover:opacity-90" href="#equipe">Équipe</a>
            <a className="hover:opacity-90" href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default TattooNoir

