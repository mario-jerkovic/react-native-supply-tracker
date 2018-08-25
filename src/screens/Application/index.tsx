import { createStackNavigator } from 'react-navigation'

import ProductScreen from './Product'
import ProductsScreen from './Products'

import screen from '../screen'

const ApplicationNavigation = createStackNavigator(
    {
        Products: screen(ProductsScreen, () => ({
            title: 'Products',
        })),
        Product: screen(ProductScreen, ({ navigation }) => ({
            title: navigation.getParam('productName', 'Product'),
        })),
    },
    {
        initialRouteName: 'Products',
        navigationOptions: ({ navigation, screenProps }) => {
            return {}
        },
    },
)

export default ApplicationNavigation
