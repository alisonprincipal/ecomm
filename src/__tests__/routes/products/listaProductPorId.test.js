import { describe, expect, test } from "@jest/globals";
import request from "supertest";
import { app } from "../../../main.js";
import { deletaDadosTesteProduto } from "../../../_dadosTeste_/deletaDados.js";

describe("Testando metodo GET da rota /products/:id", () => {
  test("Deve retornar status 200", async () => {
    const objeto = {
      nome: "MEU NOVO PRODUTO GET ID",
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
    const response = await request(app)
      .get(`/products/${id}`)
      .expect(200);

    delete response.body.categoria;
    delete cadastro.body.categoria;
    expect(response.body).toEqual(
      expect.objectContaining(cadastro.body),
    );

    await deletaDadosTesteProduto(id);
  });

  test("Deve retornar um 404 para item não encontrado", async () => {
    await request(app)
      .get(`/products/649498c8a9346d5e73a01249`)
      .expect(404);
  });
});
