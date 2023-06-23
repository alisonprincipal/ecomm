/* eslint-disable no-underscore-dangle */

import request from "supertest";
import { app } from "../../../main.js";
import { deletaDadosTesteCategoria } from "../../../_dadosTeste_/deletaDados.js";

describe("Testando metodo GET da rota /categories/:id", () => {
  test("Deve retornar um objeto", async () => {
    const cadastro = await request(app)
      .post("/categories")
      .send({
        nome: "CATEGORIA POR ID",
        status: "ATIVA",
      })
      .expect(201);
    const id = await cadastro.body._id;
    const response = await request(app)
      .get(`/categories/${id}`)
      .expect(200);

    expect(response.body).toEqual(cadastro.body);

    await deletaDadosTesteCategoria(id);
  });
  test("Deve retornar um 404 para item não encontrado", async () => {
    await request(app)
      .get(`/categories/649498c8a9346d5e73a01249`)
      .expect(404);
  });
});
