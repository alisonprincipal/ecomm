/* eslint-disable no-underscore-dangle */
import request from "supertest";
import { app } from "../../../main.js";

describe("Testando metodo PUT da rota /categories/:id", () => {
  it("Deve atualizar um objeto e retornar status 200", async () => {
    const todosObjetos = await request(app).get("/categories");
    // verificando se tem algum item no retorno do get
    if (todosObjetos.body.length > 0) {
      const id = todosObjetos.body[0]._id;

      const atualizandoObjeto = await request(app)
        .put(`/categories/${id}`)
        .send({
          nome: "CATEGORIA TESTE JEST ATUALIZADA",
          status: "ATIVA",
        })
        .expect(200);

      expect(atualizandoObjeto.body).toEqual(expect.objectContaining({
        nome: "CATEGORIA TESTE JEST ATUALIZADA",
        status: "ATIVA",
      }));
    } else { fail("Nenhum objeto no banco de dados"); }
  });

  it("Deve retornar um 404 para objeto não encontrado", async () => {
    const todosObjetos = await request(app).get("/categories");
    // verificando se tem algum item no retorno do get
    if (todosObjetos.body.length > 0) {
      await request(app)
        .put(`/categories/649498c8a9346d5e73a01249`)
        .expect(404);
    } else { fail("Nenhum objeto no banco de dados"); }
  });
});
