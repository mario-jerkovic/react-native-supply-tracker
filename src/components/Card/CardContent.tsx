import * as React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

type Props = {
    title?: string,
    subtitle?: string,
    supportingText?: string,
}

// @TODO: Implement color palette

const styles = StyleSheet.create({
    root: {
        paddingVertical: 16,
        paddingHorizontal: 24,
    },
    gutter: {
        marginBottom: 8,
    },
    title: {
        fontSize: 24,
        color: 'rgba(0 ,0 ,0 , 0.87)',
    },
    supportingText: {
        fontSize: 14,
        color: 'rgba(0 ,0 ,0 , 0.54)',
    },
})

const CardContent: React.SFC<Props> = (props) => {
    const {
        title,
        subtitle,
        supportingText,
    } = props

    return (
        <View style={[styles.root]} >
            <Text style={[styles.title, supportingText && styles.gutter]} >
                {title}
            </Text >
            <Text style={styles.supportingText} adjustsFontSizeToFit={true} >
                {supportingText}
            </Text >
        </View >
    )
}

export default CardContent
