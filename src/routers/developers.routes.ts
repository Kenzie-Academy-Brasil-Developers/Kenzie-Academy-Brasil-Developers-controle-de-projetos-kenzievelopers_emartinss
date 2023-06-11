import { Router } from "express";
import {
  deleteDevelopersController,
  readDevelopersController,
  registerDevelopersController,
  updateDevelopersController,
} from "../controllers/developers/developers.controllers";
import { verifyEmailExist, verifyIdExist } from "../middlewares/developers/developers.middleware";

export const developerRoutes: Router = Router();

developerRoutes.post("", verifyEmailExist, registerDevelopersController);
developerRoutes.get("/:id", verifyIdExist, readDevelopersController);
developerRoutes.patch("/:id", verifyIdExist, verifyEmailExist, updateDevelopersController);
developerRoutes.delete("/:id", verifyIdExist, deleteDevelopersController);
