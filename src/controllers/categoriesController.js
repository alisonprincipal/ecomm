import { ativaCategoriaService } from "../services/categories/ativaCategoriaId.service.js";
import { atualizarCategoriaService } from "../services/categories/atualizarCategoriaId.service.js";
import { criarCategoriaService } from "../services/categories/criarCategoria.service.js";
import { deletaCategoriaService } from "../services/categories/deletaCategoria.service.js";
import { listarCategoriaIdService } from "../services/categories/listarCategoriaId.service.js";
import { listarCategoriasService } from "../services/categories/listarCategories.Service.js";

export class CategorieController {
  static listarCategorias = async (_, res) => {
    const allCategories = await listarCategoriasService();
    res.status(200).json(allCategories);
  };

  static listarCategoriaPorId = async (req, res) => {
    const idCategoria = req.params.id;
    const categoria = await listarCategoriaIdService(idCategoria);
    return res.status(200).json(categoria);
  };

  static criarCategoria = async (req, res) => {
    const bodyCategoria = req.body;
    const categoria = await criarCategoriaService(bodyCategoria);
    return res.status(201).json(categoria);
  };

  static atualizaCategoriaPorId = async (req, res) => {
    const idCategoria = req.params.id;
    const dadosBody = req.body;
    const categoria = await atualizarCategoriaService(idCategoria, dadosBody);
    return res.status(200).json(categoria);
  };

  static ativaCategoriaPorId = async (req, res) => {
    const idCategoria = req.params.id;
    const dadosBody = req.body;
    const ativaCategoria = await ativaCategoriaService(idCategoria, dadosBody);
    return res.status(200).json(ativaCategoria);
  };

  static deletaCategoriaPorId = async (req, res) => {
    const idCategoria = req.params.id;
    await deletaCategoriaService(idCategoria);
    return res.status(204).send();
  };
}
