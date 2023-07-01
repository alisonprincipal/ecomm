import { describe, expect, test } from "@jest/globals";
import request from "supertest";
import { app } from "../../../main.js";
import { deletaDadosTesteProduto } from "../../../_dadosTeste_/deletaDados.js";

describe("Testando metodo PUT da rota /products/:id", () => {
  test("Deve atualizar um objeto", async () => {
    const objeto = {
      nome: "MEU NOVO PRODUTO PUT ID",
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
    const resposta = await request(app)
      .put(`/products/${id}`)
      .send({ nome: "MEU NOVO PRODUTO PUT ID ATUALIZADO" })
      .expect(200);

    expect(resposta.body.nome).toBe("MEU NOVO PRODUTO PUT ID ATUALIZADO");
    await deletaDadosTesteProduto(id);
  });

  test("Deve retornar um 404 ao passar o ID invalido de uma categoria na atualização", async () => {
    const objeto = {
      nome: "MEU NOVO PRODUTO POST",
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
    const resposta = await request(app)
      .put(`/products/${id}`)
      .send({ categoria: "6495e63fffb627f83a7cd819" })
      .expect(404);

    const objetoError = { message: "Category not found" };
    const erroResposta = JSON.parse(resposta.error.text);
    expect(erroResposta).toEqual(objetoError);
  });

  test("Deve retornar um 404 para item não encontrado", async () => {
    await request(app)
      .put(`/products/649498c8a9346d5e73a01249`)
      .expect(404);
  });
});
