import * as React from 'react'

import createTheme, { Theme } from './createTheme'
import lightTheme from './themes/light'

const { Consumer, Provider } = React.createContext<Theme>(createTheme(lightTheme))

export const ThemeConsumer = Consumer
export const ThemeProvider = Provider
