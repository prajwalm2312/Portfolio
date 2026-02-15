import AnimatedSection from './ui/AnimatedSection'
import { siteContent } from '../data/siteContent'

function ExperienceSection() {
  return (
    <AnimatedSection id="experience" className="mt-16">
      <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Experience</h2>
      <div className="mt-6 space-y-4">
        {siteContent.experience.map((item) => (
          <article key={`${item.company}-${item.role}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{item.role}</h3>
                <p className="text-sm font-medium text-sky-700">{item.company}</p>
              </div>
              <span className="rounded-md border border-slate-300 bg-slate-50 px-2.5 py-1 text-xs text-slate-700 md:text-sm">
                {item.duration}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">{item.summary}</p>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-600">
              {item.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </AnimatedSection>
  )
}

export default ExperienceSection
