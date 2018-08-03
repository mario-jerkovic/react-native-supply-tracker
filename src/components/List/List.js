// @flow
import * as React from 'react'
import { FlatList } from 'react-native'

type DataProp = {
  key: string,
  title: string,
}

type Props = {
  data: DataProp[],
  children: (item: DataProp) => React.Element<any>
}

export default function List(props: Props) {
  const {
    data,
    children,
  } = props

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => children(item)}
    />
  )
}
