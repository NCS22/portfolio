import ArrowUpRight from "../../components/icons/ArrowUpRight";

function ProjectCard({ project }) {
    const { title, tagline, stack, links, img } = project;

    return (
        <article className="project-card" data-reveal>
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
                        {links.repo
                            ? <a href={links.repo} className="btn btn--primary" target="_blank" rel="noopener noreferrer">Ver repositorio</a>
                            : <span className="btn btn--disabled" aria-disabled="true">Repositorio no disponible</span>}
                        {links.web && (
                            <a href={links.web} className="project-web-redirect" target="_blank" rel="noopener noreferrer">
                                Ir a la web
                                <ArrowUpRight />
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <img className="project-card-img" src={`/projects/${img}`} alt={`Captura de ${title}`} loading="lazy" />
        </article>
    )
}

export default ProjectCard
