import { NextFunction, Request, Response, json } from "express";
import { IDeveloper } from "../../interfaces/interfacesDevelopers";
import { client } from "../../database/database";
import { QueryResult } from "pg";
import { AppError } from "../../error";

export const verifyEmailExist = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const insertQuery = `SELECT * FROM developers`;

  const readResult: QueryResult<IDeveloper> = await client.query(insertQuery);

  const allDevelopers: IDeveloper[] = readResult.rows;

  if (allDevelopers.some((developer) => req.body.email === developer.email)) {
    throw new AppError("email already exists", 409);
  }
  return next();
};

export const verifyIdExist = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const insertQuery = `SELECT * FROM developers`;

  const readResult: QueryResult<IDeveloper> = await client.query(insertQuery);

  const allDevelopers: IDeveloper[] = readResult.rows;

  const id = req.params.id;
  const productIndex: boolean = allDevelopers.some((item): boolean => item.id === Number(id));

  if (!productIndex) {
    throw new AppError("Developer not found", 404);
  }

  return next();
};
