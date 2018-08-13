import { StoreDispatcher, StoreState } from '../../index'

import * as actions from './actions'

export function getSupplies() {
    return async (dispatch: StoreDispatcher, getState: () => StoreState) => {
        dispatch(actions.getSupplies.request())

        try {
            const { session } = getState()

            if (!session.accessToken) {
                dispatch(actions.getSupplies.failure(Error('No access Token')))

                return
            }
        } catch (e) {

        }
    }
}
