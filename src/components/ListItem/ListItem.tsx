import * as React from 'react'
import {
    StyleSheet,
    View,
} from 'react-native'
import TouchableRipple from 'src/components/Touchable/TouchableRipple'

type Props = {
    onPress?: () => void,
    onLongPress?: () => void,
}

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
    const {
        onPress,
        onLongPress,
        children,
    } = props

    const component = (
        <View style={styles.root} >
            {children}
        </View >
    )

    if (onPress) {
        return (
            <TouchableRipple
                onPress={onPress}
                onLongPress={onLongPress}
            >
                {component}
            </TouchableRipple >
        )
    }

    return component
}

export default ListItem
