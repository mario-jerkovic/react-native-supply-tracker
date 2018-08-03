// @flow
import * as React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'

type Props = {
  email: string,
  fullName: string,
  profileImage?: string
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 32,
  },
  infoContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  fullNameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  emailText: {
    fontSize: 12,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
})

export default function IntroUserControl(props: Props) {
  const {
    email,
    fullName,
    profileImage,
  } = props

  const source = {
    uri: profileImage,
  }

  return (
    <View style={styles.container} >
      <Image
        style={styles.profileImage}
        source={source}
      />
      <View style={styles.infoContainer} >
        <Text style={styles.fullNameText} >
          {fullName}
        </Text >
        <Text style={styles.emailText} >
          {email}
        </Text >
      </View >
    </View >
  )
}

IntroUserControl.defaultProps = {
  profileImage: null,
}
