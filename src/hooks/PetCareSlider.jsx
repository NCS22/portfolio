import {useState, useEffect, useRef} from "react"; 

function PetCareSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    const images = [
        { src: "/projects/petcare-phone.png", alt: "petcare-imagen-1" },
        { src: "/projects/petcare-chat.png", alt: "petcare-imagen-2" },
        { src: "/projects/petcare-articulos.png", alt: "petcare-imagen-3" },
        { src: "/projects/petcare-userpage.png", alt: "petcare-imagen-4" }
    ];

    // Limpiar el temporizador activo
    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    // Lógica para la navegación automática (3 segundos)
    useEffect(() => {
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
    }, [currentIndex]);

    // Controles manuales
    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="petcare-carousel-wrapper">
        <div className="petcare-slider-container">
            <div 
            className="petcare-slider-track" 
            style={{ transform: `translate3d(${-currentIndex * 100}%, 0, 0)` }}
            >
            {images.map((img, index) => (
                <img 
                key={index}
                className="petcare-slider-item" 
                src={img.src} 
                alt={img.alt}
                />
            ))}
            </div>
        </div>

        {/* Botones de navegación */}
        <button className="petcare-nav-btn prev" onClick={prevSlide}>&#10094;</button>
        <button className="petcare-nav-btn next" onClick={nextSlide}>&#10095;</button>

        {/* Indicadores de puntos (Dots) */}
        <div className="petcare-dots">
            {images.map((_, index) => (
            <span
                key={index}
                className={`petcare-dot ${currentIndex === index ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
            ></span>
            ))}
        </div>
        </div>
    );
}

export default PetCareSlider