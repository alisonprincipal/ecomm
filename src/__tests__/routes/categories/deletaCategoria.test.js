import request from "supertest";
import { app } from "../../../main.js";

describe("Testando metodo DELETE da rota /categories/:id", () => {
  test("Deve deletar um objeto", async () => {
    const novaTecnologia = await request(app)
      .post("/categories")
      .send({
        nome: "CATEGORIA TESTE PARA DELETAR",
        status: "ATIVA",
      });

    const id = novaTecnologia.body._id;
    await request(app)
      .delete(`/categories/${id}`)
      .expect(204);
  });
  test("Deve retornar um 404 para objeto não encontrado", async () => {
    await request(app)
      .delete(`/categories/649498c8a9346d5e73a01249`)
      .expect(404);
  });
});
