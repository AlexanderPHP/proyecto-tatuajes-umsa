import mongoose from "mongoose";

const citaSchema = new mongoose.Schema({
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true },
  tatuador: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario", required: true },
  fecha: { type: Date, required: true },
  hora: { type: String, required: true },
  diseno: { type: mongoose.Schema.Types.ObjectId, ref: "Diseno" },
  estado: { type: String, enum: ["pendiente", "confirmada", "cancelada", "completada"], default: "pendiente" },
  precio: Number,
  notas: String,
  activo: { type: Boolean, default: true } // Eliminación lógica
});

export default mongoose.model("Cita", citaSchema);