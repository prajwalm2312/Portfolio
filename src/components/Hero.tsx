import AnimatedSection from './ui/AnimatedSection'
import { siteContent } from '../data/siteContent'

function Hero() {
  return (
    <AnimatedSection
      id="home"
      reveal="on-load"
      className="rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-lg shadow-slate-200/60 backdrop-blur md:p-12"
    >
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
