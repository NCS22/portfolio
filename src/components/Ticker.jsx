import projects from "../data/projects.json";
import experience from "../data/experience.json";

const MONTHS = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

// Fecha de inicio de un periodo tipo "Septiembre 2025 - Junio 2026"
function periodStart(period) {
    const [month, year] = period.split("-")[0].trim().toLowerCase().split(/\s+/);
    return new Date(Number(year), Math.max(MONTHS.indexOf(month), 0));
}

// Años completos desde la primera experiencia laboral
const firstJob = Math.min(...experience.work.map(w => periodStart(w.period).getTime()));
const years = Math.floor((Date.now() - firstJob) / (365.25 * 24 * 60 * 60 * 1000));

const WORDS = [
    `${projects.length} proyectos`,
    "UI/UX Designer",
    years >= 1 ? `+${years} ${years === 1 ? "año" : "años"} de experiencia` : "Primer año de experiencia",
    "Full-Stack Developer",
    "AI Developer",
];

// Cinta decorativa entre secciones. Se pinta dos mitades idénticas (cada una con la lista dos veces,
// para cubrir pantallas anchas): la animación desplaza -50% y el bucle es continuo.
function Ticker({ tone = "lime", reverse = false }) {
    const half = [...WORDS, ...WORDS];
    const items = [...half, ...half];

    return (
        <div className={`ticker ticker--${tone}${reverse ? " ticker--reverse" : ""}`} aria-hidden="true">
            <div className="ticker-track">
                {items.map((word, i) => (
                    <span key={i} className="ticker-item">
                        {word}
                        <span className="ticker-star">✦</span>
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Ticker
