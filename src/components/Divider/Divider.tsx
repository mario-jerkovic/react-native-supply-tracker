import * as React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import withTheme, { WithThemeProps } from 'src/components/styles/withTheme'

import Color from 'color'

type Props = {
    inset?: boolean,
}

const styles = StyleSheet.create({
    root: {
        height: StyleSheet.hairlineWidth,
    },
})

const Divider: React.SFC<Props & WithThemeProps> = (props) => {
    const {
        inset,
        theme,
    } = props

    const calcStyle = [styles.root, {
        marginLeft: inset ? 72 : 0,
        backgroundColor: Color(theme.palette.textPrimary)
            .alpha(0.12)
            .toString(),
    }]

    return (
        <View style={calcStyle} />
    )
}

Divider.defaultProps = {
    inset: false,
}

export default withTheme<Props>(Divider)
