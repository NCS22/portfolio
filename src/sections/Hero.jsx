function Hero() {
    return(
        <div className="hero">
            <div className="hero-overlay">
                <div className="hero-overlay-text">
                    <h1 className="hero-overlay-text-name">
                        <span className="hero-overlay-text-kicker">Hola, mi nombre es</span>
                        Ignacio Cabrera Sáez
                    </h1>
                    <span className="hero-overlay-text-rol">full-stack developer & UI/UX designer</span>
                    <p className="hero-overlay-text-description">
                        Full-stack developer con fundamentos sólidos en desarrollo web y bases de datos, y una capacidad de aprender por cuenta propia que aplico a todo lo que construyo. De HTML y JavaScript vanilla a React, aprendo rápido y lo llevo a la práctica sin esperar a que me lo enseñen. Cada proyecto es una oportunidad para hacerlo mejor que el anterior.
                    </p>
                    <div className="hero-overlay-buttons">
                        <a href="#projects" className="hero-overlay-text-buttom">
                            Ver Proyectos
                        </a>
                        <a 
                            href="/CV_Ignacio_Cabrera_ES.pdf"
                            download="CV_Ignacio_Cabrera.pdf"
                            className="hero-overlay-text-buttom-cv">
                            Descargar CV
                        </a>
                    </div>
                </div>
                <img className="hero-overlay-image" src='/Nacho.jpeg' alt="imagen de Ignacio Cabrera"/>
            </div>
        </div>
    )
}

export default Hero