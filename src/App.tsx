import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Highlights } from './components/sections/Highlights';
import { Projects } from './components/sections/Projects';
import { Architecture } from './components/sections/Architecture';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { DeepDives } from './components/sections/DeepDives';
import { Leadership } from './components/sections/Leadership';
import { GitHubCta } from './components/sections/GitHubCta';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-paper-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Highlights />
        <Projects />
        <Architecture />
        <Experience />
        <Skills />
        <DeepDives />
        <Leadership />
        <GitHubCta />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

