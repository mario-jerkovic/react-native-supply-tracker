import * as React from 'react'
import { StyleSheet, Text, TextStyle, View } from 'react-native'
import { material } from 'react-native-typography'
import withTheme, { WithThemeProps } from 'src/components/styles/withTheme'

type Props = {
    children: string,
}

const styles = StyleSheet.create({
    root: {
        paddingTop: 24,
        paddingBottom: 20,
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
})

const DialogTitle: React.SFC<Props & WithThemeProps> = (props) => {
    const {
        children,
        theme,
    } = props

    const textStyles = [material.title, {
        color: theme.palette.textPrimary,
    }]

    return (
        <View style={styles.root} >
            <Text style={textStyles} >
                {children}
            </Text >
        </View >
    )
}

export default withTheme<Props>(DialogTitle)
