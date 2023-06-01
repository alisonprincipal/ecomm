const produtos = require("./produtos.json")
use("ecomm");
const numeroDecimal = produtos.map((element=>{
    if(element.preco){
        element.preco = NumberDecimal(element.preco.toFixed(2))
    }
    return element
}))

const inserindoProdutos = db.products.insertMany(numeroDecimal)
console.log(inserindoProdutos)
