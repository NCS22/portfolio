import { useEffect, useRef } from "react";

// Cursor decorativo que sigue al puntero con algo de inercia y crece sobre elementos interactivos.
// Solo se activa con ratón (pointer: fine) y sin prefers-reduced-motion; el cursor nativo se mantiene.
function Cursor() {
    const ref = useRef(null);

    useEffect(() => {
        const finePointer = window.matchMedia("(pointer: fine)").matches;
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const el = ref.current;
        if (!finePointer || reducedMotion || !el) return;

        let targetX = 0, targetY = 0, x = 0, y = 0;
        let frame = 0;

        // El bucle se detiene solo cuando el cursor alcanza al puntero
        const tick = () => {
            x += (targetX - x) * 0.2;
            y += (targetY - y) * 0.2;
            el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            frame = Math.abs(targetX - x) + Math.abs(targetY - y) > 0.1 ? requestAnimationFrame(tick) : 0;
        };

        const onMove = (e) => {
            targetX = e.clientX;
            targetY = e.clientY;
            el.classList.add("cursor--visible");
            el.classList.toggle("cursor--active", !!e.target.closest("a, button, [role='tab']"));
            if (!frame) frame = requestAnimationFrame(tick);
        };
        const onLeave = () => el.classList.remove("cursor--visible");
        const onDown = () => el.classList.add("cursor--pressed");
        const onUp = () => el.classList.remove("cursor--pressed");

        window.addEventListener("pointermove", onMove, { passive: true });
        window.addEventListener("pointerdown", onDown);
        window.addEventListener("pointerup", onUp);
        document.documentElement.addEventListener("pointerleave", onLeave);

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("pointerdown", onDown);
            window.removeEventListener("pointerup", onUp);
            document.documentElement.removeEventListener("pointerleave", onLeave);
        };
    }, []);

    return (
        <div ref={ref} className="cursor" aria-hidden="true">
            <span className="cursor-dot" />
        </div>
    );
}

export default Cursor
