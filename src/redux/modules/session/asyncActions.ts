import Api from 'src/redux/api'
import { StoreDispatcher, StoreState } from 'src/redux/types'

import * as actions from './actions'

export function loadGoogleUser() {
    return async (dispatch: StoreDispatcher, getState: () => StoreState, api: Api) => {
        dispatch(actions.loadUser.request())

        try {
            const user = await api.authentication.getCurrentUser()

            if (!user) {
                dispatch(actions.setLoading(false))
            } else {
                dispatch(actions.loadUser.success(user))
            }
        } catch (error) {
            dispatch(actions.loadUser.failure(Error('Error: loadUser @TODO')))
        }
    }
}

export function loadGoogleSession(silently: boolean) {
    return async (dispatch: StoreDispatcher, getState: () => StoreState, api: Api) => {
        dispatch(actions.loadSession.request())

        try {
            const accessToken = await api.authentication.signIn(silently)

            if (!accessToken) {
                dispatch(actions.setLoading(false))
            } else {
                // api.storage.accessToken = accessToken

                dispatch(actions.loadSession.success(accessToken))
                dispatch(loadGoogleUser())
            }
        } catch (error) {
            dispatch(actions.loadSession.failure(Error('Error: loadSession @TODO')))
        }
    }
}
