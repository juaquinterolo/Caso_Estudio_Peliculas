import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema({
  serial: { type: String, unique: true, required: true },
  titulo: { type: String, required: true },
  sinopsis: { type: String },
  url: { type: String, unique: true, required: true },
  imagen: { type: String },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now },
  anioEstreno: { type: Number },

  genero: { type: mongoose.Schema.Types.ObjectId, ref: "Genero", required: true },
  director: { type: mongoose.Schema.Types.ObjectId, ref: "Director", required: true },
  productora: { type: mongoose.Schema.Types.ObjectId, ref: "Productora", required: true },
  tipo: { type: mongoose.Schema.Types.ObjectId, ref: "Tipo", required: true }
});

export default mongoose.model("Media", mediaSchema);
