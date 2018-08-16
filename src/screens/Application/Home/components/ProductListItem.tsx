import * as React from 'react'

import Button from 'src/components/Button'
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
} from 'src/components/Card'

type Props = {
    name: string,
    image: string,
    quantity: number,
}

const ProductListItemComponent: React.SFC<Props> = (props) => {
    const {
        name,
        image,
        quantity,
    } = props

    const handleShareClick = () => {
        // tslint:disable-next-line:no-console
        console.log('Share click')
    }

    const handleLearMore = () => {
        // tslint:disable-next-line:no-console
        console.log('Learn more click')
    }

    return (
        <Card >
            <CardMedia
                image={image}
            />
            <CardContent
                title={name}
                supportingText={`Available quantity: ${quantity} kg`}
            />
            <CardActions >
                <Button onPress={handleShareClick} >
                    Share
                </Button >
                <Button onPress={handleLearMore} >
                    Learn more
                </Button >
            </CardActions >
        </Card >
    )
}

export default ProductListItemComponent
