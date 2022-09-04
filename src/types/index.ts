export interface IResult<T = any> {
    data: T,
    errorCode: number,
    errorMessage: string
}

export interface IUser {
    userId?: string,
    username: string,
    password: string,
}