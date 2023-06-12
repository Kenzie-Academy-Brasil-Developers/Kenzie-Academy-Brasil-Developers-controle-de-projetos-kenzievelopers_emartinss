import { Request, Response } from "express";
import { createProjectsServices } from "../../services/projects/createProjects.service";
import { IProjectCreate, IProjects } from "../../interfaces/interfacesProjects";
import { readProjectsServices } from "../../services/projects/readProjects.service";
import { updateProjectsServices } from "../../services/projects/updateProjects.service";

export const createProjectsController = async (req: Request, res: Response): Promise<Response> => {
  const projectData: IProjectCreate = req.body;

  const newProject: IProjects = await createProjectsServices(projectData);

  return res.status(201).json(newProject);
};

export const readProjectsController = async (req: Request, res: Response): Promise<Response> => {
  const projects = await readProjectsServices(req.params.id);

  return res.status(200).json(projects);
};

export const updateProjectsController = async (req: Request, res: Response): Promise<Response> => {
  const projectData: IProjectCreate = req.body;
  const id: string = req.params.id;

  const updateProject = await updateProjectsServices(projectData, id);

  return res.status(200).json(updateProject)
};
