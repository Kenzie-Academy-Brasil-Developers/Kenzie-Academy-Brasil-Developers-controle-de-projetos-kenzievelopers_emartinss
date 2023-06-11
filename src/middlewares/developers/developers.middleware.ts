import { NextFunction, Request, Response, json } from "express";
import { IDeveloper } from "../../interfaces/interfacesDevelopers";
import { client } from "../../database/database";
import { QueryResult } from "pg";

export const verifyEmailExist = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const insertQuery = `SELECT * FROM developers`;

  const readResult: QueryResult<IDeveloper> = await client.query(insertQuery);

  const allDevelopers: IDeveloper[] = readResult.rows;

  if (allDevelopers.some((developer) => req.body.email === developer.email)) {
    return res.status(409).json({ error: "Email already exists " });
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
    return res.status(404).json({ error: " Developer not found." });
  }

  return next();
};
