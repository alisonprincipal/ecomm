use("ecomm");
var produtos = db.products.find({$and:[{"preco":{$gte:1000}},{"preco":{$lte:2000}}]},{"nome":1,"preco":1,"id":1,});
console.log(produtos); 