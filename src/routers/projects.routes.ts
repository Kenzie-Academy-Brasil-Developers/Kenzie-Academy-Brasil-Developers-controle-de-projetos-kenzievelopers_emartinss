import { Router } from "express";
import { createProjectsController, readProjectsController, updateProjectsController } from "../controllers/projects/projects.controllers";
import { verifyIdExistGet, verifyIdExistPost } from "../middlewares/projects/projects.middleware";

export const projectsRoutes: Router = Router();

projectsRoutes.post("", verifyIdExistPost, createProjectsController);
projectsRoutes.get("/:id", verifyIdExistGet, readProjectsController);
projectsRoutes.patch("/:id", verifyIdExistPost, verifyIdExistGet, updateProjectsController);
