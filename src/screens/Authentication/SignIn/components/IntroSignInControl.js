// @flow
import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { GoogleSigninButton } from 'react-native-google-signin'

type Props = {
  onPress: () => any
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 32,
  },
  button: {
    width: 312,
    height: 48,
  },
})

export default function IntroSignInControl(props: Props) {
  const { onPress } = props

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
