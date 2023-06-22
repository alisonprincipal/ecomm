/* eslint-disable no-underscore-dangle */
import request from "supertest";
import { app } from "../../../main.js";

describe("Testando metodo PATCH da rota /categories/:id", () => {
  it("Deve retornar um 409 ao tentar ativar um objeto com status ativo", async () => {
    const todosObjetos = await request(app).get("/categories");
    // verificando se tem algum item no retorno do get
    if (todosObjetos.body.length > 0 && todosObjetos.body[0].status == "ATIVA") {
      const id = todosObjetos.body[0]._id;
      await request(app)
        .patch(`/categories/active/${id}`)
        .send({
          status: "ATIVA",
        })
        .expect(409);
    } else { fail("Nenhum objeto no banco de dados"); }
  });

  it("Deve ativar um objeto e retornar status 200", async () => {
    const todosObjetos = await request(app).get("/categories");
    if (todosObjetos.body.length > 0) {
      // busco o ultimo elemento que cadastrei no bando de dados como status 'INATIVA'
      const id = todosObjetos.body[(todosObjetos.body.length) - 1]._id;
      console.log(id);
      const objetoAtualizado = await request(app)
        .patch(`/categories/active/${id}`)
        .send({
          status: "ATIVA",
        })
        .expect(200);

      expect(objetoAtualizado.body.status).toBe("ATIVA");
    } else { fail("Nenhum objeto no banco de dados"); }
  });

  it("Deve retornar um 404 para objeto não encontrado", async () => {
    const todosObjetos = await request(app).get("/categories");
    // verificando se tem algum item no retorno do get
    if (todosObjetos.body.length > 0) {
      await request(app)
        .patch(`/categories/active/649498c8a9346d5e73a01249`)
        .expect(404);
    } else { fail("Nenhum objeto no banco de dados"); }
  });
});
