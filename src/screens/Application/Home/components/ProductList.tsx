import * as React from 'react'
import {
    ScrollView,
    StyleSheet,
    View,
} from 'react-native'

type Props = {
    children: React.ReactNode,
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexGrow: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const ProductListComponent: React.SFC<Props> = (props) => {
    const {
        children,
    } = props

    return (
        <ScrollView >
            <View style={styles.root} >
                {children}
            </View >
        </ScrollView >
    )
}

export default ProductListComponent
