import * as React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'

type Props = {
    inset?: boolean,
    style?: ViewStyle,
}

const styles = StyleSheet.create({
    root: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'rgba(0, 0, 0, 0.12)',
    },
})

const Divider: React.SFC<Props> = (props) => {
    const {
        inset,
        style,
    } = props

    const calcStyle = {
        marginLeft: inset ? 72 : 0,
    }

    return (
        <View style={[styles.root, calcStyle, style]} />
    )
}

Divider.defaultProps = {
    inset: false,
}

export default Divider
