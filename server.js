import { app } from "./src/main.js";

const PORT = process.env.PORT || 3000;
const localHost = `http://localhost:${PORT}`;

app.listen(PORT, () => {
  console.log(`Server Connect =>>> ${localHost}`);
});
