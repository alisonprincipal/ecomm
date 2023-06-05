use('ecomm')
const schemaProdutos = db.runCommand({
    collMod: "products",
    validator: {
        $jsonSchema: {
            //tipo de dados da minha coleção
            bsonType: "object",
            // impede de adcionar campos além dos validados
            "additionalProperties": false,
            // campos que serão validados
            required: ["_id", "nome", "descricao", "slug", "preco", "estoque", "categoria"],
            properties: {
                _id: {
                    bsonType: "objectId",
                    description: "informe o id corretamente "
                },
                nome: {
                    bsonType: "string",
                    minLength: 5,
                    description: "informe o nome corretamente"
                },
                descricao: {
                    bsonType: "string",
                    minLength: 10,
                    description: "informe a descricao corretamente"
                },
                slug: {
                    bsonType: "string",
                    minLength: 5,
                    description: "informe o slug corretamente"
                },
                preco: {
                    bsonType: "decimal",
                    minimum: 0,
                    description: "informe o preco corretamente"
                },
                estoque: {
                    bsonType: "int",
                    minimum: 0,
                    description: "informe o estoque corretamente"
                },
                categoria: {
                    bsonType: "string",
                    enum: ["AUTOMOTIVA", "CELULARES", "INFORMÁTICA", "LIVROS", "MÓVEIS"],
                    description: "informe a categoria corretamente"
                },

            }
        }
    },
})
console.log(schemaProdutos)