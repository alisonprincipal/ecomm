import { products } from "../../models/Products.js";

export const listaProductsService = async () => {
  const allproducts = await products.find().populate("categoria", "nome");
  return allproducts;
};
