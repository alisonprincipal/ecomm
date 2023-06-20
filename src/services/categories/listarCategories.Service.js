import { categories } from "../../models/Categories.js";

export const listarCategoriasService = async () => {
  const allCategories = await categories.find();
  return allCategories;
};
