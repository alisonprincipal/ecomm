/* eslint-disable no-undef */
use("ecomm");
const filtrandoProdutos = db.products.updateMany({ categoria: "LIVROS" }, { $set: { estoque: 0 } });
console.log(filtrandoProdutos);
