import projects from '../../data/projects.json'
import FeaturedProject from './FeaturedProject'
import ProjectCard from './ProjectCard'

function Projects() {
    const featured = projects
        .filter(p => p.featured)
        .sort((a, b) => (a.featuredOrder ?? 0) - (b.featuredOrder ?? 0));
    const others = projects.filter(p => !p.featured);

    return(
        <section className="projects" id="projects">
            <h2 className='projects-title'>Projects</h2>
            <div className='featured-list'>
                {featured.map((p, i) => (
                    <FeaturedProject key={p.id} project={p} index={i} reversed={i % 2 === 1} />
                ))}
            </div>
            <div className='projects-grid'>
                {others.map(p => (
                    <ProjectCard key={p.id} project={p}/>
                ))}
            </div>
        </section>
    )
}

export default Projects
