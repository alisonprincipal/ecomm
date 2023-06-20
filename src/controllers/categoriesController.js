import {
  categories,
} from "../models/Categories.js";
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
      if (categoria) {
        res.status(200).json(categoria);
      } else {
        res.status(404).json({ message: "Not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  static criarCategoria = async (req, res) => {
    try {
      const bodyCategoria = req.body;
      const categoria = await criarCategoriaService(bodyCategoria);
      res.status(201).json(categoria);
    } catch (error) {
      if (error.name == "ValidationError") {
        res.status(409).json({ message: error.message });
      }
      res.status(500).json({ message: error.message });
    }
  };

  static atualizaCategoriaPorId = async (req, res) => {
    try {
      const idCategoria = req.params.id;
      const dadosBody = req.body;
      const categoria = await atualizarCategoriaService(idCategoria, dadosBody);
      if (categoria) {
        res.status(200).json(categoria);
      } else {
        res.status(404).json({ message: "Not found" });
      }
    } catch (error) {
      if (error.name == "ValidationError") {
        res.status(409).json({ message: error.message });
      }
      res.status(500).json({ message: error.message });
    }
  };

  static ativaCategoriaPorId = async (req, res) => {
    try {
      const idCategoria = req.params.id;
      const dadosBody = req.body;
      const ativaCategoria = await ativaCategoriaService(idCategoria, dadosBody);
      if (!ativaCategoria) {
        return res.status(404).json({ message: "Not found" });
      }
      if (ativaCategoria == "ATIVA") {
        return res.status(400).json({ message: "Categorie is active" });
      }
      res.status(200).json(ativaCategoria);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    return "";
  };

  static deletaCategoriaPorId = async (req, res) => {
    try {
      const idCategoria = req.params.id;
      const deletaCategoria = await deletaCategoriaService(idCategoria);
      return deletaCategoria ? res.status(204).send() : res.status(404).json({ message: "Not found" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    return "";
  };
}
