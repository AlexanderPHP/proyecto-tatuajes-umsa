import express from "express";
import Diseno from "../models/Diseno.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const disenos = await Diseno.find({ activo: true }).populate("tatuador", "nombre");
    res.json(disenos);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const diseno = new Diseno(req.body);
    await diseno.save();
    res.status(201).json(diseno);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const diseno = await Diseno.findById(req.params.id).populate("tatuador", "nombre");
    if (!diseno || !diseno.activo) return res.status(404).json({ msg: "No encontrado" });
    res.json(diseno);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const diseno = await Diseno.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(diseno);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// DELETE LÓGICO
router.delete("/:id", async (req, res) => {
  try {
    await Diseno.findByIdAndUpdate(req.params.id, { activo: false });
    res.json({ msg: "Diseño eliminado lógicamente" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

export default router;