import './css_components/Footer.css'

function Footer() {
    return (
        <footer className="Container-Footer">
            <div className="footer-content">
                {/* Sección 1: PATTO TATTOO STUDIO */}
                <div className="footer-section">
                    <h3>PATTO TATTOO - LA PAZ</h3>
                    <p>Estudio de Tatuajes y Arte Corporal<br />Referente en Bolivia desde hace más de 20 años<br />"Arte que lleva tu esencia"</p>
                    <div className="qr-code">
                        <img src="/patto_qr.png" alt="QR Code Patto Tattoo" />
                    </div>
                </div>

                {/* Sección 2: ESTILOS Y SERVICIOS */}
                <div className="footer-section">
                    <h3>ESTILOS Y SERVICIOS</h3>
                    <ul className="carreras-list">
                        <li><a href="#realismo">Realismo y Retrato</a></li>
                        <li><a href="#tradicional">Tradicional y Old School</a></li>
                        <li><a href="#lettering">Lettering y Caligrafía</a></li>
                        <li><a href="#geometrico">Geométrico y Mandalas</a></li>
                        <li><a href="#coverup">Cover Up y Restauración</a></li>
                    </ul>
                    <div className="qr-code">
                        <img src="/patto_qr.png" alt="QR Code Servicios" />
                    </div>
                </div>

                {/* Sección 3: REDES SOCIALES */}
                <div className="footer-section">
                    <h3>SÍGUENOS</h3>
                    <div className="redes-sociales">
                        <a href="https://www.instagram.com/pattotattoo" target="_blank" rel="noopener noreferrer" className="red-social">
                            <img src="/instagram_icon.png" alt="Instagram" className="icono-red" />
                        </a>
                        <a href="https://www.tiktok.com/@pattoobolivia" target="_blank" rel="noopener noreferrer" className="red-social">
                            <img src="/tiktok_icon.png" alt="TikTok" className="icono-red" />
                        </a>
                        <a href="https://wa.me/59167331105?text=Hola,%20quiero%20de%20agendar%20una%20cita" target="_blank" rel="noopener noreferrer" className="red-social">
                            <img src="/whatssapp_icon.png" alt="WhatsApp" className="icono-red" />
                        </a>
                    </div>

                    {/* Enlaces rápidos */}
                    <div className="enlaces-rapidos">
                        <a href="#ubicacion">Ubicación y contacto</a>
                    </div>
                </div>
            </div>

            {/* Línea divisora */}
            <hr className="footer-divider" />

            {/* Copyright y Créditos */}
            <div className="footer-bottom">
                <p>&copy; Patto Tattoo - La Paz, Bolivia | Tinta que cuenta historias</p>
                <p className="creditos-dev">Desarrollado por Alexander Cruz Apaza y Henry Dario Chipana Ergueta </p>
            </div>
        </footer>
    )
}

export default Footer