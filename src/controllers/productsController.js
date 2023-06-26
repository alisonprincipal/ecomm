import { listaProductsService } from "../services/products/listaProductsServices.js";
import { listaProductIdService } from "../services/products/listaProductIdServices.js";
import { criaProductService } from "../services/products/criaProductServices.js";
import { atualizaProductService } from "../services/products/atualizaProductServices.js";
import { deletaProductService } from "../services/products/deletaProductServices.js";

export class ProductsController {
  static listarProducts = async (_, res) => {
    const allproducts = await listaProductsService();
    res.status(200).json(allproducts);
  };

  static listarProductPorId = async (req, res) => {
    const idProduct = req.params.id;
    const product = await listaProductIdService(idProduct);
    return res.status(200).json(product);
  };

  static criarProduct = async (req, res) => {
    const bodyProduct = req.body;
    const product = await criaProductService(bodyProduct);
    return res.status(201).json(product);
  };

  static atualizaproductPorId = async (req, res) => {
    const idProduct = req.params.id;
    const dadosBody = req.body;
    const product = await atualizaProductService(idProduct, dadosBody);
    return res.status(200).json(product);
  };

  static deletaproductPorId = async (req, res) => {
    const idproduct = req.params.id;
    await deletaProductService(idproduct);
    return res.status(204).send();
  };
}
