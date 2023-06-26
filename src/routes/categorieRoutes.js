import express from "express";
import {
  CategorieController,
} from "../controllers/categoriesController.js";
import { verificaSeCategoriaExiste } from "../middlewares/verificaCategoriaExiste.js";

export const router = express.Router();

export const categories = router
  .get("/categories", CategorieController.listarCategorias)
  .get("/categories/:id", verificaSeCategoriaExiste, CategorieController.listarCategoriaPorId)
  .post("/categories", CategorieController.criarCategoria)
  .put("/categories/:id", verificaSeCategoriaExiste, CategorieController.atualizaCategoriaPorId)
  .patch("/categories/active/:id", verificaSeCategoriaExiste, CategorieController.ativaCategoriaPorId)
  .delete("/categories/:id", verificaSeCategoriaExiste, CategorieController.deletaCategoriaPorId);
