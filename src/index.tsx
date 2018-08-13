import * as React from 'react'
import { Provider } from 'react-redux'

import createStore, { StoreState } from './redux'

import Root from './screens'
import Api from './redux/api'

const store = createStore(Api.build())({} as StoreState)

export default function Application() {
    return (
        <Provider store={store} >
            <Root />
        </Provider >
    )
}
