import { createStackNavigator } from 'react-navigation'

import ProductNewScreen from './ProductNew'
import ProductsScreen from './Products'
import ProductSellScreen from './ProductSell'

import screen from '../screen'

const ApplicationNavigation = createStackNavigator(
    {
        Products: screen(ProductsScreen, () => ({
            title: 'Products',
        })),
        ProductNew: screen(ProductNewScreen, () => ({
            title: 'New product',
        })),
        ProductSell: screen(ProductSellScreen, ({ navigation }) => ({
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
