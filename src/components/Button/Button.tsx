import * as React from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    TextStyle,
    View,
    ViewStyle,
} from 'react-native'

import TouchableRipple from '../Touchable/TouchableRipple'

type Props = {
    children: string,
    disabled?: boolean,
    onPress: () => void,
    raised?: boolean,
}

const styles = StyleSheet.create({
    root: {
        borderRadius: 2,
    },
    buttonText: {},
    buttonContained: {
        elevation: 4,
        // Material design blue from https://material.google.com/style/color.html#color-color-palette
        backgroundColor: '#2196F3',
    },
    text: {
        padding: 8,
        fontWeight: '500',
        textAlign: 'center',
    },
    textText: {
        color: '#2196F3',
    },
    textContained: {
        color: '#fff',
    },
})

const Button: React.SFC<Props> = (props) => {
    const {
        children,
        disabled, // @TODO: implement disabled style
        onPress,
        raised,
    } = props

    let textStyles: TextStyle = styles.textText
    let buttonStyles: ViewStyle = styles.buttonText

    if (raised) {
        textStyles = styles.textContained
        buttonStyles = styles.buttonContained
    }

    return (
        <TouchableRipple
            onPress={onPress}
            rippleColor={textStyles.color}
        >
            <View style={[styles.root, buttonStyles]} >
                <Text style={[styles.text, textStyles]} >
                    {Platform.OS === 'android' ? children.toUpperCase() : children}
                </Text >
            </View >
        </TouchableRipple >
    )
}

Button.defaultProps = {
    disabled: false,
    raised: false,
}

export default Button
