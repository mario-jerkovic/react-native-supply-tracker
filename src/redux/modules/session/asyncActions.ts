import { StoreDispatcher, StoreState } from '../..'
import Api from '../../api'

import * as actions from './actions'

export function getGoogleUser() {
    return async (dispatch: StoreDispatcher, getState: () => StoreState, api: Api) => {
        dispatch(actions.getUser.request())

        try {
            const user = await api.authentication.getCurrentUser()

            if (!user) {
                dispatch(actions.setLoading(false))
            } else {
                dispatch(actions.getUser.success(user))
            }
        } catch (error) {
            dispatch(actions.getUser.failure(Error('Error: getGoogleUser @TODO')))
        }
    }
}

export function googleSignIn(silently: boolean) {
    return async (dispatch: StoreDispatcher, getState: () => StoreState, api: Api) => {
        dispatch(actions.signIn.request())

        try {
            const accessToken = await api.authentication.signIn(silently)

            if (!accessToken) {
                dispatch(actions.setLoading(false))
            } else {
                dispatch(actions.signIn.success(accessToken))
                dispatch(getGoogleUser())
            }
        } catch (error) {
            dispatch(actions.getUser.failure(Error('Error: googleSignIn @TODO')))
        }
    }
}
