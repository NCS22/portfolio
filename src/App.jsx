import NavBar from "./components/NavBar"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects/Projects"
import Skills from "./sections/Skills"
import Experience from "./sections/Experience"
import Contacto from "./components/Contacto"
import Footer from "./components/Footer"
import Cursor from "./components/Cursor"
import Ticker from "./components/Ticker"
import useReveal from "./hooks/useReveal"

import './styles/App.css'
import './styles/Buttons.css'
import './styles/NavBar.css'
import './styles/Hero.css'
import './styles/Projects.css'
import './styles/Skills.css'
import './styles/Experience.css'
import './styles/Footer.css'
import './styles/Contacto.css'

function App() {
  useReveal();

  return (
    <>
      <Cursor/>
      <NavBar/>
      <div className="page-top" id="top">
        <Hero/>
      </div>
      <Ticker tone="lime"/>
      <main>
        <Projects/>
        <Skills/>
        <Experience/>
        <Ticker tone="pink" reverse/>
        <Contacto/>
      </main>
      <Footer/>
    </>
  )
}

export default App
