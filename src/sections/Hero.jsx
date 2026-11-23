const NAME = "Ignacio Cabrera Sáez";
const ROLES = ["full-stack developer", "UI/UX designer", "curioso", "team player"];

// Divide el nombre en palabras y letras para animarlas una a una (cada letra recibe su índice en --i)
function AnimatedName({ text }) {
    let index = 0;
    return (
        <span className="hero-name-letters" aria-hidden="true">
            {text.split(" ").map((word, w) => (
                <span key={w} className="hero-name-word">
                    {[...word].map((char, c) => (
                        <span key={c} className="hero-name-char" style={{ "--i": index++ }}>{char}</span>
                    ))}
                </span>
            ))}
        </span>
    );
}

function Hero() {
    return(
        <header className="hero">
            <div className="hero-overlay">
                <div className="hero-overlay-text" data-reveal>
                    <h1 className="hero-overlay-text-name">
                        <span className="hero-overlay-text-kicker">Hola, mi nombre es</span>
                        <span className="sr-only">{NAME}</span>
                        <AnimatedName text={NAME} />
                    </h1>
                    <span className="hero-overlay-text-rol">
                        <span className="sr-only">full-stack developer & UI/UX designer</span>
                        <span className="hero-rol-prefix" aria-hidden="true">Soy</span>
                        <span className="hero-rol-rotator" aria-hidden="true">
                            {ROLES.map((role, i) => (
                                <span key={role} className="hero-rol-word" style={{ "--i": i, "--total": ROLES.length }}>{role}</span>
                            ))}
                        </span>
                    </span>
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
                <div className="hero-photo">
                    <img
                        className="hero-overlay-image"
                        src="/Nacho.webp"
                        alt="Retrato de Ignacio Cabrera"
                        width={900}
                        height={1296}
                        fetchPriority="high"
                    />
                    <span className="sticker sticker--hola" aria-hidden="true">¡hola! 👋</span>
                    <span className="sticker sticker--madrid" aria-hidden="true">hecho en Madrid</span>
                    <svg className="sticker-star" viewBox="0 0 100 100" aria-hidden="true">
                        <path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" />
                    </svg>
                </div>
            </div>
        </header>
    )
}

export default Hero
