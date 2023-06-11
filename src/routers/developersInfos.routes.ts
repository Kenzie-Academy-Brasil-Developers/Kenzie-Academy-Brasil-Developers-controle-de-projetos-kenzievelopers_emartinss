import { Router } from "express";
import { registerDevelopersInfosController } from "../controllers/developersInfos/developersInfos.controller";
import { verifyInformationsUpdate, verifyOs } from "../middlewares/developersInfos/developersInfos.middleware";
import { verifyIdExist } from "../middlewares/developers/developers.middleware";

export const developerInfosRoutes: Router = Router();

developerInfosRoutes.post("/:id/infos", verifyOs, verifyInformationsUpdate, verifyIdExist, registerDevelopersInfosController);
