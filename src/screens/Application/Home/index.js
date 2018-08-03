// @flow
import * as React from 'react'

import { List, ListItem } from '../../../components/List'

import demoData from './demo'

const data = demoData.items.map(item => ({
  key: item.name,
  title: item.name,
}))

type Props = {
  navigation: {
    navigate: (screeName: string) => void
  }
}

export default function Home(props: Props) {
  return (
    <List data={data} >
      {item => (
        <ListItem
          text={item.title}
          onPress={() => {
            props.navigation.navigate('Demo')
          }}
        />
      )}
    </List >
  )
}
