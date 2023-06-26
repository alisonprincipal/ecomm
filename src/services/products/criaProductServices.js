import { products } from "../../models/Products.js";
import { categories } from "../../models/Categories.js";
import { AppError } from "../../erros.js";

export const criaProductService = async (body) => {
  const categoryBodyId = body.categoria;
  if (categoryBodyId) {
    const validateCategory = await categories.findById(categoryBodyId);
    if (!validateCategory) {
      throw new AppError("Category not found", 404);
    }
  }
  const novoProduct = await products.create(body);
  return novoProduct;
};
