import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { GoogleSigninButton } from 'react-native-google-signin'

type Props = {
    onPress: () => any,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 32,
    },
    button: {
        width: 300,
        height: 48,
    },
})

const IntroSignInControlComponent: React.SFC<Props> = (props) => {
    const {
        onPress,
    } = props

    return (
        <View style={styles.container} >
            <GoogleSigninButton
                style={styles.button}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={onPress}
            />
        </View >
    )
}

export default IntroSignInControlComponent
