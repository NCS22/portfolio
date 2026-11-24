import skillNames from '../data/skills.json'

const iconModules = import.meta.glob('../assets/icons/*.png', {
    eager: true,
    import: 'default'
});

const skills = Object.entries(iconModules).map(([path, url]) => {
    const file = path.split('/').pop().replace('.png', '');
    return { name: skillNames[file] ?? file, url };
});

// Una fila del marquee. La lista se duplica para que el bucle sea continuo.
// Solo la primera fila (sin duplicado) es visible para lectores de pantalla.
function SkillsRow({ items, reverse = false, decorative = false }) {
    return (
        <div className='skills-scroll' aria-hidden={decorative || undefined}>
            <div className={`skills-scroll-track${reverse ? ' skills-scroll-track--reverse' : ''}`}>
                {[...items, ...items].map((skill, i) => (
                    <span key={i} className='skills-chip' title={skill.name}>
                        <img
                            src={skill.url}
                            alt={!decorative && i < items.length ? skill.name : ""}
                            aria-hidden={decorative || i >= items.length || undefined}
                            className='skills-icon'
                            width={64}
                            height={64}
                        />
                        <span className='skills-chip-name' aria-hidden="true">{skill.name}</span>
                    </span>
                ))}
            </div>
        </div>
    );
}

function Skills() {
    return(
        <section className="skills" id="skills">
            <div className="skills-top" data-reveal>
                <h2 className="skills-title">Skills</h2>
                <p className="skills-desc">Herramientas que he usado a lo largo de mis proyectos y trayectoria</p>
            </div>
            <div className="skills-content">
                <SkillsRow items={skills} />
                <SkillsRow items={[...skills].reverse()} reverse decorative />
            </div>
        </section>
    )
}

export default Skills
