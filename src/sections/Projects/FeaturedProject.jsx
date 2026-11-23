import { useState, useRef } from "react";
import ProjectSlider from "../../components/ProjectSlider";
import ArrowUpRight from "../../components/icons/ArrowUpRight";

const TABS = [
    { id: "problem", label: "El problema" },
    { id: "decisions", label: "Decisiones clave" },
    { id: "result", label: "Resultado" },
];

function FeaturedProject({ project, index = 0, reversed = false }) {
    const { id, title, tagline, problem, decisions, result, stack, links, images = [] } = project;
    const [activeTab, setActiveTab] = useState("problem");
    const tabRefs = useRef([]);
    const hasMedia = images.length > 0;
    const caseNumber = String(index + 1).padStart(2, "0");

    // Patrón WAI-ARIA de tabs: flechas, Inicio y Fin mueven el foco y activan la pestaña
    const handleTabKeyDown = (e, i) => {
        const keys = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: TABS.length - 1 };
        if (!(e.key in keys)) return;
        e.preventDefault();
        const next = (keys[e.key] + TABS.length) % TABS.length;
        setActiveTab(TABS[next].id);
        tabRefs.current[next]?.focus();
    };

    return (
        <article
            id={id}
            className={`featured${reversed ? " reverse" : ""}${index % 2 === 1 ? " featured--alt" : ""}${!hasMedia ? " no-media" : ""}`}
            data-reveal
        >
            <header className="featured-head">
                <span className="featured-label">Caso destacado · {caseNumber}</span>
                <h3 className="featured-title">{title}</h3>
                <p className="featured-tagline">{tagline}</p>
            </header>

            <div className="featured-content">
                <div className="featured-tabs" role="tablist" aria-label={`Detalle de ${title}`}>
                    {TABS.map((tab, i) => {
                        const selected = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                ref={el => { tabRefs.current[i] = el; }}
                                id={`${id}-tab-${tab.id}`}
                                type="button"
                                role="tab"
                                aria-selected={selected}
                                aria-controls={`${id}-panel`}
                                tabIndex={selected ? 0 : -1}
                                className={`featured-tab${selected ? " active" : ""}`}
                                onClick={() => setActiveTab(tab.id)}
                                onKeyDown={e => handleTabKeyDown(e, i)}
                            >
                                {tab.id === "decisions" ? `${tab.label} (${decisions.length})` : tab.label}
                            </button>
                        );
                    })}
                </div>

                <div
                    id={`${id}-panel`}
                    className="featured-panel"
                    role="tabpanel"
                    aria-labelledby={`${id}-tab-${activeTab}`}
                    tabIndex={0}
                >
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
                    {links.repo && <a href={links.repo} className="btn btn--primary" target="_blank" rel="noopener noreferrer">Ver repositorio</a>}
                    {links.web && (
                        <a href={links.web} className="project-web-redirect" target="_blank" rel="noopener noreferrer">
                            Ir a la web
                            <ArrowUpRight />
                        </a>
                    )}
                </div>
            </div>
            {hasMedia && <ProjectSlider images={images} />}
        </article>
    )
}

export default FeaturedProject
