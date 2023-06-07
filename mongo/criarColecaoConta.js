use('ecomm')

const newCollection = db.createCollection("accounts", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["_id", "nome", "email", "senha", "dataCriacao", "cpf", "telefone", "endereco"],
            properties: {
                _id: {
                    bsonType: "objectId",
                },
                nome: {
                    bsonType: "string",
                    minLength: 5,
                    description: "informe corretamente o nome da conta"
                },
                email: {
                    bsonType: "string",
                    minLength: 5,
                    description: "informe corretamente o email da conta"
                },
                senha: {
                    bsonType: "string",
                    minLength: 5,
                    description: "informe corretamente a senha da conta"
                },
                dataCriacao: {
                    bsonType: "date",
                    description: "informe corretamente a data da conta"
                },
                cpf: {
                    bsonType: "string",
                    minLength: 11,
                    maxLength: 11,
                    description: "informe corretamente o cpf da conta"
                },
                telefone: {
                    bsonType: "string",
                    minLength: 10,
                    description: "informe corretamente o telefone da conta"
                },
                endereco: {
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
            }
        }
    }
})
console.log(newCollection)