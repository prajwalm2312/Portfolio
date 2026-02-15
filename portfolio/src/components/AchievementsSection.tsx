import AnimatedSection from './ui/AnimatedSection'
import { siteContent } from '../data/siteContent'

function AchievementsSection() {
  return (
    <AnimatedSection id="achievements" className="mt-16">
      <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Achievements</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {siteContent.achievements.map((award) => (
          <article
            key={`${award.title}-${award.timeframe}`}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">{award.timeframe}</p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900">{award.title}</h3>
            <p className="mt-1 text-sm font-medium text-slate-700">{award.organization}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">{award.description}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>
  )
}

export default AchievementsSection
