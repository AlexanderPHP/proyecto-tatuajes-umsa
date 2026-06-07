import './DosDeSeis.css'

function GaleriaDestacada() {
    return (
        <section className="galeria-container">
            <h2 className="galeria-titulo">Trabajo Y Ambiente Destacados</h2>
            
            <div className="galeria-grid">
                <img src="/q1.jpg" alt="Tatuaje diseño 1" className="galeria-img" />
                <img src="/q2.jpg" alt="Tatuaje diseño 2" className="galeria-img" />
                <img src="/q3.jpg" alt="Tatuaje diseño 3" className="galeria-img" />
                <img src="/q4.jpg" alt="Tatuaje diseño 4" className="galeria-img" />
                <img src="/q5.jpg" alt="Tatuaje diseño 5" className="galeria-img" />
                <img src="/q6.jpg" alt="Tatuaje diseño 6" className="galeria-img" />
            </div>
        </section>
    )
}

export default GaleriaDestacada