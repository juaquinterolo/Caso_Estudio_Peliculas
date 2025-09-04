import Director from "../models/director.model.js";

// Crear un director
export const crearDirector = async (req, res) => {
  try {
    const director = new Director(req.body);
    await director.save();
    res.status(201).json(director);
  } catch (error) {
    res.status(500).json({ message: "Error creando director", error });
  }
};

// Obtener todos los directores
export const obtenerDirectores = async (req, res) => {
  try {
    const directores = await Director.find();
    res.json(directores);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo directores", error });
  }
};

// Actualizar un director
export const actualizarDirector = async (req, res) => {
  try {
    const director = await Director.findByIdAndUpdate(
      req.params.id,
      { ...req.body, fechaActualizacion: Date.now() },
      { new: true }
    );
    res.json(director);
  } catch (error) {
    res.status(500).json({ message: "Error actualizando director", error });
  }
};

// Eliminar un director
export const eliminarDirector = async (req, res) => {
  try {
    await Director.findByIdAndDelete(req.params.id);
    res.json({ message: "Director eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error eliminando director", error });
  }
};