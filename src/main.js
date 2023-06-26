import "express-async-errors";
import express from "express";
import { db } from "./config/db.connect.js";
import { routes } from "./routes/index.js";
import { handleErros } from "./erros.js";

db.on("error", console.log.bind(console, "error the conection"));

db.once("open", () => {
  console.log("Conection database Sucess");
});

export const app = express();
routes(app);
app.use(handleErros);
