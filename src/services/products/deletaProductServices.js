import { products } from "../../models/Products.js";

export const deletaProductService = async (id) => {
  const product = await products.findByIdAndDelete(id);
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};
