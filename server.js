import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import YAML from "yaml";
import { app } from "./src/main.js";

const documentoYML = fs.readFileSync("./swagger/ecomm.yaml", "utf8");
const YMLcovertido = YAML.parse(documentoYML);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(YMLcovertido));

dotenv.config();
const PORT = process.env.PORT || 3000;
const localHost = `http://localhost:${PORT}`;

app.listen(PORT, () => {
  console.log(`Server Connect =>>> ${localHost}`);
});
