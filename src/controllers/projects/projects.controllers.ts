import { Request, Response } from "express";
import { createProjectsServices } from "../../services/projects/createProjects.services";
import { IProjectCreate, IProjects } from "../../interfaces/interfacesProjects";
import { readProjectsServices } from "../../services/projects/readProjects.services";

export const createProjectsController = async (req: Request, res: Response): Promise<Response> => {
  const projectData: IProjectCreate = req.body;

  const newProject: IProjects = await createProjectsServices(projectData);

  return res.status(201).json(newProject);
};

export const readProjectsController = async (req: Request, res: Response): Promise<Response> => {
  const projects = await readProjectsServices(req.params.id);

  return res.status(200).json(projects);
};
