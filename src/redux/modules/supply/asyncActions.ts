import Api from '../../api'
import { StoreDispatcher, StoreState } from '../../index'

import * as actions from './actions'

export function getSupplies() {
    return async (dispatch: StoreDispatcher, getState: () => StoreState, api: Api) => {
        dispatch(actions.getSupplies.request())

        try {
            const supplies = await api.storage.getData()

            dispatch(actions.getSupplies.success(supplies))
        } catch (e) {
            dispatch(actions.getSupplies.failure(Error('Error: getSupplies @TODO')))
        }
    }
}
