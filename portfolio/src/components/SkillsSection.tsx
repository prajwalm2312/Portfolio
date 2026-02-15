import AnimatedSection from './ui/AnimatedSection'
import { siteContent } from '../data/siteContent'

type SkillGroupProps = {
  title: string
  items: readonly string[]
}

function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  )
}

function SkillsSection() {
  return (
    <AnimatedSection id="skills" className="mt-16">
      <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Skills</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <SkillGroup title="Languages" items={siteContent.skills.languages} />
        <SkillGroup title="Frontend" items={siteContent.skills.frontend} />
        <SkillGroup title="State Management" items={siteContent.skills.stateManagement} />
        <SkillGroup title="Tools" items={siteContent.skills.tools} />
      </div>
    </AnimatedSection>
  )
}

export default SkillsSection
