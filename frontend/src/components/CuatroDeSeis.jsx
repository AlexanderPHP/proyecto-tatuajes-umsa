
import './css_components/CuatroDeSeis.css'
function Ubicacion() {
    return (
        <section className="ubicacion-container">
            <div className="ubicacion-header">
                <img src="/patto_logo_dorado.png" alt="Logo Patto" className="ubicacion-logo" />
                <h2>DIRECCIÓN: <span className="ubicacion-texto">Avenida 6 de Agosto, shopping V. Centenario</span></h2>
            </div>
            
            <div className="mapa-wrapper">
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.7584640442!2d-68.13159!3d-16.50069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f2066d71b87eb%3A0xc3ec5c4a63162b77!2sAv.%206%20de%20Agosto%2C%20La%20Paz!5e0!3m2!1ses!2sbo!4v1717540200000!5m2!1ses!2sbo" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}

export default Ubicacion