type Supply = {
    amount: number,
    createdTime: string,
}

export type Product = {
    name: string,
    supply: Supply[],
    photo: string | null,
}
