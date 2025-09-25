import express from "express";
import Holiday from "../models/Holiday.js";
import { requireAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const holidays = await Holiday.find().sort({ date: 1 });
  res.json(holidays);
});

router.get("/:id", async (req, res) => {
  try {
    const holiday = await Holiday.findById(req.params.id);
    if (!holiday) return res.status(404).json({ error: "Not found" });
    res.json(holiday);
  } catch {
    res.status(400).json({ error: "Invalid ID" });
  }
});

router.post("/", requireAdmin, async (req, res) => {
  const { title, date, description } = req.body;
  if (!title || !date) return res.status(400).json({ error: "title and date required" });

  const holiday = await Holiday.create({ title, date, description });
  res.status(201).json(holiday);
});

router.put("/:id", requireAdmin, async (req, res) => {
  try {
    const updated = await Holiday.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: "Not found" });
    res.json(updated);
  } catch {
    res.status(400).json({ error: "Invalid ID" });
  }
});

// Admin: delete holiday
router.delete("/:id", requireAdmin, async (req, res) => {
  try {
    const deleted = await Holiday.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Not found" });
    res.status(204).end();
  } catch {
    res.status(400).json({ error: "Invalid ID" });
  }
});

export default router;
