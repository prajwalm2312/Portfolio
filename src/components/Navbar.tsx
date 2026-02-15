import { useEffect, useMemo, useState } from 'react'
import Container from './ui/Container'
import { navLinks, siteContent } from '../data/siteContent'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const sectionIds = useMemo(() => navLinks.map((link) => link.href.slice(1)), [])

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (inView[0]) {
          setActiveSection(inView[0].target.id)
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.2, 0.35, 0.5, 0.75],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [sectionIds])

  const handleLinkClick = (href: string) => {
    setActiveSection(href.slice(1))
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <Container as="nav" className="flex h-16 items-center justify-between">
        <a href="#home" className="text-sm font-bold tracking-wide text-slate-900">
          {siteContent.brand}
        </a>

        <button
          type="button"
          className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          Menu
        </button>

        <ul className="hidden items-center gap-2 text-sm font-medium md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1)

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`rounded-lg px-3 py-2 transition ${
                    isActive
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
      </Container>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white py-3 md:hidden">
          <Container>
            <ul className="space-y-2 text-sm font-medium">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1)

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className={`block rounded-lg px-3 py-2 ${
                        isActive ? 'bg-slate-900 text-white' : 'text-slate-700'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </Container>
        </div>
      )}
    </header>
  )
}

export default Navbar
