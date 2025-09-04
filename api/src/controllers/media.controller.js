import Media from "../models/media.model.js";

export const crearMedia = async (req, res) => {
  try {
    const media = new Media(req.body);
    await media.save();
    res.status(201).json(media);
  } catch (error) {
    res.status(500).json({ message: "Error creando media", error });
  }
};

export const obtenerMedias = async (req, res) => {
  try {
    const medias = await Media.find()
      .populate("genero")
      .populate("director")
      .populate("productora")
      .populate("tipo");
    res.json(medias);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo medias", error });
  }
};

export const actualizarMedia = async (req, res) => {
  try {
    const media = await Media.findByIdAndUpdate(
      req.params.id,
      { ...req.body, fechaActualizacion: Date.now() },
      { new: true }
    );
    res.json(media);
  } catch (error) {
    res.status(500).json({ message: "Error actualizando media", error });
  }
};

export const eliminarMedia = async (req, res) => {
  try {
    await Media.findByIdAndDelete(req.params.id);
    res.json({ message: "Media eliminada" });
  } catch (error) {
    res.status(500).json({ message: "Error eliminando media", error });
  }
};
