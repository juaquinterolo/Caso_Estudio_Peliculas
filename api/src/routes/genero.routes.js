import { Router } from "express";
import { crearGenero, obtenerGeneros, actualizarGenero, eliminarGenero } from "../controllers/genero.controller.js";

const router = Router();

router.post("/", crearGenero);
router.get("/", obtenerGeneros);
router.put("/:id", actualizarGenero);
router.delete("/:id", eliminarGenero);

export default router;