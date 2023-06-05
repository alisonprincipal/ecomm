use('ecomm');

const nome = db.products.createIndex({ nome: 1 });
const preco = db.products.createIndex({ preco: 1 });
const categoria = db.products.createIndex({ categoria: 1 });
const slug = db.products.createIndex({ slug: 1 });
const estoque = db.products.createIndex({ estoque: 1 });
const descricao = db.products.createIndex({ descricao: 1 });

console.log(nome);
console.log(preco);
console.log(categoria);
console.log(slug);
console.log(estoque);
console.log(descricao);