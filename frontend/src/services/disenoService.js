import api from './api'

export const getDisenos = () => api.get('/disenos')
export const getDiseno = (id) => api.get(`/disenos/${id}`)
export const crearDiseno = (datos) => api.post('/disenos', datos)
export const actualizarDiseno = (id, datos) => api.put(`/disenos/${id}`, datos)
export const eliminarDiseno = (id) => api.delete(`/disenos/${id}`)