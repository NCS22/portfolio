function ProjectCard({project}) {
    const {title, tagline, stack, links, img} = project; 
    const repoAvailable = (links.repo !== '...'); 
    const textRepo = repoAvailable ? 'Ver repositorio' : 'No disponible'; 

    return(
        <article className="project-card">
            <div className="project-card-left">
                <div className="project-card-content">
                    <h4 className="project-card-title">{title}</h4>
                    <p className="project-card-tagline">{tagline}</p>
                </div>

                <div className="project-card-bottom">
                    <div className="project-card-stack">
                        {stack.map(tech => (
                            <span key={tech} className="project-tag">{tech}</span>
                        ))}
                    </div>
                    <div className="project-links">
                        <div className="project-link-repo">
                            {<a href={links.repo} className={repoAvailable ? 'petcare-btn-primary' : 'petcare-btn-not'} target="_blank">{textRepo}</a>}
                        </div>
                        <div className={repoAvailable ? 'project-link-web' : 'hidden-element'}>
                            {<a href={links.web} className='petcare-btn-primary' target="_blank">Ir a la web</a>}
                        </div>
                    </div>

                </div>
            </div>
            <img className="project-card-img" src={`/projects/${img}`}/>
        </article>
    )
}

export default ProjectCard