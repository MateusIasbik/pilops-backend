// import { NextFunction, Request, Response } from "express";
// import httpStatus from "http-status";
// import Joi from "joi";

// export function validateSchema(schema: Joi.ObjectSchema) {
//   return (req: Request, res: Response, next: NextFunction) => {
//     const validation = schema.validate(req.body, { abortEarly: false });
//     if (validation.error) {
//       return res
//         .status(httpStatus.UNPROCESSABLE_ENTITY)
//         .send(validation.error.details.map((detail: Joi.ValidationErrorItem) => detail.message));
//     }
//     next();
//   };
// }

