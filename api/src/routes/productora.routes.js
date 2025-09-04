import { Router } from "express";
import { crearProductora, obtenerProductoras, actualizarProductora, eliminarProductora } from "../controllers/productora.controller.js";

const router = Router();

router.post("/", crearProductora);
router.get("/", obtenerProductoras);
router.put("/:id", actualizarProductora);
router.delete("/:id", eliminarProductora);

export default router;
