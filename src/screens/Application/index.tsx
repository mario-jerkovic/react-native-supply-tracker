import { createStackNavigator } from 'react-navigation'

import HomeScreen from './Home'

const ApplicationNavigation = createStackNavigator({
    Home: HomeScreen,
})

export default ApplicationNavigation
