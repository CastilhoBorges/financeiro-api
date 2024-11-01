import { Sequelize } from "sequelize";
import { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME } from "./dotenv";

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "postgres",
  logging: false,
});

export default sequelize;
