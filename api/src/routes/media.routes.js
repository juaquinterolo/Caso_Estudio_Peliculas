import { Router } from "express";
import { crearMedia, obtenerMedias, actualizarMedia, eliminarMedia } from "../controllers/media.controller.js";

const router = Router();

router.post("/", crearMedia);
router.get("/", obtenerMedias);
router.put("/:id", actualizarMedia);
router.delete("/:id", eliminarMedia);

export default router;
