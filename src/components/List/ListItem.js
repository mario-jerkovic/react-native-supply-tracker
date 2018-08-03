// @flow
import * as React from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native'

type Props = {
  image: ?string,
  text: string,
  onPress: ?() => void
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    height: 70,
    paddingLeft: 16,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  info: {
    paddingLeft: 20,

    paddingRight: 20,
  },
})

export default function ListItem(props: Props) {
  const {
    image,
    text,
    onPress,
  } = props

  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.SelectableBackground()}
      onPress={onPress}
    >
      <View style={styles.container} >
        <Text
          style={styles.info}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {text}
        </Text >
      </View >
    </TouchableNativeFeedback >
  )
}
