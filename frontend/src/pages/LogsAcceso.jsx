import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getLogs } from '../services/logService'
import '../css_pages/Carrera.css'

function LogsAcceso() {
    const [logs, setLogs] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const cargarLogs = async () => {
            try {
                const response = await getLogs()
                setLogs(response.data)
            } catch (error) {
                console.error('Error al cargar logs:', error)
            } finally {
                setCargando(false)
            }
        }
        cargarLogs()
    }, [])

    const formatearFecha = (fecha) => {
        return new Date(fecha).toLocaleString('es-ES', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        })
    }

    const getEventoIcono = (evento) => {
        switch(evento) {
            case 'ingreso': return ' '
            case 'salida': return ' '
            case 'registro': return ' '
            case 'error': return ' '
            default: return ' '
        }
    }

    return (
        <>
            <Header />
            <main className="carrera-page">
                <div className="carrera-header">
                    <h1>Log de Accesos</h1>
                    <p>Registro de actividad del sistema AlexiStyle</p>
                </div>

                <div className="carrera-contenido">
                    {cargando ? (
                        <p>Cargando logs...</p>
                    ) : logs.length === 0 ? (
                        <p>No hay registros de acceso</p>
                    ) : (
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#2e7d32', color: 'white' }}>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>Evento</th>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>Usuario</th>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>Email</th>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>Browser</th>
                                    <th style={{ padding: '12px', textAlign: 'left' }}>Fecha y Hora</th>
                                </tr>
                            </thead>
                            <tbody>
                                {logs.map((log) => (
                                    <tr key={log._id} style={{ borderBottom: '1px solid #ddd' }}>
                                        <td style={{ padding: '10px' }}>
                                            {getEventoIcono(log.evento)} {log.evento}
                                        </td>
                                        <td style={{ padding: '10px' }}>
                                            {log.usuario?.nombre || 'Anónimo'}
                                        </td>
                                        <td style={{ padding: '10px' }}>
                                            {log.email || 'N/A'}
                                        </td>
                                        <td style={{ padding: '10px', fontSize: '12px' }}>
                                            {log.browser ? log.browser.substring(0, 50) + '...' : 'N/A'}
                                        </td>
                                        <td style={{ padding: '10px' }}>
                                            {formatearFecha(log.fechaHora)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </main>
            <Footer />
        </>
    )
}

export default LogsAcceso