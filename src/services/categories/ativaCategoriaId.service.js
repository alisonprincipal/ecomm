import { categories } from "../../models/Categories.js";

export const ativaCategoriaService = async (id, body) => {
  const verificaStatusAtual = await categories.findById(id);
  if (verificaStatusAtual.status == "ATIVA") {
    throw new Error("Categorie is active");
  }

  const atualizandoCategoria = await categories.findByIdAndUpdate(
    id,
    body,
    { runValidators: true, new: true },
  );
  return atualizandoCategoria;
};
