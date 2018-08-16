import * as React from 'react'
import { StyleSheet, View } from 'react-native'

type Props = {
    children: React.ReactNode[],
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    action: {
        marginVertical: 0,
        marginHorizontal: 4,
    },
})

const CardActions: React.SFC<Props> = (props) => {
    return (
        <View style={styles.root} >
            {React.Children.map(props.children, ((child) => {
                if (!React.isValidElement(child)) {
                    return
                }

                return (
                    <View style={styles.action} >
                        {child}
                    </View >
                )
            }))}
        </View >
    )
}

export default CardActions
