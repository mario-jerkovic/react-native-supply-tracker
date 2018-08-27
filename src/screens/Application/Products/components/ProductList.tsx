import * as React from 'react'
import {
    StyleSheet,
    View,
} from 'react-native'
import Button from 'src/components/Button/Button'

type Props = {
    onFabPress: () => void,
}

const styles = StyleSheet.create({
    root: {},
    fab: {
        position: 'absolute',
        right: 16,
        bottom: 16,
    },
})

const ProductListComponent: React.SFC<Props> = (props) => {
    const {
        onFabPress,
        children,
    } = props

    return (
        <View style={styles.root} >
            {children}
            <Button
                color="secondary"
                variant="fab"
                style={styles.fab}
                onPress={onFabPress}
            >
                X
            </Button >
        </View >
    )
}

export default ProductListComponent
