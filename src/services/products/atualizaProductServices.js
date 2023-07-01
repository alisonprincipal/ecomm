import { products } from "../../models/Products.js";
import { categories } from "../../models/Categories.js";

export const atualizaProductService = async (id, body) => {
  const categoryBodyId = body.categoria;
  if (categoryBodyId) {
    const validateCategory = await categories.findById(categoryBodyId);
    if (!validateCategory) {
      throw new Error("Category not found");
    }
  }
  const product = await products.findByIdAndUpdate(id, body, { new: true });
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};
