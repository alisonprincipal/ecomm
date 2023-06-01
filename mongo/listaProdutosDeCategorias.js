use("ecomm");
var produtos = db.products.find({$or:[{"categoria":"LIVROS"},{"categoria":"CELULARES"}]});
console.log(produtos); 