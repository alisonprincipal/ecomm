import { AppError } from "../../erros.js";
import { products } from "../../models/Products.js";

export const deletaProductService = async (id) => {
  const product = await products.findByIdAndDelete(id);
  if (!product) {
    throw new AppError("Product not found", 404);
  }
  return product;
};
