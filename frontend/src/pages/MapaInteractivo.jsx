import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css_pages/Carrera.css'
import '../css_pages/MapaInteractivo.css'

function MapaInteractivo() {
    return (
        <>
            <Header />
            <main className="carrera-page">
    <div className="carrera-header" id="mapa-header">
        <h1>Mapa Interactivo</h1>
        <p>Encuéntranos en La Paz, Bolivia</p>
    </div>

    <div className="carrera-contenido">
        <section className="seccion">
            <h2>Ubicación</h2>
            <p>Avenida 6 de Agosto, Shoping V. Centenario, Local 45<br />
            La Paz - Bolivia</p>
            <p><strong>Horario:</strong> Lunes a Sábado de 10:00 a 20:00</p>
        </section>

        <section className="seccion mapa-contenedor">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.7584640442!2d-68.13159!3d-16.50069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f2d8e8e8e8e8f%3A0x0!2sINTITUTO%20DE%20CAPACITACION%20SUPERIOR!5e0!3m2!1ses!2sbo!4v1234567890"
                width="100%"
                height="500"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </section>

        <section className="seccion">
            <h2>Cómo llegar</h2>
            <div className="como-llegar">
                <h3>En transporte público:</h3>
                <ul className="lista-tramites">
                    <li>Líneas de minibús: Av. Arce, UMSA, Plaza del estudiante</li>
                    <li>Avenida Arce esquina Av. 6 de Agosto</li>
                </ul>

                <h3>En taxi o Uber:</h3>
                <ul className="lista-tramites">
                    <li>Dirección: Av. 6 de Agosto, Shoping V. Centenario</li>
                    <li>Referencia: Segundo piso, Local 45</li>
                    <li>Zona: El Prado / Centro</li>
                </ul>

                <h3>A pie:</h3>
                <ul className="lista-tramites">
                    <li>Desde la Plaza del Estudiante: 2 minutos caminando</li>
                    <li>Desde Multicine (Hacia la Umsa): 16 minutos</li>
                </ul>
            </div>
        </section>

        <section className="seccion">
            <h2>Nuestro estudio cuenta con:</h2>
            <ul className="lista-tramites">
                <li>Sala de tatuajes completamente equipada y esterilizada</li>
                <li>Camillas profesionales con reposabrazos ergonómicos</li>
                <li>Autoclave de grado médico para esterilización</li>
                <li>Iluminación LED profesional para máxima precisión</li>
                <li>Sala de espera cómoda con café y agua</li>
                <li>Exhibición de portfolios de todos nuestros artistas</li>
            </ul>
        </section>
        </div>
</main>
            <Footer />
        </>
    )
}

export default MapaInteractivo