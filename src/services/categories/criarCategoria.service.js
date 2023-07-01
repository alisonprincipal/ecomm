import { categories } from "../../models/Categories.js";

export const criarCategoriaService = async (body) => {
  const novaCategoria = await categories.create(body);
  return novaCategoria;
};
