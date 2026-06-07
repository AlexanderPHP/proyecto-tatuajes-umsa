import api from './api'

export const getLogs = () => api.get('/logs')
export const getLogsPorUsuario = (usuarioId) => api.get(`/logs/usuario/${usuarioId}`)