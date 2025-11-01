import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/error.js";

const errorStatusMap: { [key: string]: number } = {
  NotFound: 404,
  Conflict: 409,
  BadRequest: 400,
  UnprocessableEntity: 422,
  Forbidden: 403,
};

export default function errorHandlingMiddleware(
  error: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(error);

  const { name, message } = error;
  const status = errorStatusMap[name] || 500;

  return res.status(status).send(message);
}