import { products } from "../../models/Products.js";
import { categories } from "../../models/Categories.js";

export const criaProductService = async (body) => {
  const categoryBodyId = body.categoria;
  if (categoryBodyId) {
    const validateCategory = await categories.findById(categoryBodyId);
    if (!validateCategory) {
      throw new Error("Category not found");
    }
  }
  const novoProduct = await products.create(body);
  return novoProduct;
};
