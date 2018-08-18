import Api from 'src/redux/api'
import { StoreDispatcher, StoreState } from 'src/redux/types'

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
            dispatch(actions.loadProducts.failure(Error('')))
        }
    }
}
