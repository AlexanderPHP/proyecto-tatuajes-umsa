import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css_pages/Carrera.css'

function DirectorioTelefonico() {
    return (
        <>
            <Header />
            <main className="carrera-page">
    <div className="carrera-header">
        <h1>Directorio de Contacto</h1>
        <p>Comunícate con nosotros para citas y consultas</p>
    </div>

    <div className="carrera-contenido">
        <section className="seccion">
            <h2>Contactos Principales</h2>
            <div className="contacto-item">
                <h3>Recepción y Agendamiento de Citas</h3>
                <p>📱 2-733296 (telefono en mantenimiento)</p>
                <p>💬 Celular - WhatsApp: (+591) 78874335</p>
                <p>📧 citasPatto784123@gmail.com</p>
            </div>

            <div className="contacto-item">
                <h3>Coordinación con Artistas</h3>
                <p>📱 (+591) 67331105</p>
                <p>📧 citasPatto784123@gmail.com</p>
            </div>

            <div className="contacto-item">
                <h3>Cuidado Post-Tatuaje (Soporte)</h3>
                <p>📱 (+591) 67331105</p>
                <p>📧 citasPatto784123@gmail.com</p>
            </div>

            <div className="contacto-item">
                <h3>Diseño Personalizado</h3>
                <p>📱 (+591) 78874335</p>
                <p>📧 citasPatto784123@gmail.com</p>
            </div>
        </section>

        <section className="seccion">
            <h2>Horario de Atención</h2>
            <div className="horario-info">
                <p><strong>Lunes a viernes:</strong> 10:00 - 20:00</p>
                <p><strong>Sábados:</strong> 10:00 - 18:00</p>
                <p><strong>Domingos:</strong> Cerrado (consultas por redes)</p>
                <p><em>📌 Atención solo con cita previa</em></p>
            </div>
        </section>

        <section className="seccion">
            <h2>Ubicación Física</h2>
            <p>Av. 6 de Agosto, Shoping V. Centenario, Local 45<br />
            La Paz - Bolivia</p>
            <p><strong>📌 Referencia:</strong> Frente a la UMSA</p>
        </section>
    </div>
</main>
            <Footer />
        </>
    )
}

export default DirectorioTelefonico