import AnimatedSection from './ui/AnimatedSection'
import { siteContent } from '../data/siteContent'

function ContactSection() {
  return (
    <AnimatedSection
      id="contact"
      className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 md:p-10"
    >
      <h2 className="text-2xl font-bold text-slate-900">Contact</h2>
      <p className="mt-3 text-slate-600">
        Email:{' '}
        <a className="font-medium text-sky-700" href={`mailto:${siteContent.contact.email}`}>
          {siteContent.contact.email}
        </a>
      </p>
      <p className="mt-2 text-slate-600">
        LinkedIn:{' '}
        <a
          className="font-medium text-sky-700"
          href={siteContent.contact.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          {siteContent.contact.linkedin.replace('https://', '')}
        </a>
      </p>
      <p className="mt-2 text-slate-600">
        GitHub:{' '}
        <a
          className="font-medium text-sky-700"
          href={siteContent.contact.github}
          target="_blank"
          rel="noreferrer"
        >
          {siteContent.contact.github.replace('https://', '')}
        </a>
      </p>
    </AnimatedSection>
  )
}

export default ContactSection
