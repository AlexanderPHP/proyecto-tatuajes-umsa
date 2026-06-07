import { Link } from 'react-router-dom'
import './css_components/UnoDeSeis.css'

function HeroSection() {
    return (
        <section className="hero-container">
            {/* Capa oscura para que el texto resalte sobre la imagen */}
            <div className="hero-overlay"></div>
            
            <div className="hero-content">
                <span className="hero-subtitle">Arte de Excelencia en Bolivia</span>
                <h1 className="hero-title">Los mejores artistas<br/>del tatuaje</h1>
                
                <p className="hero-description">
                    En PATTO Studio, transformamos tus ideas en obras de arte permanentes. 
                    Profesionales con técnicas avanzadas y los más altos estándares de higiene.
                </p>
                
                <div className="hero-actions">
                    <Link to="/CatalogoDisenos" className="btn-primario">Ver Catálogo</Link>
                    <Link to="/horarios-y-materias" className="btn-secundario">Conocer Artistas</Link>
                </div>
            </div>
        </section>
    )
}

export default HeroSection