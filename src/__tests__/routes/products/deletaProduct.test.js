import { describe, test } from "@jest/globals";
import request from "supertest";
import { app } from "../../../main.js";

describe("Testando metodo DELETE da rota /products/:id", () => {
  test("Deve deletar um objeto e retornar status 204", async () => {
    const objeto = {
      nome: "MEU NOVO PRODUTO DELETE ID",
      descricao: "Samsung Book Core i5-1135G7, 8G, 256GB SSD, Iris Xe, 15.6\"FHD, W11 Cinza",
      slug: "notebook-samsung",
      preco: 3523,
      estoque: 1,
      categoria: "6495fc12213263ded90781f3",
    };

    const cadastro = await request(app)
      .post("/products")
      .send(objeto)
      .expect(201);

    const id = cadastro.body._id;
    await request(app)
      .delete(`/products/${id}`)
      .expect(204);
  });

  test("Deve retornar um 404 para item não encontrado", async () => {
    await request(app)
      .delete(`/products/649498c8a9346d5e73a01249`)
      .expect(404);
  });
});
