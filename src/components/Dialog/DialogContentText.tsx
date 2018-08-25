import * as React from 'react'
import { Text } from 'react-native'
import { material } from 'react-native-typography'
import withTheme, { WithThemeProps } from 'src/components/styles/withTheme'

type Props = {
    children: string,
}

const DialogContentText: React.SFC<Props & WithThemeProps> = (props) => {
    const {
        children,
        theme,
    } = props

    const style = [material.body1, {
        color: theme.palette.textSecondary,
    }]

    return (
        <Text style={style}>
            {children}
        </Text >
    )
}

export default withTheme<Props>(DialogContentText)
