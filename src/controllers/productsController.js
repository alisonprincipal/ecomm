import {
  products,
} from "../models/Products.js";
import { categories } from "../models/Categories.js";

export class ProductsController {
  static listarProducts = async (_, res) => {
    try {
      const allproducts = await products.find().populate("categoria", "nome");
      res.status(200).json(allproducts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  static listarProductPorId = async (req, res) => {
    try {
      const idProduct = req.params.id;
      const product = await products.findById(idProduct).populate("categoria", "nome");
      return product ? res.status(200).json(product) : res.status(404).json({ message: "Not found" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    return "";
  };

  static criarProduct = async (req, res) => {
    try {
      const bodyProduct = req.body;
      const categoryBodyId = req.body.categoria;
      if (categoryBodyId) {
        const validateCategory = await categories.findById(categoryBodyId);
        if (!validateCategory) {
          return res.status(409).json({ message: "Category is Invalid" });
        }
      }

      const product = await products.create(bodyProduct);
      res.status(201).json(product);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }

    return "";
  };

  static atualizaproductPorId = async (req, res) => {
    try {
      const idProduct = req.params.id;
      const dadosBody = req.body;
      const Product = await products.findByIdAndUpdate(idProduct, dadosBody, { new: true });
      return Product ? res.status(200).json(Product) : res.status(404).json({ message: "Not found" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    return "";
  };

  static deletaproductPorId = async (req, res) => {
    try {
      const idproduct = req.params.id;
      const product = await products.findByIdAndDelete(idproduct);
      return product ? res.status(204).send() : res.status(404).json({ message: "Not found" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    return "";
  };
}
