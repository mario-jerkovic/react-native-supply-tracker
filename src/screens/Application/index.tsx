import { createStackNavigator } from 'react-navigation'

import ProductScreen from './Product'
import ProductsScreen from './Products'

const ApplicationNavigation = createStackNavigator(
    {
        Products: ProductsScreen,
        Product: ProductScreen,
    },
    {
        initialRouteName: 'Products',
        navigationOptions: ({ navigation, screenProps }) => {
            return {}
        },
    },
)

export default ApplicationNavigation
