import * as React from 'react'
import { StyleSheet, View } from 'react-native'

type Props = {}

const styles = StyleSheet.create({
    root: {
        padding: 16,
    },
})

const ProductComponent: React.SFC<Props> = (props) => {
    const { children } = props

    return (
        <View style={styles.root} >
            {children}
        </View >
    )
}

export default ProductComponent
