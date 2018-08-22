import * as React from 'react'
import { StyleSheet, View } from 'react-native'

type Props = {}

const styles = StyleSheet.create({
    root: {
        flex: -1,
    },
    rootPadding: {
        paddingHorizontal: 24,
        paddingBottom: 24,
    },
})

const DialogContent: React.SFC<Props> = (props) => {
    const {
        children,
    } = props

    return (
        <View style={[styles.root, styles.rootPadding]} >
            {children}
        </View >
    )
}

export default DialogContent
