import express from "express";
import Cita from "../models/Cita.js";

const router = express.Router();

// CRUD para citas

router.get("/", async (req, res) => {
  try {
    const citas = await Cita.find({ activo: true })
      .populate("cliente", "nombre email")
      .populate("tatuador", "nombre")
      .populate("diseno", "nombre precioBase");
    res.json(citas);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const cita = new Cita(req.body);
    await cita.save();
    res.status(201).json(cita);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const cita = await Cita.findById(req.params.id)
      .populate("cliente", "nombre email")
      .populate("tatuador", "nombre")
      .populate("diseno", "nombre precioBase");
    if (!cita || !cita.activo) return res.status(404).json({ msg: "No encontrada" });
    res.json(cita);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const cita = await Cita.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(cita);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// DELETE LÓGICO
router.delete("/:id", async (req, res) => {
  try {
    await Cita.findByIdAndUpdate(req.params.id, { activo: false });
    res.json({ msg: "Cita cancelada (eliminación lógica)" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

export default router;