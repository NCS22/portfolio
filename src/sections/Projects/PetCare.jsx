import PetCareSlider from "../../hooks/PetCareSlider";

function PetCare({project}) {
    const {title, tagline, problem, decisions, result, stack, links } = project; 
    return(
        <article className="petcare">
            <div className="petcare-content">
                <span className="petcare-label">Proyecto destacado</span>
                <h3 className="petcare-title">{title}</h3>
                <p className="petcare-tagline">{tagline}</p>

                <div className="petcare-block">
                    <h4>El problema</h4>
                    <p>{problem}</p>
                </div>
                
                <div className="petcare-block">
                    <h4>Decisiones Clave</h4>
                    <ul>
                        {decisions.map((d, i) => <li key={i}>{d}</li>)}
                    </ul>
                </div>

                <div className="petcare-block">
                    <h4>Resultado</h4>
                    <p>{result}</p>
                </div>

                <div className="petcare-stack">
                    {stack.map(tech => (
                        <span key={tech} className="project-tag">{tech}</span>
                    ))}
                </div>

                <div className="project-link">
                    {links.repo && <a href={links.repo} className="petcare-btn-primary" target="_blank">Ver repositorio</a>}
                </div>
            </div>
            <PetCareSlider/>
            
        </article>
    )
}

export default PetCare