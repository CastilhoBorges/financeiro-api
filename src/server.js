import app from "./app.js";
import dotenv from "dotenv";
import { sequelize } from "./config/database.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

sequelize
  .sync()
  .then(() => {
    console.log("Banco de dados sincronizado.");
    app.listen(PORT, () => {
      console.log(`Servidor rodando em  http://localhost${PORT}/`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
