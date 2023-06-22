import request from "supertest";
import { app } from "../../../main.js";

describe("Testando metodo GET da rota /categories", () => {
  it("Deve retornar estatus 200", async () => {
    await request(app)
      .get("/categories")
      .set("Accept", "application/json")
      .expect("content-type", /json/)
      .expect(200);
  });
  it("Deve retornar array ou um array de objetos", async () => {
    const resposta = await request(app).get("/categories");

    expect(Array.isArray(resposta.body)).toBe(true);
    resposta.body.forEach((dados) => {
      expect(typeof dados).toEqual("object");
    });
  });

  it("O objeto deve conter as propriedades", async () => {
    const objeto = {
      _id: expect.any(String),
      nome: expect.any(String),
      status: expect.any(String),
    };

    const resposta = await request(app).get("/categories");

    expect(Array.isArray(resposta.body)).toBe(true);
    // verifico as propriedades de cada objeto
    resposta.body.forEach((dados) => {
      expect(dados).toEqual(expect.objectContaining(objeto));
    });
  });
});
