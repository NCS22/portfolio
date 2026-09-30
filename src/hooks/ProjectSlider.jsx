import { useState, useEffect, useRef } from "react";

function ProjectSlider({ images = [] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        if (images.length <= 1) return;
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setCurrentIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                ),
            3000
        );

        return () => {
            resetTimeout();
        };
    }, [currentIndex, images.length]);

    useEffect(() => {
        setCurrentIndex(0);
    }, [images.length]);

    if (!images || images.length === 0) return null;

    if (images.length === 1) {
        return (
            <div className="featured-carousel-wrapper">
                <div className="featured-slider-container">
                    <img
                        className="featured-slider-item"
                        src={images[0].src}
                        alt={images[0].alt || "Captura del proyecto"}
                        loading="lazy"
                    />
                </div>
            </div>
        );
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="featured-carousel-wrapper">
            <div className="featured-slider-container">
                <div
                    className="featured-slider-track"
                    style={{ transform: `translate3d(${-currentIndex * 100}%, 0, 0)` }}
                >
                    {images.map((img, index) => (
                        <img
                            key={img.src || index}
                            className="featured-slider-item"
                            src={img.src}
                            alt={img.alt || `Captura ${index + 1} del proyecto`}
                            loading="lazy"
                        />
                    ))}
                </div>
            </div>

            <button type="button" className="featured-nav-btn prev" onClick={prevSlide} aria-label="Imagen anterior">&#10094;</button>
            <button type="button" className="featured-nav-btn next" onClick={nextSlide} aria-label="Imagen siguiente">&#10095;</button>

            <div className="featured-dots">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        aria-label={`Ir a la imagen ${index + 1}`}
                        className={`featured-dot ${currentIndex === index ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProjectSlider
