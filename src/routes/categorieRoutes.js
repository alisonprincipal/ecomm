import express from "express";
import {
  CategorieController,
} from "../controllers/categoriesController.js";

export const router = express.Router();

export const categories = router
  .get("/categories", CategorieController.listarCategorias)
  .get("/categories/:id", CategorieController.listarCategoriaPorId)
  .post("/categories", CategorieController.criarCategoria);
