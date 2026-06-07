import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { registro } from '../services/authService'
import '../css_pages/Carrera.css'

function Registro() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        password: '',
        telefono: '',
        rol: 'cliente'
    })
    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState('')
    const [fortaleza, setFortaleza] = useState(0)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        
        // Validar fortaleza de contraseña
        if (name === 'password') {
            evaluarFortaleza(value)
        }
    }

    const evaluarFortaleza = (password) => {
        let puntos = 0
        
        if (password.length >= 6) puntos++
        if (password.length >= 10) puntos++
        if (/[A-Z]/.test(password)) puntos++
        if (/[0-9]/.test(password)) puntos++
        if (/[^A-Za-z0-9]/.test(password)) puntos++
        
        setFortaleza(puntos)
    }

    const getFortalezaTexto = () => {
        if (fortaleza <= 1) return { texto: 'DÉBIL ', color: '#c62828' }
        if (fortaleza <= 3) return { texto: 'MEDIA ', color: '#f57c00' }
        return { texto: 'FUERTE ', color: '#2e7d32' }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (fortaleza < 2) {
            setError('❌ La contraseña es muy débil. Usa al menos 6 caracteres, una mayúscula y un número.')
            return
        }
        
        setCargando(true)
        setError('')

        try {
            await registro(formData)
            alert('Usuario registrado! Ahora puedes iniciar sesión')
            navigate('/login')
        } catch (error) {
            setError('Error al registrar: ' + (error.response?.data?.msg || error.message))
        } finally {
            setCargando(false)
        }
    }

    const infoFortaleza = getFortalezaTexto()

    return (
        <>
            <Header />
            <main className="carrera-page">
                <div className="carrera-header">
                    <h1>Registro</h1>
                    <p>Crea tu cuenta en AlexiStyle Studio</p>
                </div>

                <div className="carrera-contenido">
                    {error && <p style={{ padding: '10px', backgroundColor: '#f8d7da', borderRadius: '4px' }}>{error}</p>}
                    
                    <form onSubmit={handleSubmit} className="seccion">
                        <div style={{ marginBottom: '10px' }}>
                            <label>Nombre completo:</label><br />
                            <input
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                            />
                        </div>

                        <div style={{ marginBottom: '10px' }}>
                            <label>Email:</label><br />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                            />
                        </div>

                        <div style={{ marginBottom: '10px' }}>
                            <label>Contraseña:</label><br />
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                            />
                            {formData.password && (
                                <p style={{ 
                                    marginTop: '5px', 
                                    color: infoFortaleza.color,
                                    fontWeight: 'bold'
                                }}>
                                    Fortaleza: {infoFortaleza.texto}
                                </p>
                            )}
                            <small style={{ color: '#666' }}>
                                Mínimo 6 caracteres. Usa mayúsculas, números y símbolos para más seguridad.
                            </small>
                        </div>

                        <div style={{ marginBottom: '10px' }}>
                            <label>Teléfono:</label><br />
                            <input
                                type="tel"
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                            />
                        </div>

                        <div style={{ marginBottom: '15px' }}>
                            <label>Tipo de cuenta:</label><br />
                            <select
                                name="rol"
                                value={formData.rol}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                            >
                                <option value="cliente">Cliente</option>
                                <option value="tatuador">Tatuador</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            disabled={cargando}
                            style={{
                                padding: '12px 24px',
                                backgroundColor: '#2e7d32',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '16px'
                            }}
                        >
                            {cargando ? 'Registrando...' : '📝 Crear Cuenta'}
                        </button>
                    </form>

                    <p style={{ marginTop: '20px' }}>
                        ¿Ya tienes cuenta? <a href="/login" style={{ color: '#2e7d32' }}>Inicia sesión aquí</a>
                    </p>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Registro