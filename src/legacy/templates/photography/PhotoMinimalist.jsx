import { motion } from 'framer-motion'
import { Camera, Mail, Share2 } from 'lucide-react'

function PhotoMinimalist({ theme }) {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: theme.backgroundColor,
        color: theme.textColor,
        fontFamily: theme.fontFamily,
      }}
    >
      {/* Header Ultra-Minimal */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="text-sm tracking-[0.2em] uppercase">Alexandre Dubois</div>
          <nav className="flex gap-8 text-sm">
            <a href="#" className="hover:opacity-50 transition-opacity">Work</a>
            <a href="#" className="hover:opacity-50 transition-opacity">About</a>
            <a href="#" className="hover:opacity-50 transition-opacity">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Minimal */}
      <section className="pt-32 pb-20 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <h1 className="text-7xl md:text-9xl font-light mb-8 tracking-tight">
              Photography
            </h1>
            <p className="text-lg tracking-wide opacity-60">
              Paris-based visual artist specializing in minimalist architecture and portraits
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid - Pur et Simple */}
      <section className="px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100">
            {[
              { size: 'tall', delay: 0 },
              { size: 'square', delay: 0.1 },
              { size: 'square', delay: 0.2 },
              { size: 'tall', delay: 0.3 },
              { size: 'wide', delay: 0.4 },
              { size: 'square', delay: 0.5 },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: item.delay }}
                className={`
                  relative bg-white group cursor-pointer overflow-hidden
                  ${item.size === 'tall' ? 'md:row-span-2' : ''}
                  ${item.size === 'wide' ? 'md:col-span-2' : ''}
                `}
              >
                <div
                  className={`
                    w-full bg-gray-100 flex items-center justify-center
                    ${item.size === 'tall' ? 'aspect-[3/4]' : ''}
                    ${item.size === 'square' ? 'aspect-square' : ''}
                    ${item.size === 'wide' ? 'aspect-[16/9]' : ''}
                  `}
                >
                  <Camera className="w-16 h-16 opacity-10" />
                </div>
                
                {/* Hover overlay - ultra discret */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Texte Minimal */}
      <section className="py-32 px-8 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-light mb-6">Approach</h2>
              <p className="text-base leading-relaxed opacity-60">
                My work explores the intersection of light, space, and human presence.
                Through careful composition and minimal post-processing, I aim to capture
                moments of quiet beauty in the everyday.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-light mb-6">Recognition</h2>
              <ul className="space-y-3 text-sm opacity-60">
                <li>Sony World Photography Awards 2024</li>
                <li>International Photography Awards 2023</li>
                <li>Featured in Aperture Magazine</li>
                <li>Solo Exhibition, Galerie Perrotin Paris</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projets - Liste Minimaliste */}
      <section className="py-20 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm tracking-[0.2em] uppercase mb-12 opacity-40">Selected Works</h2>
          
          <div className="space-y-px">
            {[
              { title: 'Urban Fragments', year: '2024', count: '24' },
              { title: 'Silent Spaces', year: '2023', count: '18' },
              { title: 'Portraits in Time', year: '2023', count: '32' },
              { title: 'Concrete Poetry', year: '2022', count: '16' },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="py-8 border-t border-gray-100 flex items-center justify-between hover:bg-gray-50 transition-colors px-4">
                  <div className="flex items-center gap-12">
                    <span className="text-2xl font-light">{project.title}</span>
                    <span className="text-sm opacity-40">{project.count} images</span>
                  </div>
                  <span className="text-sm opacity-40 group-hover:opacity-100 transition-opacity">
                    {project.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Minimal */}
      <section className="py-32 px-8 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl font-light mb-12">Let's Connect</h2>
            <div className="flex justify-center gap-12 mb-12">
              <a
                href="#"
                className="flex items-center gap-2 text-sm hover:opacity-50 transition-opacity"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm hover:opacity-50 transition-opacity"
              >
                <Share2 className="w-4 h-4" />
                Partager
              </a>
            </div>
            <p className="text-sm opacity-40">
              Available for commissions and collaborations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer Ultra-Minimal */}
      <footer className="py-12 px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs opacity-40">
          <span>© 2024 Alexandre Dubois</span>
          <span>All rights reserved</span>
        </div>
      </footer>
    </div>
  )
}

export default PhotoMinimalist

