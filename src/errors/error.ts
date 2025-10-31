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

function badRequestError(message = "Requisição inválida!"): AppError {
    return {
        name: "BadRequest",
        message
    }
}

export { notFoundError, AppError };