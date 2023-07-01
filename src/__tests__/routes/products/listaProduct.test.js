import { describe, expect, test } from "@jest/globals";
import request from "supertest";
import { app } from "../../../main.js";

describe("Testando metodo GET da rota /products", () => {
  test("Deve retornar status 200", async () => {
    await request(app)
      .get("/products")
      .set("Accept", "application/json")
      .expect("content-type", /json/)
      .expect(200);
  });
  test("Deve retornar array ou um array de objetos", async () => {
    const resposta = await request(app).get("/products");
    expect(Array.isArray(resposta.body)).toBe(true);
    resposta.body.forEach((dados) => {
      expect(typeof dados).toEqual("object");
    });
  });

  test("O objeto deve conter as propriedades", async () => {
    const objeto = {
      _id: expect.any(String),
      nome: expect.any(String),
      descricao: expect.any(String),
      slug: expect.any(String),
      preco: expect.any(Number),
      estoque: expect.any(Number),
      categoria: expect.any(Object),
    };

    const resposta = await request(app).get("/products");

    expect(Array.isArray(resposta.body)).toBe(true);
    // verifico as propriedades de cada objeto
    resposta.body.forEach((dados) => {
      expect(dados).toEqual(expect.objectContaining(objeto));
    });
  });
});
