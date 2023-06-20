import { categories } from "../../models/Categories.js";

export const atualizarCategoriaService = async (id, body) => {
  const atualizandoCategoria = await categories.findByIdAndUpdate(
    id,
    body,
    { runValidators: true, new: true },
  );
  return atualizandoCategoria;
};
