// @flow
import * as React from 'react'
import { View, StyleSheet, ProgressBarAndroid } from 'react-native'

type Props = {
  animating: boolean
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    width: '33%',
  },
})

export default function IntroLoading(props: Props) {
  const { animating } = props
  return (
    <View style={styles.container} >
      <ProgressBarAndroid
        animating={animating}
        style={styles.loading}
        styleAttr="Horizontal"
      />
    </View >
  )
}
