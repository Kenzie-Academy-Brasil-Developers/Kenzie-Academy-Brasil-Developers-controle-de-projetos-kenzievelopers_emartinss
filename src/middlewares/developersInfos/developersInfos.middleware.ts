import { NextFunction, Request, Response } from "express";
import { QueryResult } from "pg";
import { client } from "../../database/database";
import { IDeveloperInfos } from "../../interfaces/interfacesDevelopers";

export const verifyOs = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const developerData = req.body;
  if (developerData.preferredOS !== "Windows" && developerData.preferredOS !== "MacOS" && developerData.preferredOS !== "Linux") {
    return res.status(400).json({
      message: "Invalid OS, select one of the following options",
      options: ["Windows", "MacOS", "Linux"],
    });
  }

  return next();
};

export const verifyInformationsUpdate = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const queryString = `SELECT * FROM "developerInfos" where "developerId" = ${id};`;

  const result: QueryResult = await client.query(queryString);
  const developer: IDeveloperInfos[] = result.rows;

  if (developer.length > 0) {
    return res.status(409).json({ message: "information already entered" });
  }

  return next();
};

export const verifyIdExist = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  const insertQuery = `SELECT * FROM "developerInfos"`;

  const readResult: QueryResult<IDeveloperInfos> = await client.query(insertQuery);

  const allDevelopers: IDeveloperInfos[] = readResult.rows;

  const id = req.params.id;
  const productIndex: boolean = allDevelopers.some((item): boolean => item.id === Number(id));

  if (!productIndex) {
    return res.status(404).json({ message: "Developer not found." });
  }

  return next();
};
