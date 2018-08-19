import * as React from 'react'
import { Text, View } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import { connect } from 'react-redux'
import { getProductById } from 'src/redux/modules'
import { StoreState } from 'src/redux/types'

type Props = {
    product: ReturnType<typeof getProductById>
    navigation: NavigationScreenProp<any, any>,
}

class ProductContainer extends React.Component<Props> {
    public render() {
        return (
            <View >
                <Text>
                    {this.props.product.name}
                </Text>
            </View >
        )
    }
}

export default connect(
    (state: StoreState, ownProps: Props) => ({
        product: getProductById(ownProps.navigation.getParam('productId'), state),
    }),
)(ProductContainer)
