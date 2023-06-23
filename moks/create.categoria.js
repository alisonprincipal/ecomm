// /* eslint-disable no-underscore-dangle */
// import request from "supertest";
// import { app } from "../../main.js";

// const idTecnologia = [];
// // eslint-disable-next-line import/no-mutable-exports
// export let dadosMock = "";
// export class CategoriaMok {
//   static ler = () => async () => {
//     const dados = await request(app).get("/categories");
//     dadosMock = dados.body;
//     console.log(dadosMock);
//   };

//   static cria = () => {
//     const total = [1, 2, 3];

//     total.forEach(async (t) => {
//       const novaCategoria = await request(app).post("/categories")
//         .send({
//           nome: `categoriaMok${t}`,
//           status: "ATIVA",
//         });
//       idTecnologia.push(novaCategoria.body._id);
//     });
//   };

//   static deleta = () => {
//     idTecnologia.forEach(async (t) => {
//       await request(app).delete(`/categories/${t}`);
//     });
//   };
// }
