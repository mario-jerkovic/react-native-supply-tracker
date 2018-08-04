import { Dispatch } from '../..'
import GoogleAuthentication from '../../api/GoogleAuthentication'

import * as actions from './actions'

const googleAuth = new GoogleAuthentication()

export function getGoogleUser() {
    return async (dispatch: Dispatch) => {
        dispatch(actions.getUser.request())

        try {
            const user = await googleAuth.getUser()

            if (!user) {
                dispatch(actions.setLoading(false))

            } else {
                dispatch(actions.getUser.success({
                    email: user.email,
                    firstName: user.givenName,
                    lastName: user.familyName,
                    photo: user.photo,
                }))
            }
        } catch (e) {
            dispatch(actions.getUser.failure(Error('@TODO: User failure')))
        }
    }
}

export function googleSignIn() {
    return async (dispatch: Dispatch) => {
        dispatch(actions.signIn.request())

        try {
            const isSignedIn = await googleAuth.signIn()

            if (!isSignedIn) {
                dispatch(actions.setLoading(false))
            } else {
                dispatch(getGoogleUser())
            }
        } catch (e) {
            dispatch(actions.getUser.failure(Error('@TODO: User failure')))
        }
    }
}
