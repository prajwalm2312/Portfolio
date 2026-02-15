import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import AchievementsSection from './components/AchievementsSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Container from './components/ui/Container'

function App() {
  return (
    <>
      <Navbar />
      <Container as="main" className="min-h-screen py-12">
        <Hero />
        <AboutSection />
        <ExperienceSection />
        <AchievementsSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </Container>
      <Footer />
    </>
  )
}

export default App
