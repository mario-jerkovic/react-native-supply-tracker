// @flow
import * as React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'

import Root from './src'
import createStore from './src/redux'
// eslint-disable-next-line import/extensions
import { name as appName } from './app.json'

const store = createStore()

function Application() {
  return (
    <Provider store={store} >
      <Root />
    </Provider >
  )
}

AppRegistry.registerComponent(appName, () => Application)
