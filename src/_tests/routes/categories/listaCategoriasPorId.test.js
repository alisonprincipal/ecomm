/* eslint-disable no-underscore-dangle */
import request from "supertest";
import { app } from "../../../main.js";

describe("Testando metodo GET da rota /categories/:id", () => {
  it("Deve retornar um objeto", async () => {
    const todosObjetos = await request(app).get("/categories");
    // verificando se tem algum item no retorno do get
    if (todosObjetos.body.length > 0) {
      const id = todosObjetos.body[0]._id;

      const response = await request(app)
        .get(`/categories/${id}`)
        .expect(200);

      expect(response.body).toEqual(todosObjetos.body[0]);
    } else { fail("Nenhum objeto no banco de dados"); }
  });
  it("Deve retornar um 404 para item não encontrado", async () => {
    const todosObjetos = await request(app).get("/categories");
    // verificando se tem algum item no retorno do get
    if (todosObjetos.body.length > 0) {
      await request(app)
        .get(`/categories/649498c8a9346d5e73a01249`)
        .expect(404);
    } else { fail("Nenhum objeto no banco de dados"); }
  });
});
