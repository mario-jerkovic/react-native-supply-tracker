import * as React from 'react'
import {
    ScrollView,
    StyleSheet,
    View,
} from 'react-native'

type Props = {
    children?: React.ReactNode,
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    wrapper: {
        flex: 1,
        flexDirection: 'column',
    },
    controlsContainer: {
        flex: 2,
    },
})

const SignInViewComponent: React.SFC<Props> = (props) => {
    const {
        children,
    } = props

    return (
        <ScrollView contentContainerStyle={styles.container} >
            <View style={styles.wrapper} >
                {children}
            </View >
        </ScrollView >
    )
}

export default SignInViewComponent
