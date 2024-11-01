import express from "express";
import { applyMiddleware } from "./middlewares";
import routes from "./routes";

const app = express();

applyMiddleware(app);
app.use("/api", routes);

export default app;
