import express from "express";
import Usuario from "../models/Usuario.js";

const router = express.Router();

// GET todos los usuarios activos
router.get("/", async (req, res) => {
  try {
    const usuarios = await Usuario.find({ activo: true }).select("-password");
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// GET un usuario
router.get("/:id", async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id).select("-password");
    if (!usuario || !usuario.activo) return res.status(404).json({ msg: "No encontrado" });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true }).select("-password");
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// DELETE LÓGICO
router.delete("/:id", async (req, res) => {
  try {
    await Usuario.findByIdAndUpdate(req.params.id, { activo: false });
    res.json({ msg: "Usuario eliminado lógicamente" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

export default router;