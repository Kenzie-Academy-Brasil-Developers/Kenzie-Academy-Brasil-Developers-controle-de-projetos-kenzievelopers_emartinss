import express, { Application } from "express";
import "dotenv/config";
import { developerRoutes } from "./routers/developers.routes";


const app: Application = express();
app.use(express.json());

app.use("/developers",  developerRoutes);

export default app;
