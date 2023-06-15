/* eslint-disable no-undef */
use("ecomm");
const filtrandoProdutos = db.products.find({ $or: [{ categoria: "LIVROS" }, { categoria: "CELULARES" }] });
console.log(filtrandoProdutos);
