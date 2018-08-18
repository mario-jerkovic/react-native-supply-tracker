import * as React from 'react'
import Avatar from 'src/components/Avatar/Avatar'

import Divider from 'src/components/Divider/Divider'
import ListItem from 'src/components/ListItem/ListItem'
import ListItemText from 'src/components/ListItem/ListItemText'

type Props = {
    name: string,
    quantity: number,
}

const ProductListItemComponent: React.SFC<Props> = (props) => {
    const {
        name,
        quantity,
    } = props

    const handleListItemPress = () => {
        // tslint:disable-next-line:no-console
        console.log('List item press')
    }

    const handleListItemLongPress = () => {
        // tslint:disable-next-line:no-console
        console.log('List item long press')
    }

    return (
        <React.Fragment >
            <ListItem
                onPress={handleListItemPress}
                onLongPress={handleListItemLongPress}
            >
                <Avatar >
                    {name.charAt(0).toUpperCase()}
                </Avatar >
                <ListItemText
                    primary={name}
                    secondary={`Available quantity: ${quantity} kg`}
                />
            </ListItem >
            <Divider inset={true} />
        </React.Fragment >
    )
}

export default ProductListItemComponent
