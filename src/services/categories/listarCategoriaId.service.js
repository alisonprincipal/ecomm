import { categories } from "../../models/Categories.js";

export const listarCategoriaIdService = async (id) => {
  const categoria = await categories.findById(id);
  if (!categoria) {
    throw new Error("Category not found");
  }
  return categoria;
};
