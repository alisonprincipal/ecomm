use("ecomm");
// ao rodar esse comando, permite ter acesso detalhada aos erros do jsonSchema
config.set('inspectDepth', 100)


const inserindoDadosConta = () => {
    try {
        const inserindoContas = db.accounts.insertMany([{
                nome: "usuario1",
                email: "usuario1@mail.com",
                senha: "123456",
                dataCriacao: new Date,
                cpf: "40028922921",
                telefone: "66988776655",
                endereco: {
                    bairro: "magnolia1",
                    rua: "rua do Ó 1",
                    numero: "PINTO1",
                    complemento: "dentro do buraco1",
                    cep: "58706000",
                    cidade: "lugar nenhum1",
                    uf: "LN"
                }
            },
            {
                nome: "usuario2",
                email: "usuario2@mail.com",
                senha: "223456",
                dataCriacao: new Date,
                cpf: "40028922922",
                telefone: "66988776655",
                endereco: {
                    bairro: "magnolia2",
                    rua: "rua do Ó 2",
                    numero: "PINTO2",
                    complemento: null,
                    cep: "58706000",
                    cidade: "lugar nenhum2",
                    uf: "LN"
                }
            },
            {
                nome: "usuario3",
                email: "usuario3@mail.com",
                senha: "323456",
                dataCriacao: new Date,
                cpf: "40028922923",
                telefone: "66988776655",
                endereco: {
                    bairro: "magnolia3",
                    rua: "rua do Ó 3",
                    numero: "PINTO3",
                    complemento: "dentro do buraco3",
                    cep: "58706000",
                    cidade: "lugar nenhum3",
                    uf: "LN"
                }
            },
        ])
        console.log(inserindoContas)
    } catch (error) {
        console.log(error)
    }
}
// inserindoDadosConta()

const inserindoDadosAposModificacaoSchema = () => {
    try {
        const inserindoContas = db.accounts.insertOne({
            nome: "usuario1",
            email: "usuarioEDITADO@mail.com",
            senha: "123456BB",
            dataCriacao: new Date,
            cpf: "40028922926",
            telefone: "66988776688",
            endereco: {
                bairro: "magnolia1",
                rua: "rua do Ó 1",
                numero: "S/N",
                complemento: "dentro do buraco1",
                cep: "58706000",
                cidade: "lugar nenhum1",
                uf: "PB"
            }
        }, )
        console.log(inserindoContas)
    } catch (error) {
        console.log(error)
    }
}
inserindoDadosAposModificacaoSchema()