import Api from 'src/redux/api'
import {
    hideLoader,
    showLoader,
} from 'src/redux/modules/globalLoader/actions'
import {
    StoreDispatcher,
    StoreState,
} from 'src/redux/types'
import { updateObjectInArray } from 'src/utils/array'
import clone from 'src/utils/clone'
import guid from 'src/utils/guid'

import * as actions from './actions'

export function loadProducts() {
    return async (dispatch: StoreDispatcher, getState: () => StoreState, api: Api) => {
        dispatch(actions.loadProducts.request())

        try {
            api.storage.accessToken = getState().session.accessToken
            const products = await api.storage.getData()

            if (!products) {
                dispatch(actions.loadProducts.failure(Error('')))
            } else {
                dispatch(actions.loadProducts.success(products))
            }
        } catch (error) {
            // tslint:disable-next-line no-console
            console.error('loadProducts error: ', error)
        }
    }
}

export function updateProductSupply(productId: string, supplyAmount: number) {
    return async (dispatch: StoreDispatcher, getState: () => StoreState, api: Api) => {
        dispatch(showLoader('Saving changes...'))

        try {
            const {
                inventory: {
                    products,
                },
            } = getState()

            const productIndex = products.findIndex((product) => (
                product.id === productId
            ))

            const productClone = clone(products[productIndex])

            productClone.supplies.push({
                id: guid(),
                amount: supplyAmount,
                createdTime: new Date().toISOString(),
            })

            await api.storage.setData(updateObjectInArray(products, productIndex, productClone))

            await dispatch(loadProducts())

            dispatch(hideLoader())
        } catch (error) {
            // tslint:disable-next-line no-console
            console.error('updateProductSupply error: ', error)
        }
    }
}
