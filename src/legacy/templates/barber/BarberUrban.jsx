import { motion } from 'framer-motion'
import { Scissors, Calendar, Star, Zap } from 'lucide-react'

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
      {/* Hero Section */}
      <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        {/* Aggressive background pattern */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                ${theme.primaryColor} 0px,
                ${theme.primaryColor} 2px,
                transparent 2px,
                transparent 10px
              )`,
            }}
          />
        </div>

        <div className="relative z-10 text-center px-8">
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
              <Scissors
                className="w-24 h-24 mx-auto"
                style={{ color: theme.primaryColor }}
              />
            </motion.div>
            <h1
              className="text-8xl md:text-9xl font-bold mb-4 uppercase tracking-tighter"
              style={{ fontFamily: theme.headingFont }}
            >
              URBAN<br/>CUTS
            </h1>
            <div
              className="w-32 h-1 mx-auto mb-6"
              style={{ backgroundColor: theme.primaryColor }}
            />
            <p className="text-2xl uppercase tracking-widest mb-8">
              Real Men. Real Cuts.
            </p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-12 py-5 uppercase font-bold text-xl tracking-wider"
              style={{
                backgroundColor: theme.primaryColor,
                color: theme.backgroundColor,
              }}
            >
              Book Now
            </motion.button>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div
          className="absolute top-0 left-0 w-full h-2"
          style={{ backgroundColor: theme.primaryColor }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-2"
          style={{ backgroundColor: theme.primaryColor }}
        />
      </section>

      {/* Services Section */}
      <section
        className="py-24 px-8"
        style={{ backgroundColor: theme.secondaryColor, color: theme.accentColor }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-6xl font-bold mb-16 uppercase"
            style={{ fontFamily: theme.headingFont }}
          >
            Services
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'THE CLASSIC',
                desc: 'Traditional haircut & style',
                price: '$45',
                duration: '45 min',
              },
              {
                title: 'THE FADE',
                desc: 'Sharp fade with razor detail',
                price: '$55',
                duration: '60 min',
              },
              {
                title: 'BEARD GAME',
                desc: 'Beard trim & hot towel shave',
                price: '$35',
                duration: '30 min',
              },
              {
                title: 'THE WORKS',
                desc: 'Cut, fade, beard & style',
                price: '$85',
                duration: '90 min',
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 border-2 group hover:scale-105 transition-transform"
                style={{ borderColor: theme.primaryColor }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3
                    className="text-3xl font-bold uppercase"
                    style={{ fontFamily: theme.headingFont }}
                  >
                    {service.title}
                  </h3>
                  <span
                    className="text-2xl font-bold"
                    style={{ color: theme.primaryColor }}
                  >
                    {service.price}
                  </span>
                </div>
                <p className="text-lg mb-2">{service.desc}</p>
                <p className="text-sm opacity-70">{service.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-6xl font-bold mb-16 uppercase text-center"
            style={{ fontFamily: theme.headingFont }}
          >
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Star, title: 'EXPERT', desc: '10+ Years Experience' },
              { icon: Zap, title: 'FAST', desc: 'No Long Waits' },
              { icon: Scissors, title: 'PRECISION', desc: 'Perfect Every Time' },
              { icon: Calendar, title: 'FLEXIBLE', desc: '7 Days a Week' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div
                  className="inline-flex p-6 mb-4"
                  style={{ backgroundColor: theme.primaryColor }}
                >
                  <item.icon className="w-12 h-12" style={{ color: theme.backgroundColor }} />
                </div>
                <h3
                  className="text-2xl font-bold mb-2 uppercase"
                  style={{ fontFamily: theme.headingFont }}
                >
                  {item.title}
                </h3>
                <p className="text-sm uppercase tracking-wider opacity-70">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery/Showcase */}
      <section
        className="py-24 px-8"
        style={{ backgroundColor: theme.primaryColor, color: theme.backgroundColor }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-6xl font-bold mb-8 uppercase"
            style={{ fontFamily: theme.headingFont }}
          >
            Our Work
          </h2>
          <p className="text-xl mb-16 uppercase tracking-widest">
            Check Out These Fresh Cuts
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-square flex items-center justify-center border-4"
                style={{
                  backgroundColor: theme.secondaryColor,
                  borderColor: theme.accentColor,
                }}
              >
                <Scissors className="w-16 h-16 opacity-30" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-6xl font-bold mb-8 uppercase"
              style={{ fontFamily: theme.headingFont }}
            >
              Book Your Cut
            </h2>
            <p className="text-xl mb-12 uppercase tracking-wider">
              Walk-ins Welcome • Online Booking Available
            </p>
            <div className="space-y-4 mb-12">
              <p className="text-lg">
                <span className="font-bold">Location:</span> 125 Brooklyn Ave, NYC
              </p>
              <p className="text-lg">
                <span className="font-bold">Hours:</span> Mon-Sun 9AM-9PM
              </p>
              <p className="text-lg">
                <span className="font-bold">Call:</span> (555) 123-4567
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-16 py-6 uppercase font-bold text-xl tracking-widest"
              style={{
                backgroundColor: theme.primaryColor,
                color: theme.backgroundColor,
              }}
            >
              Book Online
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 text-center border-t-4"
        style={{
          backgroundColor: theme.secondaryColor,
          borderColor: theme.primaryColor,
          color: theme.accentColor,
        }}
      >
        <p className="uppercase tracking-wider font-bold">
          © 2024 Urban Cuts • Where Style Meets Attitude
        </p>
      </footer>
    </div>
  )
}

export default BarberUrban

