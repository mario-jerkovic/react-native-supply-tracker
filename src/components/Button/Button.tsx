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
import getElevation from 'src/components/styles/getElevation'
import withTheme, {
    WithThemeProps,
} from 'src/components/styles/withTheme'

import TouchableRipple from '../Touchable/TouchableRipple'

type Props = {
    color?: 'primary' | 'secondary',
    variant?: 'flat' | 'contained' | 'fab',
    children: string,
    onPress: () => void,
}

const styles = StyleSheet.create({
    root: {
        minWidth: 64,
        minHeight: 36,
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    text: {
        padding: 8,
    },
})

const Button: React.SFC<Props & WithThemeProps> = (props) => {
    const {
        color,
        children,
        onPress,
        variant,
        theme,
    } = props

    let rippleColor = null
    let rootStyles: ViewStyle = styles.root
    let textStyles: TextStyle
    let buttonStyles: ViewStyle

    if (variant !== 'flat' && color === 'primary') {
        rippleColor = theme.palette.onPrimary
        textStyles = {
            color: theme.palette.onPrimary,
        }
        buttonStyles = {
            ...getElevation(4),
            backgroundColor: theme.palette.primary,
        }
    } else if (variant !== 'flat' && color === 'secondary') {
        rippleColor = theme.palette.onSecondary
        textStyles = {
            color: theme.palette.onSecondary,
        }
        buttonStyles = {
            ...getElevation(4),
            backgroundColor: theme.palette.secondary,
        }
    } else if (variant === 'flat' && color === 'primary') {
        rippleColor = theme.palette.primary
        textStyles = {
            color: theme.palette.primary,
        }
    } else if (variant === 'flat' && color === 'secondary') {
        rippleColor = theme.palette.secondary
        textStyles = {
            color: theme.palette.secondary,
        }
    }

    if (variant === 'fab') {
        rootStyles = {
            ...rootStyles,
            ...getElevation(6),
            width: 56,
            minWidth: 0,
            height: 56,
            minHeight: 0,
            borderRadius: 50,
        }
    }

    return (
        <View style={rootStyles} >
            <TouchableRipple
                onPress={onPress}
                rippleColor={rippleColor}
            >
                <View style={[rootStyles, buttonStyles]} >
                    <Text style={[styles.text, material.button, textStyles]} >
                        {Platform.OS === 'android' ? children.toUpperCase() : children}
                    </Text >
                </View >
            </TouchableRipple >
        </View >
    )
}

Button.defaultProps = {
    color: 'primary',
    variant: 'flat',
}

export default withTheme<Props>(Button)
