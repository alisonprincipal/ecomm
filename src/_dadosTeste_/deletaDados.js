/* eslint-disable import/no-extraneous-dependencies */
import request from "supertest";
import { app } from "../main";

export const deletaDadosTesteCategoria = async (id) => {
  await request(app)
    .delete(`/categories/${id}`)
    .expect(204);
};
