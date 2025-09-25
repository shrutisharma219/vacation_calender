import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDb } from "./config/db.js";
import authRoutes from "./routes/auth.js";
import holidayRoutes from "./routes/holidays.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

await connectDb();

app.use("/api/auth", authRoutes);
app.use("/api/holidays", holidayRoutes);

app.get("/", (req, res) => res.send({ status: "ok", message: "Calendar backend running" }));

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});