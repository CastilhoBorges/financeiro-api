import sequelize from "./config/database";
import app from "./app";
import { PORT } from "./config/dotenv";

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("Data Base connection: ", err));
