const produtos = require("./produtos.json")
use("ecomm");

const inserindoProdutos = db.products.insertMany(produtos)
console.log(inserindoProdutos)