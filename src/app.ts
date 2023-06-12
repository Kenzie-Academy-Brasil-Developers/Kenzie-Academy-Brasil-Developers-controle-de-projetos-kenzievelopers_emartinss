import express, { Application } from "express";
import { developerRoutes } from "./routers/developers.routes";
import { developerInfosRoutes } from "./routers/developersInfos.routes";
import { projectsRoutes } from "./routers/projects.routes";
import "dotenv/config";

const app: Application = express();
app.use(express.json());

app.use("/developers", developerRoutes, developerInfosRoutes);
app.use("/projects", projectsRoutes);

export default app;
