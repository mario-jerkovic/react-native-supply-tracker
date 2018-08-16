// @TODO: Implement color palette

export default function shadow(elevation: number) {
    const width = 0
    let height = 0
    let radius = 0

    switch (elevation) {
        case 1:
            height = 0.5
            radius = 0.75

            break
        case 2:
            height = 0.75
            radius = 1.5

            break
        default:
            height = elevation - 1
            radius = elevation
    }

    return {
        shadowColor: 'black',
        shadowOffset: {
            width,
            height,
        },
        shadowOpacity: 0.24,
        shadowRadius: radius,
    }
}
