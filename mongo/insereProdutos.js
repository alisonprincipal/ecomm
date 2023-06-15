/* eslint-disable no-undef */
const produtosJSON = require("./database/produtos.json");

use("ecomm");
const convertendoPrecoProdutos = produtosJSON.map(((produto) => {
  if (produto.preco) {
    produto.preco = NumberDecimal(produto.preco.toFixed(2));
  }
  return produto;
}));

const produtosInseridos = db.products.insertMany(convertendoPrecoProdutos);
console.log(produtosInseridos);
