import { useState } from "react"

function NavBar() {
  const [isOpen, setIsOpen] = useState(false); 
  const closeMenu = () => setIsOpen(false); 

  return (
    <nav>
        <h2>NCS22.dev</h2>

        <button 
          className="nav-toggle" 
          onClick={() => setIsOpen(prev => !prev)} 
          aria-expanded={isOpen} 
          aria-controls="nav-links" 
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className={`nav-toggler-bar ${isOpen ? 'nav-toggler-bar--open' : ''}`}/>
          <span className={`nav-toggler-bar ${isOpen ? 'nav-toggler-bar--open' : ''}`}/>
          <span className={`nav-toggler-bar ${isOpen ? 'nav-toggler-bar--open' : ''}`}/>
        </button>

        <div id="nav-links" className={`nav-links ${isOpen ? 'nav-links--open' : ''}`}>
            <a href="#projects" onClick={closeMenu}>Proyectos</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#experiences" onClick={closeMenu}>Experiencia</a>
        </div>
    </nav>
  )
}

export default NavBar
