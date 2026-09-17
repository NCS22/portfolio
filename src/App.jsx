import NavBar from "./components/NavBar"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects/Projects"
import Skills from "./sections/Skills"
import Experience from "./sections/Experience"
import Footer from "./components/Footer"

import './styles/App.css'
import './styles/NavBar.css'
import './styles/Hero.css'
import './styles/Projects.css'
import './styles/Skills.css'
import './styles/Experience.css'
import './styles/Footer.css'
import './styles/Contacto.css'

function App() {

  return (
    <>
      <div className="page-top">
        <NavBar/>
        <Hero/>
      </div>
      <Projects/>
      <Skills/>
      <Experience/>
      <Footer/>
    </>
  )
}

export default App
