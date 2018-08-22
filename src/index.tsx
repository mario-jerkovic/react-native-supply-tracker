import * as React from 'react'
import { Provider as StoreProvider } from 'react-redux'

import { StoreState } from 'src/redux/types'
import createStore from './redux'

import Api from './redux/api'
import Root from './screens'

const store = createStore(Api.build(true))({} as StoreState)

const Application: React.SFC<{}> = () => {
    return (
        <StoreProvider store={store} >
            <Root />
        </StoreProvider >
    )
}

export default Application
