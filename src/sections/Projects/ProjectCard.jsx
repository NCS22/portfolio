function ProjectCard({project}) {
    const {title, tagline, stack, links, img} = project; 
    const repoAvailable = (links.repo !== '...'); 
    const textRepo = repoAvailable ? 'Ver repositorio' : 'No disponible'; 
    const webAvailable = links.web; 

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
                            {<a href={links.repo} className={repoAvailable ? 'project-btn-primary' : 'petcare-btn-not'} target="_blank">{textRepo}</a>}
                        </div>
                        <div className={webAvailable ? 'project-link-web' : 'hidden-element'}>
                            {<a href={links.web} className='project-web-redirect' target="_blank">
                                Ir a la web
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M17 7l-10 10" />
                                    <path d="M8 7l9 0l0 9" />
                                </svg>
                            </a>}
                        </div>
                    </div>

                </div>
            </div>
            <img className="project-card-img" src={`/projects/${img}`}/>
        </article>
    )
}

export default ProjectCard