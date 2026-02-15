import AnimatedSection from './ui/AnimatedSection'
import { motion } from 'framer-motion'
import { siteContent } from '../data/siteContent'
import heroBackground from '../assets/hero-bg.svg'
import AnimatedHeadline from './ui/AnimatedHeadline'

function Hero() {
  return (
    <AnimatedSection
      id="home"
      reveal="on-load"
      className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-lg shadow-slate-200/60 backdrop-blur md:p-12"
    >
      <motion.div
        aria-hidden
        animate={{ x: [0, 20, 0], y: [0, -14, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -left-16 -top-14 h-52 w-52 rounded-full bg-sky-300/30 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -18, 0], y: [0, 12, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        className="pointer-events-none absolute -right-16 top-10 h-48 w-48 rounded-full bg-amber-300/30 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative mb-8 overflow-hidden rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-600 via-cyan-500 to-amber-400 p-[1px]"
      >
        <div className="relative overflow-hidden rounded-2xl px-5 py-6 md:px-8 md:py-8">
          <img
            src={heroBackground}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-sky-950/90 via-slate-900/85 to-sky-900/85"
          />
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.08em' }}
            animate={{ opacity: 1, letterSpacing: '0.02em' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative z-10 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/90 md:text-sm"
          >
            Welcome
          </motion.p>
          <div className="relative z-10 mt-2 text-3xl font-extrabold leading-tight text-white md:text-5xl">
            <AnimatedHeadline text={siteContent.welcomeMessage} delay={0.3} />
          </div>
        </div>
      </motion.div>

      <p className="mb-3 inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-700">
        {siteContent.status}
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
        Hi, I&apos;m {siteContent.name}
        <span className="block text-sky-700">{siteContent.role}</span>
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">{siteContent.intro}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
        >
          Contact Me
        </a>
      </div>
    </AnimatedSection>
  )
}

export default Hero
