import { listaProductsService } from "../services/products/listaProductsServices.js";
import { listaProductIdService } from "../services/products/listaProductIdServices.js";
import { criaProductService } from "../services/products/criaProductServices.js";
import { atualizaProductService } from "../services/products/atualizaProductServices.js";
import { deletaProductService } from "../services/products/deletaProductServices.js";

export class ProductsController {
  static listarProducts = async (_, res) => {
    try {
      const allproducts = await listaProductsService();
      res.status(200).json(allproducts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  static listarProductPorId = async (req, res) => {
    try {
      const idProduct = req.params.id;
      const product = await listaProductIdService(idProduct);
      return res.status(200).json(product);
    } catch (error) {
      if (error.message == "Product not found") {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: error.message });
    }
  };

  static criarProduct = async (req, res) => {
    try {
      const bodyProduct = req.body;
      const product = await criaProductService(bodyProduct);
      return res.status(201).json(product);
    } catch (error) {
      if (error.name == "ValidationError") {
        return res.status(409).json({ message: error.message });
      }

      if (error instanceof Error) {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: error.message });
    }
  };

  static atualizaproductPorId = async (req, res) => {
    try {
      const idProduct = req.params.id;
      const dadosBody = req.body;
      const product = await atualizaProductService(idProduct, dadosBody);
      return res.status(200).json(product);
    } catch (error) {
      if (error.message == "Product not found") {
        return res.status(404).json({ message: error.message });
      }
      if (error instanceof Error) {
        return res.status(409).json({ message: error.message });
      }
      return res.status(500).json({ message: error.message });
    }
  };

  static deletaproductPorId = async (req, res) => {
    try {
      const idproduct = req.params.id;
      await deletaProductService(idproduct);
      return res.status(204).send();
    } catch (error) {
      if (error instanceof Error) {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: error.message });
    }
  };
}
