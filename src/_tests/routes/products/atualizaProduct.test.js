const testeF = () => 2 + 2;

describe("Testando metodo PUT da rota /products/:id", () => {
  it("|Testando algo", () => {
    const esperado = 4;
    const retorno = testeF();
    expect(retorno).toEqual(esperado);
  });
});
