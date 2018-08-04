import { createSwitchNavigator } from 'react-navigation'

import ApplicationNavigation from './Application'
import AuthenticationNavigation from './Authentication'

export default createSwitchNavigator({
  App: ApplicationNavigation,
  Auth: AuthenticationNavigation,
}, { initialRouteName: 'Auth' })
