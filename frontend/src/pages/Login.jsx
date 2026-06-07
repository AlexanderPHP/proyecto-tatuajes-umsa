import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import ReCAPTCHA from 'react-google-recaptcha'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { login } from '../services/authService'
import '../css_pages/Carrera.css'

function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' })
    const [cargando, setCargando] = useState(false)
    const [error, setError] = useState('')
    const [captchaValido, setCaptchaValido] = useState(false)
    const captchaRef = useRef(null)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleCaptcha = (value) => {
        setCaptchaValido(!!value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (!captchaValido) {
            setError(' Por favor verifica que no eres un robot')
            return
        }
        
        setCargando(true)
        setError('')

        try {
            await login(formData.email, formData.password)
            alert(' Bienvenido a AlexiStyle!')
            navigate('/catalogo')
        } catch (error) {
            setError(' Email o contraseña incorrectos')
            // Resetear CAPTCHA en caso de error
            captchaRef.current.reset()
            setCaptchaValido(false)
        } finally {
            setCargando(false)
        }
    }

    return (
        <>
            <Header />
            <main className="carrera-page">
                <div className="carrera-header">
                    <h1>Iniciar Sesión</h1>
                    <p>Accede a tu cuenta de AlexiStyle Studio</p>
                </div>

                <div className="carrera-contenido">
                    {error && <p style={{ padding: '10px', backgroundColor: '#f8d7da', borderRadius: '4px' }}>{error}</p>}
                    
                    <form onSubmit={handleSubmit} className="seccion">
                        <div style={{ marginBottom: '15px' }}>
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

                        <div style={{ marginBottom: '15px' }}>
                            <label>Contraseña:</label><br />
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                            />
                        </div>

                        {/* CAPTCHA */}
                        <div style={{ marginBottom: '15px' }}>
                            <ReCAPTCHA
                                ref={captchaRef}
                                sitekey="6LeVfhItAAAAACMkuh-3PwUgeaJnOxzS0UZUAEW9"
                                onChange={handleCaptcha}
                            />
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
                            {cargando ? 'Ingresando...' : 'Ingresar'}
                        </button>
                    </form>

                    <p style={{ marginTop: '20px' }}>
                        ¿No tienes cuenta? <a href="/registro" style={{ color: '#2e7d32' }}>Regístrate aquí</a>
                    </p>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Login