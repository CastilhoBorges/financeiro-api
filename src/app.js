import express, { urlencoded } from "express";
import routes from "./routes/index.routes.js";

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use("/api", routes);

export default app;
