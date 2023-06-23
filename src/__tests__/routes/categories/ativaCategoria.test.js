import request from "supertest";
import { app } from "../../../main.js";
import { deletaDadosTesteCategoria } from "../../../_dadosTeste_/deletaDados.js";

describe("Testando metodo PATCH da rota /categories/:id", () => {
  test("Deve retornar um 409 ao tentar ativar um objeto com status ativo", async () => {
    const novaTecnologia = await request(app)
      .post("/categories")
      .send({
        nome: "CATEGORIA TESTE PARA CONFLITO",
        status: "ATIVA",
      });

    const id = novaTecnologia.body._id;
    await request(app)
      .patch(`/categories/active/${id}`)
      .send({
        status: "ATIVA",
      })
      .expect(409);

    await deletaDadosTesteCategoria(id);
  });

  test("Deve ativar um objeto e retornar status 200", async () => {
    const novaTecnologia = await request(app)
      .post("/categories")
      .send({
        nome: "CATEGORIA TESTE PARA ATIVAR",
        status: "INATIVA",
      });
    const id = novaTecnologia.body._id;

    const objetoAtualizado = await request(app)
      .patch(`/categories/active/${id}`)
      .send({
        status: "ATIVA",
      })
      .expect(200);

    expect(objetoAtualizado.body.status).toBe("ATIVA");
    await deletaDadosTesteCategoria(id);
  });

  test("Deve retornar um 404 para objeto não encontrado", async () => {
    await request(app)
      .patch(`/categories/active/649498c8a9346d5e73a01249`)
      .expect(404);
  });
});
