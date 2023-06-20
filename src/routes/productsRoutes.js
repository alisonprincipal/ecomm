import express from "express";
import {
  ProductsController,
} from "../controllers/productsController.js";

export const router = express.Router();

export const products = router
  .get("/products", ProductsController.listarProducts)
  .get("/products/:id", ProductsController.listarProductPorId)
  .post("/products", ProductsController.criarProduct)
  .put("/products/:id", ProductsController.atualizaproductPorId)
  .delete("/products/:id", ProductsController.deletaproductPorId);
