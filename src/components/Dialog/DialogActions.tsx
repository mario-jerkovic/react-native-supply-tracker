import * as React from 'react'
import { StyleSheet, View } from 'react-native'

type Props = {}

const styles = StyleSheet.create({
    root: {
        height: 52,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 8,
    },
    action: {
        marginVertical: 0,
        marginHorizontal: 4,
    },
})

const DialogActions: React.SFC<Props> = (props) => {
    const {
        children,
    } = props

    return (
        <View style={styles.root} >
            {React.Children.map(React.Children.toArray(children), (child) => (
                <View style={styles.action} >
                    {child}
                </View >
            ))}
        </View >
    )
}

export default DialogActions
