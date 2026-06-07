import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css_pages/Carrera.css'

function HorariosYMaterias() {
    return (
        <>
            <Header />
            <main className="carrera-page">
    <div className="carrera-header">
        <h1>Artistas y Especialidades</h1>
        <p>Conoce a nuestros tatuadores y sus horarios de atención</p>
    </div>

    <div className="carrera-contenido">
        <section className="seccion">
            <h2>Horarios de Artistas</h2>
            <table className="tabla-horarios">
                <thead>
                    <tr>
                        <th>Artista</th>
                        <th>Especialidad</th>
                        <th>Horario de atención</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Carlos "Patto" Méndez</td>
                        <td>Realismo y Retrato</td>
                        <td>10:00 - 15:00</td>
                    </tr>
                    <tr>
                        <td>Laura Fernández</td>
                        <td>Old School / Tradicional</td>
                        <td>11:00 - 17:00</td>
                    </tr>
                    <tr>
                        <td>Diego Rojas</td>
                        <td>Lettering y Caligrafía</td>
                        <td>14:00 - 19:00</td>
                    </tr>
                    <tr>
                        <td>Ana Lucía Paz</td>
                        <td>Geométrico y Mandalas</td>
                        <td>10:00 - 16:00</td>
                    </tr>
                    <tr>
                        <td>Javier "Javu" Torrez</td>
                        <td>Cover Up y Restauración</td>
                        <td>15:00 - 20:00</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section className="seccion">
            <h2>Especialidades por Artista</h2>
            <div className="materias-info">
                <h3>Realismo y Retrato</h3>
                <ul>
                    <li>Retratos hiperrealistas</li>
                    <li>Realismo en blanco y negro</li>
                    <li>Realismo a color</li>
                    <li>Animales y naturaleza</li>
                </ul>
            </div>
            <div className="materias-info">
                <h3>Traditional y Old School</h3>
                <ul>
                    <li>Líneas gruesas y colores vibrantes</li>
                    <li>Anclas, rosas, golondrinas</li>
                    <li>Diseños neo tradicionales</li>
                    <li>American traditional</li>
                </ul>
            </div>
            <div className="materias-info">
                <h3>Lettering y Caligrafía</h3>
                <ul>
                    <li>Frases y nombres personalizados</li>
                    <li>Caligrafía gótica y cursiva</li>
                    <li>Hand lettering artístico</li>
                    <li>Tipografía 3D</li>
                </ul>
            </div>
            <div className="materias-info">
                <h3>Geométrico y Mandalas</h3>
                <ul>
                    <li>Mandalas simétricos</li>
                    <li>Puntillismo (dotwork)</li>
                    <li>Figuras sagradas geométricas</li>
                    <li>Line art minimalista</li>
                </ul>
            </div>
        </section>

        <section className="seccion">
            <h2>Nuestros Artistas</h2>
            <p>Contamos con más de 10 artistas especializados en diferentes estilos de tatuaje, todos con años de experiencia y formación continua en técnicas avanzadas. Cada uno con su propio estilo y enfoque artístico.</p>
        </section>
    </div>
</main>
            <Footer />
        </>
    )
}

export default HorariosYMaterias