import { Router } from "express";
import { createProjectsController, readProjectsController } from "../controllers/projects/projects.controllers";

export const projectsRoutes: Router = Router();

projectsRoutes.post("", createProjectsController);
projectsRoutes.get("/:id", readProjectsController);
