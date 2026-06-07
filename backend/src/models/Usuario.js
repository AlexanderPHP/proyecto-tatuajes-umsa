import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rol: { type: String, enum: ["cliente", "tatuador", "admin"], default: "cliente" },
  telefono: String,
  fechaRegistro: { type: Date, default: Date.now },
  activo: { type: Boolean, default: true } // Eliminación lógica
});

export default mongoose.model("Usuario", usuarioSchema);