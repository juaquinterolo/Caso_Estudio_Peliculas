import { Router } from "express";
import { crearTipo, obtenerTipos, actualizarTipo, eliminarTipo } from "../controllers/tipo.controller.js";

const router = Router();

router.post("/", crearTipo);
router.get("/", obtenerTipos);
router.put("/:id", actualizarTipo);
router.delete("/:id", eliminarTipo);

export default router;
