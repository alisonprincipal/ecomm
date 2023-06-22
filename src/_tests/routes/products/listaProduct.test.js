const testeF = () => 2 + 2;

describe("Testando metodo GET da rota /products", () => {
  it("|Testando algo", () => {
    const esperado = 4;
    const retorno = testeF();
    expect(retorno).toEqual(esperado);
  });
});
