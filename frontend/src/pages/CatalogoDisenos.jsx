import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FormularioDiseno from '../pages/FormularioDiseno'
import FormularioEditarDiseno from '../components/FormularioEditarDiseno'
import { getDisenos, eliminarDiseno } from '../services/disenoService'
import '../css_pages/Carrera.css'

import ReportePDF from '../components/ReportePDF'
import GraficoCategorias from '../components/GraficoCategorias'

function CatalogoDisenos() {
    const [disenos, setDisenos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [disenoEditando, setDisenoEditando] = useState(null)

    const cargarDisenos = async () => {
        setCargando(true)
        try {
            const response = await getDisenos()

            const disenosActivos = response.data.filter(diseno => diseno.estado !== false && diseno.activo !== false)
            
            setDisenos(disenosActivos)
        } catch (error) {
            console.error("Error al cargar diseños:", error)
        } finally {
            setCargando(false)
        }
    }

    const handleEliminar = async (id) => {
        if (!confirm('¿Estás seguro de eliminar este diseño?')) return
        try {
            await eliminarDiseno(id)
            alert('✅ Diseño eliminado correctamente')
            cargarDisenos()
        } catch (error) {
            alert(' Error al eliminar: ' + error.message)
        }
    }

    const handleEditar = (id) => {
        setDisenoEditando(id)
    }

    const handleCancelarEdicion = () => {
        setDisenoEditando(null)
    }

    const handleDisenoActualizado = () => {
        setDisenoEditando(null)
        cargarDisenos()
    }

    useEffect(() => {
        cargarDisenos()
    }, [])

    return (
        <>
            <Header />
            <main className="carrera-page">
                <div className="carrera-header">
                    <h1>Catálogo de Diseños</h1>
                    <p>Explora nuestros diseños exclusivos en AlexiStyle Studio</p>
                </div>

                <div className="carrera-contenido">
                    {disenoEditando ? (
                        <FormularioEditarDiseno 
                            disenoId={disenoEditando}
                            onDisenoActualizado={handleDisenoActualizado}
                            onCancelar={handleCancelarEdicion}
                        />
                    ) : (
                        <FormularioDiseno onDisenoCreado={cargarDisenos} />
                    )}

                    <ReportePDF disenos={disenos} />
                    <GraficoCategorias disenos={disenos} />

                    <h2>Lista de Diseños</h2>
                    {cargando ? (
                        <p>Cargando diseños...</p>
                    ) : disenos.length === 0 ? (
                        <p>No hay diseños disponibles</p>
                    ) : (
                        disenos.map((diseno) => (
                            <section className="seccion" key={diseno._id}>
                                <h2>{diseno.nombre}</h2>
                                <p><strong>Descripción:</strong> {diseno.descripcion}</p>
                                <p><strong>Categoría:</strong> {diseno.categoria}</p>
                                <p><strong>Precio base:</strong> ${diseno.precioBase}</p>
                                <p><strong>Tiempo estimado:</strong> {diseno.tiempoEstimado}</p>
                                
                                <div style={{ marginTop: '15px' }}>
                                    
                                    <button 
                                        onClick={() => handleEditar(diseno._id)}
                                        style={{
                                            padding: '8px 16px',
                                            backgroundColor: '#f57c00',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                            marginRight: '10px'
                                        }}
                                    >
                                        Editar
                                    </button>

                                    
                                    
                                    <button 
                                        onClick={() => handleEliminar(diseno._id)}
                                        style={{
                                            padding: '8px 16px',
                                            backgroundColor: '#c62828',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </section>
                        ))
                    )}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default CatalogoDisenos