import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import { AppError } from "../errors/error.js";

const errorStatusMap: { [key: string]: number } = {
  NotFound: httpStatus.NOT_FOUND,
  Conflict: httpStatus.CONFLICT,
  BadRequest: httpStatus.BAD_REQUEST,
  UnprocessableEntity: httpStatus.UNPROCESSABLE_ENTITY,
  Forbidden: httpStatus.FORBIDDEN,
};

export default function errorHandlingMiddleware(
  error: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(error);

  const { name, message } = error;
  const status = errorStatusMap[name] || httpStatus.INTERNAL_SERVER_ERROR;

  return res.status(status).send(message);
}