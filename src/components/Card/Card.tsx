import * as React from 'react'
import {
    StyleSheet,
    View,
    ViewStyle,
} from 'react-native'

import shadow from '../styles/shadow'

// @TODO: Implement color palette

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        flexBasis: '75%',
        maxWidth: 450,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        borderRadius: 4,
        backgroundColor: '#fff',
    },
    card: {
        marginVertical: 10,
        marginHorizontal: 10,
        elevation: 4,
    },
})

type Props = {
    children: React.ReactNode,
    style?: ViewStyle,
}

const Card: React.SFC<Props> = (props) => {
    const flattenedStyle = StyleSheet.flatten(props.style || styles.card)

    return (
        <View
            style={[
                styles.container,
                flattenedStyle,
                shadow(4),
            ]}
        >
            {props.children}
        </View >
    )
}

export default Card
