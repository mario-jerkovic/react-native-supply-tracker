import * as React from 'react'
import { StyleSheet, View } from 'react-native'

import Button from 'src/components/Button'

type Props = {
    onCancelPress?: () => void,
    onSavePress?: () => void,
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    action: {
        marginVertical: 0,
        marginHorizontal: 4,
    },
})

const ProductActionsComponent: React.SFC<Props> = (props) => {
    const {
        onCancelPress,
        onSavePress,
    } = props

    return (
        <View style={styles.root} >
            <View style={styles.action} >
                <Button onPress={onCancelPress} >
                    Cancel
                </Button >
            </View >
            <View style={styles.action} >
                <Button onPress={onSavePress} >
                    Save
                </Button >
            </View >
        </View >
    )
}

export default ProductActionsComponent
