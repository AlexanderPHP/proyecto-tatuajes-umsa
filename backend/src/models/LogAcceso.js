import mongoose from "mongoose";

const logSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: "Usuario" },
  email: String,
  ip: String,
  evento: { type: String, enum: ["ingreso", "salida", "registro", "error"], required: true },
  browser: String,
  fechaHora: { type: Date, default: Date.now }
});

export default mongoose.model("LogAcceso", logSchema);