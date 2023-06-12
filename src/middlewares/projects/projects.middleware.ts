import { NextFunction, Request, Response } from "express";
import { client } from "../../database/database";
import { IProjects } from "../../interfaces/interfacesProjects";
import { QueryResult } from "pg";

export const verifyIdExistPost = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const insertQuery = `SELECT * FROM "developerInfos"`;

  const readResult: QueryResult<IProjects> = await client.query(insertQuery);

  const allProjects: IProjects[] = readResult.rows;

  const id = req.body.developerId;

  const productIndex: boolean = allProjects.some((item): boolean => item.developerId === Number(id));

  if (!productIndex) {
    return res.status(404).json({ message: "developer not found." });
  }

  return next();
};

export const verifyIdExistGet = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const insertQuery = `SELECT * FROM "projects"`;

  const readResult: QueryResult<IProjects> = await client.query(insertQuery);

  const allDevelopers: IProjects[] = readResult.rows;

  const id = req.params.id;
  const productIndex: boolean = allDevelopers.some((item): boolean => item.id === Number(id));

  if (!productIndex) {
    return res.status(404).json({ message: "Project not found." });
  }

  return next();
};
