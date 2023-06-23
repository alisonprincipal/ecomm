/* eslint-disable no-underscore-dangle */
import request from "supertest";
import { app } from "../../../main.js";
import { deletaDadosTesteCategoria } from "../../../_dadosTeste_/deletaDados.js";

describe("Testando metodo PUT da rota /categories/:id", () => {
  test("Deve atualizar um objeto e retornar status 200", async () => {
    const novaTecnologia = await request(app)
      .post("/categories")
      .send({
        nome: "CATEGORIA TESTE PARA ATUALIZAR",
        status: "ATIVA",
      });

    const id = novaTecnologia.body._id;
    const atualizandoObjeto = await request(app)
      .put(`/categories/${id}`)
      .send({
        nome: "CATEGORIA ATUALIZADA",
        status: "INATIVA",
      })
      .expect(200);

    expect(atualizandoObjeto.body).toEqual(expect.objectContaining({
      nome: "CATEGORIA ATUALIZADA",
      status: "INATIVA",
    }));
    await deletaDadosTesteCategoria(id);
  });

  test("Deve retornar um 404 para objeto não encontrado", async () => {
    await request(app)
      .put(`/categories/649498c8a9346d5e73a01249`)
      .expect(404);
  });
});
