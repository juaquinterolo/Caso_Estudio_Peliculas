import mongoose from "mongoose";

const tipoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now },
  descripcion: { type: String }
});

export default mongoose.model("Tipo", tipoSchema);
