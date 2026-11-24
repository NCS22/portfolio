import experienceData from '../data/experience.json'

function Experience() {
    const { work, education } = experienceData;

    return(
        <section className='experience' id="experiences">
            <article className='study-card' data-reveal>
                <h2>Formación</h2>
                <div className='study-card-list'>
                    {education.map(e => (
                        <div className='study-card-content' key={e.id}>
                            <h4>{e.school}</h4>
                            <span>{e.period}</span>
                            <p>{e.studies}</p>
                        </div>
                    ))}
                </div>
            </article>
            <article className='experience-card' data-reveal>
                <h2>Experiencia</h2>
                <div className='experience-card-list'>
                    {work.map(w => (
                        <div className='experience-card-content' key={w.id}>
                            <h4>{w.company}</h4>
                            <span>{w.period}</span>
                            <p>{w.position}</p>
                            <p>{w.description}</p>
                        </div>
                    ))}
                </div>
            </article>
        </section>
    )
}

export default Experience
