import { createStackNavigator } from 'react-navigation'

import SignInScreen from './SignIn'

const AuthenticationNavigation = createStackNavigator({
    SignIn: SignInScreen,
}, { navigationOptions: { header: null } })

export default AuthenticationNavigation
