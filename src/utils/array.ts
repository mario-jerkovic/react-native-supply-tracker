export function updateObjectInArray<T extends object>(array: T[], index: number, item: object): T[] {
    return array.map((arrayItem, arrayIndex) => {
        if (arrayIndex !== index) {
            return arrayItem
        }

        return {
            // @ts-ignore
            // https://github.com/Microsoft/TypeScript/issues/10727
            ...arrayItem,
            ...item,
        }
    })
}
