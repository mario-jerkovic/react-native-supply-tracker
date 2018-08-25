import * as React from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    TextStyle,
    View,
    ViewStyle,
} from 'react-native'
import { material } from 'react-native-typography'
import withTheme, {
    WithThemeProps,
} from 'src/components/styles/withTheme'

import TouchableRipple from '../Touchable/TouchableRipple'

type Props = {
    children: string,
    onPress: () => void,
    raised?: boolean,
}

const styles = StyleSheet.create({
    root: {
        borderRadius: 2,
    },
    buttonRaised: {
        elevation: 4,
    },
    text: {
        padding: 8,
    },
})

const Button: React.SFC<Props & WithThemeProps> = (props) => {
    const {
        children,
        onPress,
        raised,
        theme,
    } = props

    let rippleColor = theme.palette.primary
    let textStyles: TextStyle = {
        color: theme.palette.primary,
    }
    let buttonStyles: ViewStyle[] = []

    if (raised) {
        rippleColor = theme.palette.onPrimary
        textStyles = {
            color: theme.palette.onPrimary,
        }
        buttonStyles = [styles.buttonRaised, {
            backgroundColor: theme.palette.primary,
        }]
    }

    return (
        <TouchableRipple
            onPress={onPress}
            rippleColor={rippleColor}
        >
            <View style={[styles.root, buttonStyles]} >
                <Text style={[styles.text, material.button, textStyles]} >
                    {Platform.OS === 'android' ? children.toUpperCase() : children}
                </Text >
            </View >
        </TouchableRipple >
    )
}

Button.defaultProps = {
    raised: false,
}

export default withTheme<Props>(Button)
