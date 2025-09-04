import Tipo from "../models/tipo.model.js";

export const crearTipo = async (req, res) => {
  try {
    const tipo = new Tipo(req.body);
    await tipo.save();
    res.status(201).json(tipo);
  } catch (error) {
    res.status(500).json({ message: "Error creando tipo", error });
  }
};

export const obtenerTipos = async (req, res) => {
  try {
    const tipos = await Tipo.find();
    res.json(tipos);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo tipos", error });
  }
};

export const actualizarTipo = async (req, res) => {
  try {
    const tipo = await Tipo.findByIdAndUpdate(
      req.params.id,
      { ...req.body, fechaActualizacion: Date.now() },
      { new: true }
    );
    res.json(tipo);
  } catch (error) {
    res.status(500).json({ message: "Error actualizando tipo", error });
  }
};

export const eliminarTipo = async (req, res) => {
  try {
    await Tipo.findByIdAndDelete(req.params.id);
    res.json({ message: "Tipo eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error eliminando tipo", error });
  }
};
