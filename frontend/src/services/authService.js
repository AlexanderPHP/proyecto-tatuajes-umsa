import api from "./api";

export const login = async (email, password) => {
  const response = await api.post("/auth/login", { email, password });
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.usuario));
  }
  return response.data;
};

export const registro = async (datos) => {
  const response = await api.post("/auth/registro", datos);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const getUsuarioActual = () => {
  return JSON.parse(localStorage.getItem("user"));
};