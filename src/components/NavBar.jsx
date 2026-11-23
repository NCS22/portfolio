import { useState } from "react"

const LINKS = [
  { href: "#projects", label: "Proyectos" },
  { href: "#skills", label: "Skills" },
  { href: "#experiences", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="nav" aria-label="Principal">
        <a href="#top" className="nav-brand" onClick={closeMenu}>NCS22.dev</a>

        <button
          type="button"
          className="nav-toggle"
          onClick={() => setIsOpen(prev => !prev)}
          aria-expanded={isOpen}
          aria-controls="nav-links"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <span className={`nav-toggler-bar${isOpen ? ' nav-toggler-bar--open' : ''}`}/>
          <span className={`nav-toggler-bar${isOpen ? ' nav-toggler-bar--open' : ''}`}/>
          <span className={`nav-toggler-bar${isOpen ? ' nav-toggler-bar--open' : ''}`}/>
        </button>

        <div id="nav-links" className={`nav-links${isOpen ? ' nav-links--open' : ''}`}>
            {LINKS.map(link => (
              <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
            ))}
        </div>
    </nav>
  )
}

export default NavBar
