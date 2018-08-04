export type GoogleUser = {
    accessToken: string,
    email: string,
    givenName: string,
    familyName: string,
    photo: string | null
}

export type User = {
    token: string,
    email: string,
    firstName: string,
    lastName: string,
    photo: string | null,
}
