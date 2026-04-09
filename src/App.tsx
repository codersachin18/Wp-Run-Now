import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Stats from './sections/Stats'
import Features from './sections/Features'
import HowItWorks from './sections/HowItWorks'
import Download from './sections/Download'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Download />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
