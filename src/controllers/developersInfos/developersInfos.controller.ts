import { Request, Response } from "express";
import { IDeveloperInfosCreate } from "../../interfaces/interfacesDevelopers";
import { registerDevelopersInfosService } from "../../services/developersInfos/createDevelopersInfos.service";

export const registerDevelopersInfosController = async (req: Request, res: Response): Promise<Response> => {
  const developerData: IDeveloperInfosCreate = { ...req.body, "developerId": req.params.id };

  const newDeveloper: IDeveloperInfosCreate = await registerDevelopersInfosService(developerData);

  return res.status(201).json(newDeveloper);
};
