import * as React from 'react'
import { Provider as StoreProvider } from 'react-redux'

import { StoreState } from 'src/redux/types'
import createStore from './redux'

import Api from './redux/api'
import Root from './screens'

const store = createStore(Api.build())({} as StoreState)

export default function Application() {
    return (
        <StoreProvider store={store} >
            <Root screenProps={{ test: 'test' }} />
        </StoreProvider >
    )
}
