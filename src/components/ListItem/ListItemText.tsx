import * as React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'
import { material } from 'react-native-typography'
import withTheme, { WithThemeProps } from 'src/components/styles/withTheme'

type Props = {
    primary: string,
    secondary?: string,
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 0,
    },
    firstLine: {
        flexDirection: 'row',
    },
    primaryTextContainer: {
        flex: 1,
    },
})

const ListItemText: React.SFC<Props & WithThemeProps> = (props) => {
    const {
        primary,
        secondary,
        theme,
    } = props

    const primaryTextStyle = [material.subheading, {
        color: theme.palette.textPrimary,
    }]
    const secondaryTextStyle = [material.caption, {
        color: theme.palette.textSecondary,
    }]

    return (
        <View style={styles.root} >
            <View style={styles.firstLine} >
                <View style={styles.primaryTextContainer} >
                    <Text style={primaryTextStyle} >
                        {primary}
                    </Text >
                </View >
            </View >
            {secondary && (
                <View >
                    <Text style={secondaryTextStyle} >
                        {secondary}
                    </Text >
                </View >
            )}
        </View >
    )
}

export default withTheme<Props>(ListItemText)
