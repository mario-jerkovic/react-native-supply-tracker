import * as React from 'react'
import {
    StyleSheet,
    Text,
    View, ViewStyle,
} from 'react-native'

type Props = {
    primary: string,
    secondary?: string,
    style?: ViewStyle,
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 0,
    },
    textViewContainer: {},
    firstLine: {
        flexDirection: 'row',
    },
    primaryTextContainer: {
        flex: 1,
    },
    primaryText: {
        color: 'rgba(0, 0, 0, 0.87)',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 24,
    },
    secondaryText: {
        color: 'rgba(0, 0, 0, 0.54)',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
    },
})

const ListItemText: React.SFC<Props> = (props) => {
    const {
        primary,
        secondary,
        style,
    } = props

    return (
        <View style={[styles.root, style]} >
            <View style={styles.textViewContainer} >
                <View style={styles.firstLine} >
                    <View style={styles.primaryTextContainer} >
                        <Text style={styles.primaryText} >
                            {primary}
                        </Text >
                    </View >
                </View >
                {secondary && (
                    <View >
                        <Text style={styles.secondaryText} >
                            {secondary}
                        </Text >
                    </View >
                )}
            </View >
        </View >
    )
}

export default ListItemText
