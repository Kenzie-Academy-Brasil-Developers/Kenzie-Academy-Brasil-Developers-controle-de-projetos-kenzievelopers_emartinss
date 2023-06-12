import { Request, Response } from "express";
import { IDeveloper, IDeveloperGet, iDeveloperCreate } from "../../interfaces/interfacesDevelopers";
import { registerDevelopersService } from "../../services/developers/createDevelopers.service";
import { readDevelopersService } from "../../services/developers/readDevelopers.service";
import { updateDevelopersServices } from "../../services/developers/updateDevelopers.service";
import { deleteDevelopersServices } from "../../services/developers/deleteDevelopers.service";

export const registerDevelopersController = async (req: Request, res: Response): Promise<Response> => {
  const developerData: iDeveloperCreate = req.body;

  const newDeveloper: IDeveloper = await registerDevelopersService(developerData);

  return res.status(201).json(newDeveloper);
};

export const readDevelopersController = async (req: Request, res: Response): Promise<Response> => {
  const developers: IDeveloperGet[] = await readDevelopersService(req.params.id);

  return res.status(200).json(developers);
};

export const updateDevelopersController = async (req: Request, res: Response): Promise<Response> => {
  const developerData: string = req.body;
  const id = req.params.id;
  const updateDeveloper = await updateDevelopersServices(id, developerData);
  return res.status(200).json(updateDeveloper);
};

export const deleteDevelopersController = async (req: Request, res: Response): Promise<Response> => {
  const id = req.params.id;
  const deleteDeveloper = await deleteDevelopersServices(id);

  return res.status(204).send();
};
