import { useEffect } from "react";

// Marca con `is-revealed` cada elemento [data-reveal] cuando entra en pantalla.
// La base no le da estilos; cada diseño decide si (y cómo) animarlo en CSS.
function useReveal() {
    useEffect(() => {
        const elements = document.querySelectorAll("[data-reveal]");
        if (!("IntersectionObserver" in window)) {
            elements.forEach(el => el.classList.add("is-revealed"));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-revealed");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        elements.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);
}

export default useReveal
