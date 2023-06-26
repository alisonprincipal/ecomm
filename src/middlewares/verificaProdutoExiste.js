import { AppError } from "../erros.js";
import { products } from "../models/Products.js";

export const verificaSeProdutoExiste = async (req, res, next) => {
  const { id } = req.params;
  const Produto = await products.findById(id);
  if (!Produto) {
    throw new AppError("Product not found", 404);
  }
  return next();
};
