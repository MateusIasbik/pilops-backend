type AppError = {
  name: string;
  message: string;
};

function notFoundError(entity: string): AppError {
    return {
        name: "NotFound",
        message: `${entity} not found!`
    }
}

function badRequestError(entity: string): AppError {
    return {
        name: "BadRequest",
        message: `Bad request: ${entity}`
    }
}

export { notFoundError, badRequestError, AppError };