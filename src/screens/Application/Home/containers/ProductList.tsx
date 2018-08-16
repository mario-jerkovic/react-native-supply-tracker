import * as React from 'react'
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
                {products.map((product) => (
                    <ProductListItemComponent
                        key={product.id}
                        name={product.name}
                        image={product.image}
                        quantity={product.supply.amount}
                    />
                ))}
            </ProductListComponent >
        )
    }
}

export default connect(
    (state: StoreState) => ({
        products: getLatestProductsSupply(state),
    }),
    null,
)(ProductListContainer)
