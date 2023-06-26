import { AppError } from "../erros.js";
import { categories } from "../models/Categories.js";

export const verificaSeCategoriaExiste = async (req, res, next) => {
  const { id } = req.params;

  const categoria = await categories.findById(id);
  if (!categoria) {
    throw new AppError("Category not found", 404);
  }
  return next();
};
