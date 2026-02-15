import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import Container from './components/ui/Container'

function App() {
  return (
    <>
      <Navbar />
      <Container as="main" className="min-h-screen py-12">
        <Hero />
        <ProjectsSection />
        <ContactSection />
      </Container>
    </>
  )
}

export default App
