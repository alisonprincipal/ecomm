/* eslint-disable no-undef */
use("ecomm");
const buscandoProduto = db.products.findOne({
  nome: "Galaxy Tab S8",
});

const quantidadePedido = 2;
const atualizandoProduto = () => {
  const produto = db.products.updateOne({
    // eslint-disable-next-line no-underscore-dangle
    _id: buscandoProduto._id,
    estoque: {
      // garantindo que seja maior que a quantidade do pedido
      $gt: quantidadePedido,
    },
  }, {
    // incrementando no total do estoque
    $inc: {
      estoque: -quantidadePedido,
    },
  });
  console.log(produto);
};
// só executo a função se o produto da pesquisa for encontrado
// eslint-disable-next-line no-unused-expressions
buscandoProduto && atualizandoProduto();
