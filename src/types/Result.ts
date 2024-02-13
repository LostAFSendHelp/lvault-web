type Result<T> = {
    statusCode: any,
    message?: string,
    data: T
    success: boolean,
}