import {
  categories,
} from "../models/Categories.js";

export class CategorieController {
  static listarCategorias = async (_, res) => {
    try {
      const allCategories = await categories.find();
      res.status(200).json(allCategories);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  static listarCategoriaPorId = async (req, res) => {
    try {
      const idCategoria = req.params.id;
      const categoria = await categories.findById(idCategoria);
      return categoria ? res.status(200).json(categoria) : res.status(404).json({ message: "Not found" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    return "";
  };

  static criarCategoria = async (req, res) => {
    try {
      const bodyCategoria = req.body;
      const categoria = await categories.create(bodyCategoria);
      res.status(201).json(categoria);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };
}
