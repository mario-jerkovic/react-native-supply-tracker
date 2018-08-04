import * as React from 'react'
import { Provider } from 'react-redux'

import createStore from './redux'

import Root from './screens'

const store = createStore()

export default function Application() {
    return (
        <Provider store={store}>
            <Root />
        </Provider>
    )
}
