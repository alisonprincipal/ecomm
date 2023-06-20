import express from "express";
import { categories } from "./categorieRoutes.js";

export const routes = (app) => {
  app.route("/").get((_, res) => {
    res.status(200).send({ titulo: "Express Ecomm Ok!!" });
  });

  app.use(
    express.json(),
    categories,
  );
};
