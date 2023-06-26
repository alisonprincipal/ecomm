import { products } from "../../models/Products.js";
import { categories } from "../../models/Categories.js";
import { AppError } from "../../erros.js";

export const atualizaProductService = async (id, body) => {
  const categoryBodyId = body.categoria;
  if (categoryBodyId) {
    const validateCategory = await categories.findById(categoryBodyId);
    if (!validateCategory) {
      throw new AppError("Category not found", 404);
    }
  }
  const product = await products.findByIdAndUpdate(id, body, { new: true });
  if (!product) {
    throw new AppError("Product not found", 404);
  }
  return product;
};
