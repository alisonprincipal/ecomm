import { products } from "../../models/Products.js";

export const listaProductIdService = async (id) => {
  const product = await products.findById(id).populate("categoria", "nome");
  return product;
};
