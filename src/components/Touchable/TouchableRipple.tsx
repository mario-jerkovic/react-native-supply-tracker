import * as React from 'react'
import {
    Platform,
    TouchableHighlight,
    TouchableNativeFeedback,
    View,
    ViewStyle,
} from 'react-native'

import Color from 'color'

const ANDROID_VERSION_LOLLIPOP = 21

const supported = Platform.OS === 'android' && Platform.Version >= ANDROID_VERSION_LOLLIPOP

type Props = {
    disabled?: boolean,
    onPress: () => void,
    onLongPress?: () => void
    rippleColor?: string,
    children: React.ReactNode,
}

const TouchableRipple: React.SFC<Props> = (props) => {
    const {
        onPress,
        disabled: disabledProp,
        rippleColor: rippleColorProp,
        children,
    } = props

    const disabled = disabledProp || !onPress

    let rippleColor

    if (rippleColorProp) {
        rippleColor = Color(rippleColorProp)
            .alpha(0.25)
            .toString()
    }

    if (supported) {
        return (
            <TouchableNativeFeedback
                onPress={onPress}
                disabled={disabled}
                background={TouchableNativeFeedback.Ripple(rippleColor, false)}
            >
                {React.Children.only(children)}
            </TouchableNativeFeedback >
        )
    }

    return (
        <TouchableHighlight
            onPress={onPress}
            disabled={disabled}
            underlayColor={rippleColor}
        >
            {React.Children.only(children)}
        </TouchableHighlight >
    )
}

export default TouchableRipple
