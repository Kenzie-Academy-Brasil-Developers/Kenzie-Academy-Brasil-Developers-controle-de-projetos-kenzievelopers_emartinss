import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

export const errorHandlerMiddleware = async (err: unknown, req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  if (err instanceof AppError) {
    return res.status(err.status).json({ message: err.message});
  }
};
