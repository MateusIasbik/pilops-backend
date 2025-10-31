function notFoundError(entity: string) {
    return {
        name: "NotFound",
        message: `${entity} não encontrado!`
    }
}

export { notFoundError };