import experienceData from '../data/experience.json'
import Contacto from '../components/Contacto';

function Experience() {
    const work = experienceData.work; 
    const education = experienceData.education; 

    return(
        <section className='experience' id="experiences">
            <article className='experience-card'>
                <h2>Work Experience</h2>
                {work.map((w, i) => (
                    <div className='experience-card-content' key={i}>
                        <h4>{w.company}</h4>
                        <span>{w.period}</span>
                        <p>{w.position}</p>
                        <p>{w.description}</p>
                    </div>
                ))}
            </article>
            <article className='study-card'>
                <h2>Education</h2>
                {education.map((e, i) => (
                    <div className='study-card-content' key={i}>
                        <h4>{e.school}</h4>
                        <span>{e.period}</span>
                        <p>{e.studies}</p>
                    </div>
                ))}

                <Contacto/>
            </article>
        </section>
    )
}

export default Experience