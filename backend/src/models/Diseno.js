import mongoose from "mongoose";

const disenoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: String,
  categoria: { type: String, enum: ["tribal", "realismo", "minimalista", "acuarela", "geometrico", "japones"], required: true },
  imagen: String,
  precioBase: { type: Number, required: true },
  tiempoEstimado: String, 
  tatuador: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
  activo: { type: Boolean, default: true }
});

export default mongoose.model("Diseno", disenoSchema);