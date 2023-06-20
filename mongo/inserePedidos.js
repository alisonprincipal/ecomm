/* eslint-disable no-undef */
use("ecomm");
// ao rodar esse comando, permite ter acesso detalhada aos erros do jsonSchema
config.set("inspectDepth", 100);

try {
  const inserindoPedidos = db.orders.insertMany([{
    dataPedido: new Date(),
    account: {
      accountId: ObjectId("647f6f08228f3c3d6a8376eb"),
      nomeConta: "usuario2",
    },
    enderecoEntrega: {
      bairro: "magnolia2",
      rua: "rua do Ó 2",
      numero: "PINTO2",
      complemento: null,
      cep: "58706000",
      cidade: "lugar nenhum2",
      uf: "LN",
    },
    pedido: [{
      productId: ObjectId("6479024bcf522fb0b46365ec"),
      quantidade: 1,
      desconto: 50,
      precoUnitario: 999,
    }],
  },
  {
    dataPedido: new Date(),
    account: {
      accountId: ObjectId("647f6f08228f3c3d6a8376eb"),
      nomeConta: "usuario2",
    },
    enderecoEntrega: {
      bairro: "magnolia3",
      rua: "rua do Ó 3",
      numero: "PINTO2",
      complemento: null,
      cep: "58706000",
      cidade: "lugar nenhum3",
      uf: "LN",
    },
    pedido: [{
      productId: ObjectId("6479024bcf522fb0b46365ec"),
      quantidade: 1,
      desconto: 50,
      precoUnitario: 999,
    }],
  },
  ]);
  console.log(inserindoPedidos);
} catch (error) {
  console.log(error);
  console.log("CAIU AQUI");
}
