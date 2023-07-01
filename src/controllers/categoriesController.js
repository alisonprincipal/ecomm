import { ativaCategoriaService } from "../services/categories/ativaCategoriaId.service.js";
import { atualizarCategoriaService } from "../services/categories/atualizarCategoriaId.service.js";
import { criarCategoriaService } from "../services/categories/criarCategoria.service.js";
import { deletaCategoriaService } from "../services/categories/deletaCategoria.service.js";
import { listarCategoriaIdService } from "../services/categories/listarCategoriaId.service.js";
import { listarCategoriasService } from "../services/categories/listarCategories.Service.js";

export class CategorieController {
  static listarCategorias = async (_, res) => {
    try {
      const allCategories = await listarCategoriasService();
      res.status(200).json(allCategories);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  static listarCategoriaPorId = async (req, res) => {
    try {
      const idCategoria = req.params.id;
      const categoria = await listarCategoriaIdService(idCategoria);
      return res.status(200).json(categoria);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: error.message });
    }
  };

  static criarCategoria = async (req, res) => {
    try {
      const bodyCategoria = req.body;
      const categoria = await criarCategoriaService(bodyCategoria);
      return res.status(201).json(categoria);
    } catch (error) {
      if (error.name == "ValidationError") {
        return res.status(409).json({ message: error.message });
      }
      return res.status(500).json({ message: error.message });
    }
  };

  static atualizaCategoriaPorId = async (req, res) => {
    try {
      const idCategoria = req.params.id;
      const dadosBody = req.body;
      const categoria = await atualizarCategoriaService(idCategoria, dadosBody);
      return res.status(200).json(categoria);
    } catch (error) {
      if (error.message == "Category  not found") {
        return res.status(404).json({ message: error.message });
      }
      if (error.name == "ValidationError") {
        return res.status(409).json({ message: error.message });
      }
      return res.status(500).json({ message: error.message });
    }
  };

  static ativaCategoriaPorId = async (req, res) => {
    try {
      const idCategoria = req.params.id;
      const dadosBody = req.body;
      const ativaCategoria = await ativaCategoriaService(idCategoria, dadosBody);
      return res.status(200).json(ativaCategoria);
    } catch (error) {
      if (error.message == "Category not found") {
        return res.status(404).json({ message: error.message });
      }
      if (error instanceof Error) {
        return res.status(409).json({ message: error.message });
      }
      return res.status(500).json({ message: error.message });
    }
  };

  static deletaCategoriaPorId = async (req, res) => {
    try {
      const idCategoria = req.params.id;
      await deletaCategoriaService(idCategoria);
      return res.status(204).send();
    } catch (error) {
      if (error instanceof Error) {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: error.message });
    }
  };
}
