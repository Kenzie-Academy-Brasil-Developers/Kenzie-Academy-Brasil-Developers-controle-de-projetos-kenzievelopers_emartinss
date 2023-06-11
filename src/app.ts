import express, { Application } from "express";
import "dotenv/config";
import { developerRoutes } from "./routers/developers.routes";
import { developerInfosRoutes } from "./routers/developersInfos.routes";
import { projectsRoutes } from "./routers/projects.routes";

const app: Application = express();
app.use(express.json());

app.use("/developers", developerRoutes, developerInfosRoutes);
app.use("/projects", projectsRoutes);

export default app;
