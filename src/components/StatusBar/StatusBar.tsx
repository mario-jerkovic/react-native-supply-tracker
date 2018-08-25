import * as React from 'react'
import {
    StatusBar as StatusBarNative,
    StatusBarProps,
    StatusBarStyle,
} from 'react-native'
import withTheme, { WithThemeProps } from 'src/components/styles/withTheme'

import Color from 'color'

type Props = {
}

const StatusBar: React.SFC<Props & StatusBarProps & WithThemeProps> = (props) => {
    const {
        theme,
    } = props

    let barStyle: StatusBarStyle = 'light-content'
    const backgroundColor = theme.palette.primaryVariant

    if (Color(backgroundColor).isLight()) {
        barStyle = 'dark-content'
    }

    return (
        <StatusBarNative
            animated={true}
            barStyle={barStyle}
            backgroundColor={backgroundColor}
        />
    )
}

export default withTheme<Props>(StatusBar)
