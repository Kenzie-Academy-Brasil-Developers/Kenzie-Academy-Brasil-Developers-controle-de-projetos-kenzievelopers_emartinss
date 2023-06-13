import { NextFunction, Request, Response } from "express";
import { client } from "../../database/database";
import { IProjects } from "../../interfaces/interfacesProjects";
import { QueryResult } from "pg";
import { AppError } from "../../error";

export const verifyIdExistPost = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const insertQuery = `SELECT * FROM "developers"`;

  const readResult: QueryResult<IProjects> = await client.query(insertQuery);

  const allProjects: IProjects[] = readResult.rows;

  const id = req.body.developerId;

  const productIndex: boolean = allProjects.some((item): boolean => item.id === Number(id));

  if (!productIndex) {
    throw new AppError("Developer not found", 404);
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
    throw new AppError("Project not found", 404);
  }

  return next();
};
