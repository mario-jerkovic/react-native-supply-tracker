import * as React from 'react'
import { createSwitchNavigator } from 'react-navigation'
import withTheme from 'src/components/styles/withTheme'

import ApplicationNavigation from './Application'
import AuthenticationNavigation from './Authentication'

const RootNavigator = createSwitchNavigator({
    App: ApplicationNavigation,
    Auth: AuthenticationNavigation,
}, { initialRouteName: 'Auth' })

export default withTheme<{}>(({ theme }) => (
    <RootNavigator screenProps={{ theme }} />
))
