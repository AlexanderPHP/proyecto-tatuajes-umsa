import api from "./api";

export const getUsuarios = () => api.get("/usuarios");
export const getUsuario = (id) => api.get(`/usuarios/${id}`);
export const actualizarUsuario = (id, datos) => api.put(`/usuarios/${id}`, datos);
export const eliminarUsuario = (id) => api.delete(`/usuarios/${id}`);