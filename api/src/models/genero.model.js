import mongoose from "mongoose";

const generoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  estado: { type: Boolean, default: true },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now },
  descripcion: { type: String }
});

export default mongoose.model("Genero", generoSchema);