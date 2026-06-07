import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import authRoutes from "./routes/auth.js";
import usuarioRoutes from "./routes/usuarios.js";
import citaRoutes from "./routes/citas.js";
import disenoRoutes from "./routes/disenos.js";

import logRoutes from './routes/logs.js'

dotenv.config();

const app = express();

connectDB();

app.use(cors({
  origin: [
    "http://localhost:5173", 
    "http://localhost:3001",
    "https://proyecto-tatuajes-umsa.netlify.app"  // ← AGREGA ESTA LÍNEA
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/citas", citaRoutes);
app.use("/api/disenos", disenoRoutes);
app.use("/api/logs", logRoutes);
app.get("/", (req, res) => {
  res.send("🚀 AlexiStyle API funcionando");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});