import AnimatedSection from './ui/AnimatedSection'
import { siteContent } from '../data/siteContent'

function AboutSection() {
  return (
    <AnimatedSection
      id="about"
      className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10"
    >
      <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">About Me</h2>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">{siteContent.about}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {siteContent.highlights.map((item) => (
          <span
            key={item}
            className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700"
          >
            {item}
          </span>
        ))}
      </div>
      <article className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <h3 className="text-lg font-semibold text-slate-900">Education</h3>
        <p className="mt-2 text-sm font-medium text-slate-800 md:text-base">{siteContent.education.degree}</p>
        <p className="mt-1 text-sm text-slate-600">{siteContent.education.institution}</p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs md:text-sm">
          <span className="rounded-md border border-slate-300 bg-white px-2.5 py-1 text-slate-700">
            {siteContent.education.duration}
          </span>
          {siteContent.education.score && (
            <span className="rounded-md border border-slate-300 bg-white px-2.5 py-1 text-slate-700">
              {siteContent.education.score}
            </span>
          )}
        </div>
      </article>
    </AnimatedSection>
  )
}

export default AboutSection
