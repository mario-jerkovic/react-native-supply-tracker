// @flow
import * as React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'

type Props = {
  children?: React.Node
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

export default function SignIn(props: Props) {
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

SignIn.defaultProps = {
  children: null,
}
