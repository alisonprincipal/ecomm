/* eslint-disable no-underscore-dangle */
import request from "supertest";
import { app } from "../../../main.js";

describe("Testando metodo DELETE da rota /categories/:id", () => {
  it("Deve deletar um objeto", async () => {
    const todosObjetos = await request(app).get("/categories");
    // verificando se tem algum item no retorno do get
    if (todosObjetos.body.length > 0) {
      const id = todosObjetos.body[0]._id;

      await request(app)
        .delete(`/categories/${id}`)
        .expect(204);
    } else { fail("Nenhum objeto no banco de dados"); }
  });
  it("Deve retornar um 404 para objeto não encontrado", async () => {
    const todosObjetos = await request(app).get("/categories");
    // verificando se tem algum item no retorno do get
    if (todosObjetos.body.length > 0) {
      await request(app)
        .delete(`/categories/649498c8a9346d5e73a01249`)
        .expect(404);
    } else { fail("Nenhum objeto no banco de dados"); }
  });
});
