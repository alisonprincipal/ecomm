import { categories } from "../../models/Categories.js";

export const ativaCategoriaService = async (id, body) => {
  const verificaStatusAtual = await categories.findById(id);
  if (!verificaStatusAtual) {
    return false;
  }
  if (verificaStatusAtual.status == "ATIVA") {
    return "ATIVA";
  }

  const atualizandoCategoria = await categories.findByIdAndUpdate(
    id,
    body,
    { runValidators: true, new: true },
  );
  return atualizandoCategoria;
};
