import { describe, test } from "@jest/globals";
import request from "supertest";
import { app } from "../../../main.js";
import { deletaDadosTesteProduto } from "../../../_dadosTeste_/deletaDados.js";

describe("Testando metodo POST da rota /products", () => {
  test("Deve criar um objeto e retornar status 201", async () => {
    const objeto = {
      nome: "MEU NOVO PRODUTO POST",
      descricao: "Samsung Book Core i5-1135G7, 8G, 256GB SSD, Iris Xe, 15.6\"FHD, W11 Cinza",
      slug: "notebook-samsung",
      preco: 3523,
      estoque: 1,
      categoria: "6495fc12213263ded90781f3",
    };
    const resposta = await request(app)
      .post("/products")
      .send(objeto)
      .expect(201);

    const id = resposta.body._id;
    await deletaDadosTesteProduto(id);
  });

  test("Deve retornar um 404 ao passar o ID invalido de uma categoria na criação", async () => {
    const objeto = {
      nome: "MEU NOVO PRODUTO POST",
      descricao: "Samsung Book Core i5-1135G7, 8G, 256GB SSD, Iris Xe, 15.6\"FHD, W11 Cinza",
      slug: "notebook-samsung",
      preco: 3523,
      estoque: 1,
      categoria: "6495fc12213263ded90781f2",
    };
    await request(app)
      .post("/products")
      .send(objeto)
      .expect(404);
  });
  test("Deve retornar um 409 ao não passar as chaves requeridas", async () => {
    const objeto = {
      descricao: "Samsung Book Core i5-1135G7, 8G, 256GB SSD, Iris Xe, 15.6\"FHD, W11 Cinza",
      slug: "notebook-samsung",
      preco: 3523,
      estoque: 1,
      categoria: "6495fc12213263ded90781f3",
    };
    await request(app)
      .post("/products")
      .send(objeto)
      .expect(409);
  });
  test("Deve retornar um 409 ao passar um objeto vazio", async () => {
    await request(app)
      .post("/products")
      .send({})
      .expect(409);
  });
  test("Deve retornar um uma mensagem de erro ao passar um ID categoria invalida", async () => {
    const objeto = {
      nome: "MEU NOVO PRODUTO POST",
      descricao: "Samsung Book Core i5-1135G7, 8G, 256GB SSD, Iris Xe, 15.6\"FHD, W11 Cinza",
      slug: "notebook-samsung",
      preco: 3523,
      estoque: 1,
      categoria: "6495e63fffb627f83a7cd818",
    };
    const resposta = await request(app)
      .post("/products")
      .send(objeto)
      .expect(404);

    const objetoError = { message: "Category not found" };
    const erroResposta = JSON.parse(resposta.error.text);
    expect(erroResposta).toEqual(objetoError);
  });
});
