import Container from './ui/Container'
import { siteContent } from '../data/siteContent'

function LinkedInIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9h4v12H3zM9 9h3.83v1.7h.05c.53-1 1.84-2.05 3.79-2.05 4.06 0 4.81 2.67 4.81 6.14V21h-4v-5.25c0-1.25-.02-2.86-1.74-2.86-1.74 0-2 1.36-2 2.77V21H9z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.54-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.25 1.84 1.25 1.08 1.85 2.83 1.31 3.52 1 .11-.79.42-1.31.76-1.61-2.66-.31-5.46-1.35-5.46-5.98 0-1.32.47-2.39 1.24-3.24-.13-.3-.54-1.53.12-3.19 0 0 1.01-.33 3.3 1.23a11.36 11.36 0 0 1 6 0c2.29-1.56 3.3-1.23 3.3-1.23.66 1.66.25 2.89.12 3.19.77.85 1.24 1.92 1.24 3.24 0 4.64-2.8 5.66-5.48 5.97.43.37.82 1.1.82 2.22 0 1.6-.02 2.88-.02 3.27 0 .32.22.7.82.58A12 12 0 0 0 12 .5Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm0 2v.24l9 5.4 9-5.4V7l-9 5.4L3 7Z" />
    </svg>
  )
}

function ArrowUpIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 fill-current">
      <path d="M12 4.5 5.25 11.25l1.5 1.5L11 8.5V20h2V8.5l4.25 4.25 1.5-1.5L12 4.5Z" />
    </svg>
  )
}

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-12 border-t border-slate-200 bg-white/70 py-8">
      <Container className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900">{siteContent.name}</p>
          <p className="text-sm text-slate-600">{siteContent.role}</p>
          <p className="mt-1 text-xs text-slate-500">
            © {year} {siteContent.name}. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm">
          <a
            href={siteContent.contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[#0a66c2] bg-[#0a66c2] px-3 py-1.5 text-white transition hover:bg-[#084e96]"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <a
            href={siteContent.contact.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-900 bg-slate-900 px-3 py-1.5 text-white transition hover:bg-slate-700"
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            href={`mailto:${siteContent.contact.email}`}
            className="inline-flex items-center gap-2 rounded-lg border border-[#ea4335]/50 bg-white px-3 py-1.5 text-[#ea4335] transition hover:border-[#ea4335] hover:bg-[#ea4335] hover:text-white"
          >
            <MailIcon />
            Email
          </a>
          <a
            href="#home"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-1.5 text-white transition hover:bg-slate-700"
          >
            <ArrowUpIcon />
            Back to Top
          </a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
