/* eslint-disable no-undef */
use("ecomm");
const schemaCategorias = db.runCommand({
  collMod: "categories",
  validator: {
    $jsonSchema: {
      // tipo de dados da minha coleção
      bsonType: "object",
      // impede de adcionar campos além dos validados
      additionalProperties: false,
      // campos que serão validados
      required: ["_id", "nome", "status"],
      properties: {
        _id: {
          bsonType: "objectId",
          description: "informe o id corretamente ",
        },
        nome: {
          bsonType: "string",
          minLength: 3,
          description: "informe o nome corretamente",
        },
        status: {
          bsonType: "string",
          enum: ["ATIVA", "INATIVA"],
          description: "informe o status corretamente",
        },

      },
    },
  },
  // define que os documentos invalidos da aplicação
  // (documentos que foram inseridos antes da validação), possam ser atualizados
  // validationLevel: "moderate",
  // se n for definido um validationLevel o mongoDb define como um strict
  // , ou seja, todos os dados da coleção serão validados, mesmo sendo inseridos antes as validações
  // validationLevel: "strict"

  // permite que o documento seja adicionado, mesmo não estando dentro dos
  // requisitos da validação, mas manda um informativo de erro pro log do mongo
  // validationAction: "warn"

});
console.log(schemaCategorias);
