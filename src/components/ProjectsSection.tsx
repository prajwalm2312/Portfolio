import AnimatedSection from './ui/AnimatedSection'
import { projects } from '../data/projects'

function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="mt-16">
      <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Featured Projects</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>
  )
}

export default ProjectsSection
