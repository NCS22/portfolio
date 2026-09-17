const iconModules = import.meta.glob('../assets/icons/*.png', {
    eager: true, 
    import: 'default'
}); 

const skills = Object.entries(iconModules).map(([path, url]) => ({
    name: path.split('/').pop().replace('.png', ''), 
    url
}))

function Skills() {
    return(
        <section className="skills" id="skills">
            <div className="skills-top">
                <h2 className="skills-title">Skills</h2>
                <p className="skills-desc">Herramientas que he usado a lo largo de mis proyectos y trayectoria</p>
            </div>
            <div className="skills-content">
                <div className='skills-scroll'>
                    <div className='skills-scroll-track'>    
                        {[...skills, ...skills].map((skill, i) => (
                            <img
                                key={i}
                                src={skill.url}
                                alt={skill.name}
                                title={skill.name}
                                className='skills-icon'
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills