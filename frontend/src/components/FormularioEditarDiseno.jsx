import { useState, useEffect } from 'react'
import { actualizarDiseno, getDiseno } from '../services/disenoService'

function FormularioEditarDiseno({ disenoId, onDisenoActualizado, onCancelar }) {
    const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
        categoria: 'tribal',
        precioBase: '',
        tiempoEstimado: ''
    })
    const [cargando, setCargando] = useState(false)
    const [mensaje, setMensaje] = useState('')

    useEffect(() => {
        const cargarDiseno = async () => {
            try {
                const response = await getDiseno(disenoId)
                const diseno = response.data
                setFormData({
                    nombre: diseno.nombre,
                    descripcion: diseno.descripcion,
                    categoria: diseno.categoria,
                    precioBase: diseno.precioBase,
                    tiempoEstimado: diseno.tiempoEstimado
                })
            } catch (error) {
                setMensaje('Error al cargar diseño: ' + error.message)
            }
        }
        cargarDiseno()
    }, [disenoId])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setCargando(true)
        setMensaje('')

        try {
            const datos = {
                ...formData,
                precioBase: Number(formData.precioBase)
            }
            await actualizarDiseno(disenoId, datos)
            setMensaje('✅ Diseño actualizado exitosamente')
            if (onDisenoActualizado) onDisenoActualizado()
        } catch (error) {
            setMensaje('Error al actualizar: ' + error.message)
        } finally {
            setCargando(false)
        }
    }

    return (
        <div className="seccion" style={{ marginBottom: '20px', backgroundColor: '#fff3e0' }}>
            <h2>✏️ Editar Diseño</h2>
            {mensaje && <p style={{ padding: '10px', backgroundColor: mensaje.includes('✅') ? '#d4edda' : '#f8d7da', borderRadius: '4px', marginBottom: '10px' }}>{mensaje}</p>}
            
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label>Nombre:</label><br />
                    <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Descripción:</label><br />
                    <textarea
                        name="descripcion"
                        value={formData.descripcion}
                        onChange={handleChange}
                        required
                        rows="3"
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Categoría:</label><br />
                    <select
                        name="categoria"
                        value={formData.categoria}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    >
                        <option value="tribal">Tribal</option>
                        <option value="realismo">Realismo</option>
                        <option value="minimalista">Minimalista</option>
                        <option value="acuarela">Acuarela</option>
                        <option value="geometrico">Geométrico</option>
                        <option value="japones">Japonés</option>
                    </select>
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Precio Base ($):</label><br />
                    <input
                        type="number"
                        name="precioBase"
                        value={formData.precioBase}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label>Tiempo Estimado:</label><br />
                    <input
                        type="text"
                        name="tiempoEstimado"
                        value={formData.tiempoEstimado}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>

                <button
                    type="submit"
                    disabled={cargando}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#f57c00',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginRight: '10px'
                    }}
                >
                    {cargando ? 'Guardando...' : ' Guardar Cambios'}
                </button>
                
                <button
                    type="button"
                    onClick={onCancelar}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#757575',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Cancelar
                </button>
            </form>
        </div>
    )
}

export default FormularioEditarDiseno