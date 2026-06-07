import { Navigate } from 'react-router-dom'

function RutaProtegida({ children }) {

    const token = localStorage.getItem('token')
    const userGuardado = localStorage.getItem('user')
    const user = userGuardado ? JSON.parse(userGuardado) : null;
    
    if (!token) {
        return <Navigate to="/login" replace />
    }

    if (user?.rol !== 'admin') {
        alert("Acceso denegado: Se requieren permisos de Administrador.");
        return <Navigate to="/" replace />
    }
    
    return children
}

export default RutaProtegida