use('ecomm')

const usuario = db.accounts.findOne({
    nome: 'usuario3'
})

const teste = () => {
    const estatistica = db.orders.aggregate([

        // uso o match para fazer o filtro e retornar somente os elementos da minha condicional
        // para acessar uma propriedade do tipo object é preciso acessar utilizando aspas para que seja reconhecido
        {
            $match: {
                "account.accountId": usuario._id
            }
        },
        {
            $group: {
                _id: usuario._id,
                total_pedidos: {
                    $sum: {
                        $sum: "$pedido.quantidade"
                    }
                },
                montante_total_sem_desconto: {
                    $sum: {
                        // faço a soma do resultado do multiply
                        $sum: {
                            $map: {
                                input: "$pedido",
                                as: "pedido",
                                in: {
                                    // pego a quantidade de produtos e mutiplico pelo valor do produto
                                    $multiply: ["$$pedido.quantidade", "$$pedido.precoUnitario"]
                                }
                            }
                        }
                    }
                },
                montante_total_desconto: {
                    $sum: {
                        $sum: "$pedido.desconto"
                    }
                }
            }
        },
        {
            $addFields: {
                nome_usuario: usuario.nome
            }
        }
    ]).pretty()
    console.log(estatistica)
}
usuario && teste()