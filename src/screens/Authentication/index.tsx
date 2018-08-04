import { createStackNavigator } from 'react-navigation'

import SignInScreen from './SignIn'

export default createStackNavigator({
  SignIn: SignInScreen,
}, { navigationOptions: { header: null } })
