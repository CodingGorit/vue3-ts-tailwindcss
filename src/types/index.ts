export interface IResult<T = unknown> {
    data: T,
    errorCode: number,
    errorMessage: string
}

export interface IUser {
    userId?: string,
    username: string,
    password: string,
}