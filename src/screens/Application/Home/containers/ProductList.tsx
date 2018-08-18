import * as React from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'
import { connect } from 'react-redux'

import { getLatestProductsSupply } from 'src/redux/modules'
import { StoreState } from 'src/redux/types'

import ProductListComponent from '../components/ProductList'
import ProductListItemComponent from '../components/ProductListItem'

type Props = {
    products: ReturnType<typeof getLatestProductsSupply>,
}

class ProductListContainer extends React.Component<Props> {
    public render() {
        const {
            products,
        } = this.props

        return (
            <ProductListComponent >
                <FlatList
                    data={products}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                />
            </ProductListComponent >
        )
    }

    private keyExtractor = (item: Props['products'][0]) => {
        return item.id
    }

    private renderItem = (info: ListRenderItemInfo<Props['products'][0]>) => (
        <ProductListItemComponent
            name={info.item.name}
            quantity={info.item.supply.amount}
        />
    )
}

export default connect(
    (state: StoreState) => ({
        products: getLatestProductsSupply(state),
    }),
    null,
)(ProductListContainer)
