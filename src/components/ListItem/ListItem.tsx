import * as React from 'react'
import {
    StyleSheet,
    View,
} from 'react-native'

type Props = {}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 12,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
})

const ListItem: React.SFC<Props> = (props) => {
    const { children } = props

    return (
        <View style={styles.root} >
            {children}
        </View >
    )
}

export default ListItem
