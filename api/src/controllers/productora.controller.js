import Productora from "../models/productora.model.js";

export const crearProductora = async (req, res) => {
  try {
    const productora = new Productora(req.body);
    await productora.save();
    res.status(201).json(productora);
  } catch (error) {
    res.status(500).json({ message: "Error creando productora", error });
  }
};

export const obtenerProductoras = async (req, res) => {
  try {
    const productoras = await Productora.find();
    res.json(productoras);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo productoras", error });
  }
};

export const actualizarProductora = async (req, res) => {
  try {
    const productora = await Productora.findByIdAndUpdate(
      req.params.id,
      { ...req.body, fechaActualizacion: Date.now() },
      { new: true }
    );
    res.json(productora);
  } catch (error) {
    res.status(500).json({ message: "Error actualizando productora", error });
  }
};

export const eliminarProductora = async (req, res) => {
  try {
    await Productora.findByIdAndDelete(req.params.id);
    res.json({ message: "Productora eliminada" });
  } catch (error) {
    res.status(500).json({ message: "Error eliminando productora", error });
  }
};
