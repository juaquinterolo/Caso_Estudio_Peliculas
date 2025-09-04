import Genero from "../models/genero.model.js";

export const crearGenero = async (req, res) => {
  try {
    const genero = new Genero(req.body);
    await genero.save();
    res.status(201).json(genero);
  } catch (error) {
    res.status(500).json({ message: "Error creando género", error });
  }
};

export const obtenerGeneros = async (req, res) => {
  try {
    const generos = await Genero.find();
    res.json(generos);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo géneros", error });
  }
};

export const actualizarGenero = async (req, res) => {
  try {
    const genero = await Genero.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(genero);
  } catch (error) {
    res.status(500).json({ message: "Error actualizando género", error });
  }
};

export const eliminarGenero = async (req, res) => {
  try {
    await Genero.findByIdAndDelete(req.params.id);
    res.json({ message: "Género eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error eliminando género", error });
  }
};