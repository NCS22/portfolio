import { useState } from "react";
import ProjectSlider from "../../hooks/ProjectSlider";

const TABS = [
    { id: "problem", label: "El problema" },
    { id: "decisions", label: "Decisiones clave" },
    { id: "result", label: "Resultado" },
];

function FeaturedProject({ project, index = 0, reversed = false }) {
    const { id, title, tagline, problem, decisions, result, stack, links, images = [] } = project;
    const [activeTab, setActiveTab] = useState("problem");
    const hasMedia = images && images.length > 0;
    const caseNumber = String(index + 1).padStart(2, "0");

    return (
        <article
            id={id}
            className={`featured${reversed ? " reverse" : ""}${index % 2 === 1 ? " featured--alt" : ""}${!hasMedia ? " no-media" : ""}`}
        >
            <header className="featured-head">
                <span className="featured-label">Caso destacado · {caseNumber}</span>
                <h3 className="featured-title">{title}</h3>
                <p className="featured-tagline">{tagline}</p>
            </header>

            <div className="featured-content">
                <div className="featured-tabs" role="tablist" aria-label={`Detalle de ${title}`}>
                    {TABS.map(tab => (
                        <button
                            key={tab.id}
                            type="button"
                            role="tab"
                            aria-selected={activeTab === tab.id}
                            className={`featured-tab${activeTab === tab.id ? " active" : ""}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.id === "decisions" ? `${tab.label} (${decisions.length})` : tab.label}
                        </button>
                    ))}
                </div>

                <div className="featured-panel" role="tabpanel">
                    {activeTab === "problem" && <p>{problem}</p>}
                    {activeTab === "decisions" && (
                        <ul>
                            {decisions.map((d, i) => <li key={i}>{d}</li>)}
                        </ul>
                    )}
                    {activeTab === "result" && <p>{result}</p>}
                </div>

                <div className="featured-stack">
                    {stack.map(tech => (
                        <span key={tech} className="project-tag">{tech}</span>
                    ))}
                </div>

                <div className="project-links">
                    {links.repo && <a href={links.repo} className="featured-btn-primary" target="_blank" rel="noreferrer">Ver repositorio</a>}
                    {links.web && (
                        <a href={links.web} className="project-web-redirect" target="_blank" rel="noreferrer">
                            Ir a la web
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-up-right">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M17 7l-10 10" />
                                <path d="M8 7l9 0l0 9" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
            {hasMedia && <ProjectSlider images={images} />}

        </article>
    )
}

export default FeaturedProject
