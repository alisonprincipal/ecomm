import express from "express";
import { ProductsController } from "../controllers/productsController.js";
import { verificaSeProdutoExiste } from "../middlewares/verificaProdutoExiste.js";

export const router = express.Router();

export const products = router
  .get("/products", ProductsController.listarProducts)
  .get("/products/:id", verificaSeProdutoExiste, ProductsController.listarProductPorId)
  .post("/products", ProductsController.criarProduct)
  .put("/products/:id", verificaSeProdutoExiste, ProductsController.atualizaproductPorId)
  .delete("/products/:id", verificaSeProdutoExiste, ProductsController.deletaproductPorId);
