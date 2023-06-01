use("ecomm");
var produtos = db.products.updateMany({"categoria":"LIVROS"},{$set:{"estoque":0}});
console.log(produtos);