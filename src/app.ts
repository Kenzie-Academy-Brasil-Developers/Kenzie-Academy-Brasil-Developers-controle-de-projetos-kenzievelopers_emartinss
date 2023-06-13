import "express-async-errors";
import express, { Application } from "express";
import { developerRoutes } from "./routers/developers.routes";
import { developerInfosRoutes } from "./routers/developersInfos.routes";
import { projectsRoutes } from "./routers/projects.routes";
import { errorHandlerMiddleware } from "./middlewares/handleErrors.middlewares";
import "dotenv/config";

const app: Application = express();
app.use(express.json());

app.use("/developers", developerRoutes, developerInfosRoutes);
app.use("/projects", projectsRoutes);

app.use(errorHandlerMiddleware);

export default app;
