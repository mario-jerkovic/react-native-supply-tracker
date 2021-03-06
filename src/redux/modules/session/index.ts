import { getType } from 'typesafe-actions'

import * as actions from './actions'
import { Actions, State } from './types'

const initialState: State = {
    loading: false,
    user: null,
    accessToken: undefined,
}

export default (state: State = initialState, action: Actions) => {
    switch (action.type) {
        case getType(actions.loadSession.request):
            return {
                ...state,
                loading: true,
            }
        case getType(actions.loadSession.success):
            return {
                ...state,
                loading: false,
                user: action.payload.user,
                accessToken: action.payload.accessToken,
            }
        case getType(actions.loadSession.failure):
            return {
                ...state,
                loading: false,
                user: null,
                accessToken: undefined,
            }
        default:
            return state
    }
}

export function getUser(state: State) {
    if (!state.user) {
        return null
    }

    return {
        email: state.user.email,
        fullName: `${state.user.firstName} ${state.user.lastName}`,
        profileImage: state.user.photo,
    }
}

export function getLoading(state: State) {
    return state.loading
}
