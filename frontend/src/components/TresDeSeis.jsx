import './css_components/TresDeSeis.css'

function Estadisticas() {
    return (
        <section className="stats-container">
            <div className="stat-item">
                <h3 className="stat-number">10.800+</h3>
                <p className="stat-text">Tatuajes realizados</p>
            </div>
            <div className="stat-item">
                <h3 className="stat-number">98%</h3>
                <p className="stat-text">Clientes satisfechos</p>
            </div>
            <div className="stat-item">
                <h3 className="stat-number">30+</h3>
                <p className="stat-text">Artistas expertos</p>
            </div>
            <div className="stat-item">
                <h3 className="stat-number">20+</h3>
                <p className="stat-text">Años de experiencia</p>
            </div>
        </section>
    )
}

export default Estadisticas