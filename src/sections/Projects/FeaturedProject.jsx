import ProjectSlider from "../../hooks/ProjectSlider";

function FeaturedProject({ project, index = 0, reversed = false }) {
    const { id, title, tagline, problem, decisions, result, stack, links, images = [] } = project;
    const hasMedia = images && images.length > 0;
    const caseNumber = String(index + 1).padStart(2, "0");

    return (
        <article
            id={id}
            className={`featured${reversed ? " reverse" : ""}${index % 2 === 1 ? " featured--alt" : ""}${!hasMedia ? " no-media" : ""}`}
        >
            <div className="featured-content">
                <span className="featured-label">Caso destacado · {caseNumber}</span>
                <h3 className="featured-title">{title}</h3>
                <p className="featured-tagline">{tagline}</p>

                <div className="featured-block">
                    <h4>El problema</h4>
                    <p>{problem}</p>
                </div>

                <div className="featured-block">
                    <h4>Decisiones Clave</h4>
                    <ul>
                        {decisions.map((d, i) => <li key={i}>{d}</li>)}
                    </ul>
                </div>

                <div className="featured-block">
                    <h4>Resultado</h4>
                    <p>{result}</p>
                </div>

                <div className="featured-stack">
                    {stack.map(tech => (
                        <span key={tech} className="project-tag">{tech}</span>
                    ))}
                </div>

                <div className="project-link">
                    {links.repo && <a href={links.repo} className="featured-btn-primary" target="_blank" rel="noreferrer">Ver repositorio</a>}
                </div>
            </div>
            {hasMedia && <ProjectSlider images={images} />}

        </article>
    )
}

export default FeaturedProject
