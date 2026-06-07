import { useState } from 'react'
import './css_components/CincoDeSeis.css'

function CincoDeSeis() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const actividades = [
        {
            imagen: "/t1.jpg",
            titulo: "PATTO lanza nuevos diseños",
            fecha: "27 de Mayo de 2025"
        },
        {
            imagen: "/t2.jpg",
            titulo: "Diseños occidentales",
            fecha: "5 de Agosto de 2025"
        },
        {
            imagen: "/t3.jpg",
            titulo: "PATTO presenta su nueva colección de verano",
            fecha: "4 de Agosto de 2025"
        },
        {
            imagen: "/t4.jpg",
            titulo: "Tendendias en tatuajes",
            fecha: "28 de Julio de 2025"
        }
    ]

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % actividades.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + actividades.length) % actividades.length)
    }

    return (
        <div className="Container-CincoDeSeis">
            <h2 className="titulo-actividades">Últimos trabajos</h2>
            
            <div className="carrusel-container">
                <button className="boton-anterior" onClick={prevSlide}>❮</button>
                
                <div className="carrusel">
                    <div className="slide">
                        <img 
                            src={actividades[currentSlide].imagen} 
                            alt={actividades[currentSlide].titulo}
                            className="imagen-slide"
                        />
                        <div className="info-slide">
                            <p className="fecha">{actividades[currentSlide].fecha}</p>
                            <h3>{actividades[currentSlide].titulo}</h3>
                        </div>
                    </div>
                </div>
                
                <button className="boton-siguiente" onClick={nextSlide}>❯</button>
            </div>

            {/* Indicadores */}
            <div className="indicadores">
                {actividades.map((_, index) => (
                    <button
                        key={index}
                        className={`indicador ${index === currentSlide ? 'activo' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    ></button>
                ))}
            </div>

            {/* Galería de miniaturas */}
            <div className="galeria-miniaturas">
                {actividades.map((actividad, index) => (
                    <div
                        key={index}
                        className={`miniatura ${index === currentSlide ? 'activa' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    >
                        <img src={actividad.imagen} alt={actividad.titulo} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CincoDeSeis