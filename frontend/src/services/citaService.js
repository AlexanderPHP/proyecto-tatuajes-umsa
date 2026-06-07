import api from "./api";

export const getCitas = () => api.get("/citas");
export const getCita = (id) => api.get(`/citas/${id}`);
export const crearCita = (datos) => api.post("/citas", datos);
export const actualizarCita = (id, datos) => api.put(`/citas/${id}`, datos);
export const eliminarCita = (id) => api.delete(`/citas/${id}`);