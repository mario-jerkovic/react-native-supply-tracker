import Api from 'src/redux/api'
import { StoreDispatcher, StoreState } from 'src/redux/types'

import * as actions from './actions'

export function loadGoogleSession(silently: boolean, successCb?: () => void) {
    return async (dispatch: StoreDispatcher, getState: () => StoreState, api: Api) => {
        dispatch(actions.loadSession.request())

        try {
            const accessToken = await api.authentication.signIn(silently)

            if (!accessToken) {
                dispatch(actions.loadSession.failure(Error('Error: no accessToken @TODO')))
            } else {
                const user = await api.authentication.getCurrentUser()
                // api.storage.accessToken = accessToken

                dispatch(actions.loadSession.success({ accessToken, user }))

                if (successCb) {
                    successCb()
                }
            }
        } catch (error) {
            dispatch(actions.loadSession.failure(Error('Error: loadSession @TODO')))
        }
    }
}
