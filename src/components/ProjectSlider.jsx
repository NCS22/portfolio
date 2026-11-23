import { useState, useEffect } from "react";

const AUTOPLAY_MS = 3000;

function ProjectSlider({ images = [] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const total = images.length;

    // Cada cambio de índice reinicia el temporizador, así un clic manual no se pisa con el autoplay
    useEffect(() => {
        if (total <= 1) return;
        const timeout = setTimeout(() => setCurrentIndex(prev => (prev + 1) % total), AUTOPLAY_MS);
        return () => clearTimeout(timeout);
    }, [currentIndex, total]);

    if (total === 0) return null;

    if (total === 1) {
        return (
            <div className="featured-carousel-wrapper">
                <div className="featured-slider-container">
                    <img
                        className="featured-slider-item"
                        src={images[0].src}
                        alt={images[0].alt || "Captura del proyecto"}
                        width={1600}
                        height={900}
                        loading="lazy"
                    />
                </div>
            </div>
        );
    }

    const prevSlide = () => setCurrentIndex(prev => (prev - 1 + total) % total);
    const nextSlide = () => setCurrentIndex(prev => (prev + 1) % total);

    return (
        <div className="featured-carousel-wrapper">
            <div className="featured-slider-container">
                <div
                    className="featured-slider-track"
                    style={{ transform: `translate3d(${-currentIndex * 100}%, 0, 0)` }}
                >
                    {images.map((img, index) => (
                        <img
                            key={img.src}
                            className="featured-slider-item"
                            src={img.src}
                            alt={img.alt || `Captura ${index + 1} del proyecto`}
                            width={1600}
                            height={900}
                            loading="lazy"
                        />
                    ))}
                </div>
            </div>

            <button type="button" className="featured-nav-btn prev" onClick={prevSlide} aria-label="Imagen anterior">&#10094;</button>
            <button type="button" className="featured-nav-btn next" onClick={nextSlide} aria-label="Imagen siguiente">&#10095;</button>

            <div className="featured-dots">
                {images.map((img, index) => (
                    <button
                        key={img.src}
                        type="button"
                        aria-label={`Ir a la imagen ${index + 1}`}
                        aria-current={currentIndex === index}
                        className={`featured-dot${currentIndex === index ? " active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProjectSlider
