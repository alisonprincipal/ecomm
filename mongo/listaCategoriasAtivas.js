use("ecomm");
const filtrandoCategories = db.categories.find({"status":"ATIVA"});
console.log(filtrandoCategories);