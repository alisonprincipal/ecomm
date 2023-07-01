import { categories } from "../../models/Categories.js";

export const deletaCategoriaService = async (id) => {
  const categoria = await categories.findByIdAndDelete(id);
  if (!categoria) {
    throw new Error("Category not found");
  }
  return categoria;
};
