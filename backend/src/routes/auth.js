import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario.js";
import LogAcceso from "../models/LogAcceso.js";

const router = express.Router();

// REGISTRO
router.post("/registro", async (req, res) => {
  try {
    const { nombre, email, password, rol, telefono } = req.body;
    
    const existe = await Usuario.findOne({ email });
    if (existe) return res.status(400).json({ msg: "El email ya está registrado" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const usuario = new Usuario({ nombre, email, password: hashedPassword, rol, telefono });
    await usuario.save();

    // Log de registro
    await LogAcceso.create({
      usuario: usuario._id,
      email,
      ip: req.ip,
      evento: "registro",
      browser: req.headers["user-agent"]
    });

    res.status(201).json({ msg: "Usuario registrado", usuario });
  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor", error: error.message });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const usuario = await Usuario.findOne({ email, activo: true });
    if (!usuario) return res.status(400).json({ msg: "Usuario no encontrado" });

    const valido = await bcrypt.compare(password, usuario.password);
    if (!valido) return res.status(400).json({ msg: "Contraseña incorrecta" });

    const token = jwt.sign(
      { id: usuario._id, rol: usuario.rol },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    // Log de ingreso
    await LogAcceso.create({
      usuario: usuario._id,
      email,
      ip: req.ip,
      evento: "ingreso",
      browser: req.headers["user-agent"]
    });

    res.json({ token, usuario: { id: usuario._id, nombre: usuario.nombre, email, rol: usuario.rol } });
  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor", error: error.message });
  }
});

export default router;