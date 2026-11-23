import skillNames from '../data/skills.json'

const iconModules = import.meta.glob('../assets/icons/*.png', {
    eager: true,
    import: 'default'
});

const skills = Object.entries(iconModules).map(([path, url]) => {
    const file = path.split('/').pop().replace('.png', '');
    return { name: skillNames[file] ?? file, url };
});

function Skills() {
    return(
        <section className="skills" id="skills">
            <div className="skills-top" data-reveal>
                <h2 className="skills-title">Skills</h2>
                <p className="skills-desc">Herramientas que he usado a lo largo de mis proyectos y trayectoria</p>
            </div>
            <div className="skills-content">
                <div className='skills-scroll'>
                    <div className='skills-scroll-track'>
                        {/* La lista se duplica para que el marquee sea continuo; la copia se oculta a lectores de pantalla */}
                        {[...skills, ...skills].map((skill, i) => (
                            <img
                                key={i}
                                src={skill.url}
                                alt={i < skills.length ? skill.name : ""}
                                aria-hidden={i >= skills.length || undefined}
                                title={skill.name}
                                className='skills-icon'
                                width={64}
                                height={64}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
