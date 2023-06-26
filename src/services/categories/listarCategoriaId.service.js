import { categories } from "../../models/Categories.js";

export const listarCategoriaIdService = async (id) => {
  const categoria = await categories.findById(id);
  return categoria;
};
