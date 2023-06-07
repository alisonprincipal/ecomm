use('ecomm')

const newCollection = db.createCollection("orders", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            "additionalProperties": false,
            required: ["_id", "dataPedido", "account", "enderecoEntrega", "pedido"],
            properties: {
                _id: {
                    bsonType: "objectId",
                },
                dataPedido: {
                    bsonType: "date",
                    description: "informe corretamente a data do pedido"
                },
                account: {
                    bsonType: "object",
                    required: ["accountId", "nomeConta"],
                    properties: {
                        accountId: {
                            bsonType: ["objectId", "string", "int"],
                        },
                        nomeConta: {
                            bsonType: "string",
                        },
                    },
                    description: "informe corretamente os dados  da conta"
                },
                enderecoEntrega: {
                    bsonType: "object",
                    required: ["bairro", "rua", "numero", "complemento", "cep", "cidade", "uf"],
                    properties: {
                        bairro: {
                            bsonType: "string",
                            minLength: 1,
                            description: "informe corretamente o bairro do endereço"
                        },
                        rua: {
                            bsonType: "string",
                            minLength: 1,
                            description: "informe corretamente a rua do endereço"
                        },
                        numero: {
                            bsonType: "string",
                            minLength: 1,
                            description: "informe corretamento o numero do endereço"
                        },
                        complemento: {
                            bsonType: ["string", "null"],
                            description: "informe corretamento o complemento do endereço"
                        },
                        cep: {
                            bsonType: "string",
                            minLength: 8,
                            maxLength: 8,
                            description: "informe corretamento o cep do endereço"
                        },
                        cidade: {
                            bsonType: "string",
                            minLength: 5,
                            description: "informe corretamento a cidade do endereço"
                        },
                        uf: {
                            bsonType: "string",
                            minLength: 2,
                            maxLength: 2,
                            description: "informe corretamento a UF do endereço"
                        },
                    },
                },
                pedido: {
                    bsonType: "array",
                    minItems: 1,
                    required: ["producId", "quantidade", "precoUnitario"],
                    properties: {
                        producId: {
                            bsonType: ["objectId", "string", "int"],
                        },
                        quantidade: {
                            bsonType: "int",
                            minimum: 1,
                            description: "informe corretamente o a quantidade do produto"
                        },
                        desconto: {
                            bsonType: "int",
                            minimum: 0,
                            exclusiveMinimum: true,
                            description: "informe corretamente o desconto do produto"
                        },
                        precoUnitario: {
                            bsonType: "int",
                            minimum: 0,
                            exclusiveMinimum: true,
                            description: "informe corretamente o precoUnitario do produto"
                        },
                    },
                    description: "informe corretamente o bairro do endereço"
                },
            }
        }
    }
})
console.log(newCollection)