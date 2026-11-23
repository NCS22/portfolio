function Hero() {
    return(
        <header className="hero">
            <div className="hero-overlay">
                <div className="hero-overlay-text" data-reveal>
                    <h1 className="hero-overlay-text-name">
                        <span className="hero-overlay-text-kicker">Hola, mi nombre es</span>
                        Ignacio Cabrera Sáez
                    </h1>
                    <span className="hero-overlay-text-rol">full-stack developer & UI/UX designer</span>
                    <p className="hero-overlay-text-description">
                        Full-stack developer con fundamentos sólidos en desarrollo web y bases de datos, pero sobre todo, con una curiosidad constante por seguir aprendiendo. Me gusta aprender por mi cuenta, experimentar y llevar rápidamente lo aprendido a proyectos reales. Cuando desarrollo, busco que cada solución sea optimizada, escalable y responsive, cuidando tanto su funcionamiento como la experiencia de quien la utiliza. También disfruto especialmente trabajando en equipo: entender cómo trabajan los demás, aprender de sus formas de hacer las cosas y encontrar cómo puedo aportar para que el resultado sea mejor. Cada proyecto y cada equipo son una oportunidad para seguir creciendo.
                    </p>
                    <div className="hero-overlay-buttons">
                        <a href="#projects" className="btn btn--primary">
                            Ver Proyectos
                        </a>
                        <a
                            href="/CV_Ignacio_Cabrera_ES.pdf"
                            download="CV_Ignacio_Cabrera.pdf"
                            className="btn btn--secondary">
                            Descargar CV
                        </a>
                    </div>
                </div>
                <img
                    className="hero-overlay-image"
                    src="/Nacho.webp"
                    alt="Retrato de Ignacio Cabrera"
                    width={900}
                    height={1296}
                    fetchPriority="high"
                />
            </div>
        </header>
    )
}

export default Hero
