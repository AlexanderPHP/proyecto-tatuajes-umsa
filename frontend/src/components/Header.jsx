import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './css_components/Header.css'

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [activeAccordion, setActiveAccordion] = useState(null)
    const navigate = useNavigate()
    
    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user'))

    const esAdmin = user?.rol === 'admin'

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate('/login')
    }

   
    const toggleAccordion = (section) => {
        if (activeAccordion === section) {
            setActiveAccordion(null) 
        } else {
            setActiveAccordion(section) 
        }
    }

    return (
        <header className="header-dark">
            <nav className="navbar-dark">
                <div className="logo-container">
                    <Link to="/">
                        <img src="/patto_logo_dorado.png" alt="AlexiStyle Logo" className="logo-img"/>
                    </Link>
                    <h2>PATTO</h2>
                </div>

                <ul className="desktop-menu">
                    <li><Link to="/">INICIO</Link></li>
                    
                    {esAdmin && (
                        <li className="dropdown-container">
                            <span className="dropdown-trigger">CATÁLOGO ▼</span>
                            <ul className="dropdown-menu-desktop">
                                <li><Link to="/CatalogoDisenos">Ver Diseños</Link></li>
                                <li><Link to="/logs">Logs de Sistema</Link></li>
                            </ul>
                        </li>
                    )}

                    <li className="dropdown-container">
                        <span className="dropdown-trigger">ESTUDIO ▼</span>
                        <ul className="dropdown-menu-desktop">
                            <li><Link to="/horarios-y-materias">Artistas y Horarios</Link></li>
                            <li><Link to="/mapa-interactivo">Ubicación</Link></li>
                            <li><Link to="/directorio-telefonico">Contacto</Link></li>
                        </ul>
                    </li>
                    
                    {!token ? (
                        <li className="dropdown-container">
                            <span className="btn-login-nav">ACCEDER</span>
                            <ul className="dropdown-menu-desktop auth-dropdown">
                                <li><Link to="/Login">Iniciar Sesión</Link></li>
                                <li><Link to="/registro">Registrarse</Link></li>
                            </ul>
                        </li>
                    ) : (
                        <li><button onClick={handleLogout} className="btn-logout-nav">SALIR</button></li>
                    )}
                </ul>

                <div 
                    className="mobile-trigger"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <img src="/menu_icon.png" alt="Menú" className="hamburger-icon"/>
                </div>
            </nav>

            {mobileMenuOpen && (
                <div className="mobile-dropdown">
                    <ul>
                        <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Inicio</Link></li>
                        
                        {esAdmin && (
                            <li>
                                <div className="accordion-trigger" onClick={() => toggleAccordion('catalogo')}>
                                    Catálogo {activeAccordion === 'catalogo' ? '▲' : '▼'}
                                </div>
                                {activeAccordion === 'catalogo' && (
                                    <ul className="accordion-content">
                                        <li><Link to="/CatalogoDisenos" onClick={() => setMobileMenuOpen(false)}>Ver Diseños</Link></li>
                                        <li><Link to="/logs" onClick={() => setMobileMenuOpen(false)}>Logs de Sistema</Link></li>
                                    </ul>
                                )}
                            </li>
                        )}

                        <li>
                            <div className="accordion-trigger" onClick={() => toggleAccordion('estudio')}>
                                Estudio {activeAccordion === 'estudio' ? '▲' : '▼'}
                            </div>
                            {activeAccordion === 'estudio' && (
                                <ul className="accordion-content">
                                    <li><Link to="/horarios-y-materias" onClick={() => setMobileMenuOpen(false)}>Artistas y Horarios</Link></li>
                                    <li><Link to="/mapa-interactivo" onClick={() => setMobileMenuOpen(false)}>Ubicación</Link></li>
                                    <li><Link to="/directorio-telefonico" onClick={() => setMobileMenuOpen(false)}>Contacto</Link></li>
                                </ul>
                            )}
                        </li>
                        
                        {!token ? (
                            <li>
                                <div className="accordion-trigger" onClick={() => toggleAccordion('auth')}>
                                    Acceder {activeAccordion === 'auth' ? '▲' : '▼'}
                                </div>
                                {activeAccordion === 'auth' && (
                                    <ul className="accordion-content">
                                        <li><Link to="/Login" onClick={() => setMobileMenuOpen(false)}>Iniciar Sesión</Link></li>
                                        <li><Link to="/registro" onClick={() => setMobileMenuOpen(false)}>Registrarse</Link></li>
                                    </ul>
                                )}
                            </li>
                        ) : (
                            <li><button onClick={handleLogout} className="btn-logout-mobile">Cerrar Sesión</button></li>
                        )}
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Header