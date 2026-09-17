import projects from '../../data/projects.json'
import PetCare from './PetCare'
import ProjectCard from './ProjectCard'

function Projects() {
    const petcare = projects.find(p => p.featured); 
    const others = projects.filter(p => !p.featured); 

    return(
        <section className="projects" id="projects">
            <h2 className='projects-title'>Projects</h2>
            <PetCare project={petcare} />
            <div className='projects-grid'>
                {others.map(p => (
                    <ProjectCard key={p.id} project={p}/>
                ))}
            </div>
        </section>
    )
}

export default Projects