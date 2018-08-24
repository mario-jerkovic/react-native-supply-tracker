import * as React from 'react'
import {
    Platform,
    TouchableHighlight,
    TouchableNativeFeedback,
    View,
    ViewStyle,
} from 'react-native'

const ANDROID_VERSION_LOLLIPOP = 21

const supported = Platform.OS === 'android' && Platform.Version >= ANDROID_VERSION_LOLLIPOP

type Props = {
    disabled?: boolean,
    onPress: () => void,
    onLongPress?: () => void
    rippleColor?: string,
    children: React.ReactNode,
    style?: ViewStyle,
}

const TouchableRipple: React.SFC<Props> = (props) => {
    const {
        style,
        disabled: disabledProp,
        rippleColor,
        children,
        // https://github.com/palantir/tslint/issues/3870
        // @ts-ignore
        ...other,
    } = props

    const disabled = disabledProp || !other.onPress

    if (supported) {
        return (
            <View style={style} >
                <TouchableNativeFeedback
                    {...other}
                    disabled={disabled}
                    background={TouchableNativeFeedback.Ripple(rippleColor, false)}
                >
                    {React.Children.only(children)}
                </TouchableNativeFeedback >
            </View >
        )
    }

    return (
        <TouchableHighlight
            {...other}
            disabled={disabled}
            style={style}
            underlayColor={rippleColor}
        >
            {React.Children.only(children)}
        </TouchableHighlight >
    )
}

export default TouchableRipple
