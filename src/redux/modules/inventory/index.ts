import { getType } from 'typesafe-actions'

import * as actions from './actions'
import { Actions, State } from './types'

const initialState: State = {
    loading: false,
    products: [],
}

export default (state: State = initialState, action: Actions) => {
    switch (action.type) {
        case getType(actions.loadProducts.request):
            return {
                ...state,
                loading: true,
            }
        case getType(actions.loadProducts.success):
            return {
                ...state,
                loading: false,
                products: action.payload,
            }
        case getType(actions.loadProducts.failure):
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}

export function getLatestProductsSupply(state: State) {
    return state.products.map((product) => ({
        id: product.id,
        name: product.name,
        image: product.photo,
        supply: product.supplies.sort((a, b) => (
            new Date(a.createdTime).getTime() - new Date(b.createdTime).getTime()
        ))[0],
    }))
}

export function getProductById(productId: string, state: State) {
    return state.products.find((product) => (
        product.id === productId
    ))
}

export function getLoading(state: State) {
    return state.loading
}
