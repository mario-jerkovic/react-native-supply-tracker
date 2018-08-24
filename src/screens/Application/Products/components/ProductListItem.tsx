import * as React from 'react'
import Avatar from 'src/components/Avatar/Avatar'

import Divider from 'src/components/Divider/Divider'
import ListItem from 'src/components/ListItem/ListItem'
import ListItemText from 'src/components/ListItem/ListItemText'

type Props = {
    name: string,
    quantity: number,
    onPress: () => void,
}

const ProductListItemComponent: React.SFC<Props> = (props) => {
    const {
        name,
        quantity,
        onPress,
    } = props

    return (
        <React.Fragment >
            <ListItem onPress={onPress} >
                <Avatar >
                    {name.charAt(0).toUpperCase()}
                </Avatar >
                <ListItemText
                    primary={name}
                    secondary={`Available quantity: ${quantity.toFixed(2)} kg`}
                />
            </ListItem >
            <Divider inset={true} />
        </React.Fragment >
    )
}

export default ProductListItemComponent
