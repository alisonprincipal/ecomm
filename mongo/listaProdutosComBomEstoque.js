/* eslint-disable no-undef */
use("ecomm");
const filtrandoProdutos = db.products.find({
  estoque: {
    $gte: 3,
  },
}, {
  nome: 1,
  estoque: 1,
  id: 1,
});
console.log(filtrandoProdutos);
