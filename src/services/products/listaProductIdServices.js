import { products } from "../../models/Products.js";

export const listaProductIdService = async (id) => {
  const product = await products.findById(id).populate("categoria", "nome");
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};
