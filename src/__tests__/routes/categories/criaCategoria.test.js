import request from "supertest";
import { app } from "../../../main.js";
import { deletaDadosTesteCategoria } from "../../../_dadosTeste_/deletaDados.js";

describe("Testando metodo POST da rota /categories", () => {
  test("Deve cadastrar um objeto e retornar status 201", async () => {
    const objetoRetorno = {
      nome: "CATEGORIA TESTE JEST",
      status: "ATIVA",
      _id: expect.any(String),
    };
    const cadastro = await request(app)
      .post("/categories")
      .send({
        nome: "CATEGORIA TESTE JEST",
        status: "ATIVA",
      })
      .expect(201);

    expect(cadastro.body).toEqual(expect.objectContaining(objetoRetorno));

    await deletaDadosTesteCategoria(cadastro.body._id);
  });

  test("Deve retornar status 409 se não for passada as chaves obrigatórias", async () => {
    await request(app)
      .post("/categories")
      .send({})
      .expect(409);
  });
});
