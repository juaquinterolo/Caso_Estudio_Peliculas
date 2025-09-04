import { Router } from "express";
import { crearDirector, obtenerDirectores, actualizarDirector, eliminarDirector } from "../controllers/director.controller.js";

const router = Router();

router.post("/", crearDirector);
router.get("/", obtenerDirectores);
router.put("/:id", actualizarDirector);
router.delete("/:id", eliminarDirector);

export default router;
