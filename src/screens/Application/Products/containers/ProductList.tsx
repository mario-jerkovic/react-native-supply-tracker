import * as React from 'react'
import {
    FlatList,
    ListRenderItemInfo,
} from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import { connect } from 'react-redux'

import { getProductsWithLatestSupply } from 'src/redux/modules'
import { StoreState } from 'src/redux/types'

import ProductListComponent from '../components/ProductList'
import ProductListItemComponent from '../components/ProductListItem'

type Props = {
    products: ReturnType<typeof getProductsWithLatestSupply>,
    navigation: NavigationScreenProp<any, any>,
}

class ProductListContainer extends React.Component<Props> {
    public render() {
        const {
            products,
        } = this.props

        return (
            <ProductListComponent onFabPress={this.handleFabPress}>
                <FlatList
                    data={products}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                />
            </ProductListComponent >
        )
    }

    private keyExtractor = (item: Props['products'][0]) => {
        return `${item.id}-${item.supply.id}`
    }

    private renderItem = (info: ListRenderItemInfo<Props['products'][0]>) => (
        <ProductListItemComponent
            name={info.item.name}
            quantity={info.item.supply.amount}
            onPress={this.handleListItemPress(info.item.id, info.item.name)}
        />
    )

    private handleFabPress = () => {
        this.props.navigation.navigate('ProductNew')
    }

    private handleListItemPress = (productId: string, productName: string) => () => {
        this.props.navigation.navigate('ProductSell', {
            productId,
            productName,
        })
    }
}

export default connect(
    (state: StoreState) => ({
        products: getProductsWithLatestSupply(state),
    }),
    null,
)(ProductListContainer)
