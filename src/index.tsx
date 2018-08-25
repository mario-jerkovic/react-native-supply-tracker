import * as React from 'react'
import { Provider as StoreProvider } from 'react-redux'
import createTheme from 'src/components/styles/createTheme'

import { StoreState } from 'src/redux/types'

import { ThemeProvider } from './components/styles/themeContext'
import lightTheme from './components/styles/themes/light'
import createStore from './redux'

import Api from './redux/api'
import Root from './screens'

const store = createStore(Api.build(true))({} as StoreState)
const uiTheme = createTheme(lightTheme)

const Application: React.SFC<{}> = () => {
    return (
        <StoreProvider store={store} >
            <ThemeProvider value={uiTheme}>
                <Root/>
            </ThemeProvider>
        </StoreProvider >
    )
}

export default Application
