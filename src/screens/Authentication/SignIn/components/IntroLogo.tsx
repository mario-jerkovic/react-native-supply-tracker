import * as React from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
  },
  logo: {
    width: 60,
    height: 60,
  },
  infoContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
  },
  subTitle: {
    fontSize: 14,
  },
})

export default function IntroLogoComponent() {
  return (
    <View style={styles.container} >
      <Image
        source={require('../../../../assets/googleLogo.png')}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.infoContainer} >
        <Text style={styles.title} >
          Google Identity
        </Text >
        <Text style={styles.subTitle} >
          Android Sign in With Google
        </Text >
      </View >
    </View >
  )
}
