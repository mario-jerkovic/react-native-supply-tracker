import { createStackNavigator } from 'react-navigation'

import HomeScreen from './Home'

const ApplicationNavigation = createStackNavigator(
    {
        Home: HomeScreen,
    },
    {
        navigationOptions: ({ navigation, screenProps }) => {
            return {}
        },
    })

export default ApplicationNavigation
