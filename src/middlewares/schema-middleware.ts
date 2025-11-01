// import { NextFunction, Request, Response } from "express";
// import Joi, { ObjectSchema, ValidationErrorItem } from "joi";

// export function validateSchema(schema: ObjectSchema) {
//   return (req: Request, res: Response, next: NextFunction) => {
//     const validation = schema.validate(req.body, { abortEarly: false });
//     if (validation.error) {
//       return res
//         .status(422)
//         .send(validation.error.details.map((detail: ValidationErrorItem) => detail.message));
//     }
//     next();
//   };
// }
