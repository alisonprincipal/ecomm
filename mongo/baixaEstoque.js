use('ecomm')
const buscandoProduto = db.products.findOne({
    nome: "Galaxy Tab S8"
})
const quantidadePedido = 2
console.log(buscandoProduto._id)

const atualizandoProduto = () => {
    const produto = db.products.updateOne({
        _id: buscandoProduto._id,
        estoque: {
            // garantindo que seja maior que a quantidade do pedido
            $gt: quantidadePedido
        }
    }, {
        // incrementando no total do estoque
        $inc: {
            estoque: -quantidadePedido
        },
    })
    console.log(produto)
}
atualizandoProduto()