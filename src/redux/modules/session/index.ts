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
        case getType(actions.setLoading):
            return {
                ...state,
                loading: action.payload.loading,
            }
        case getType(actions.loadUser.request):
        case getType(actions.loadSession.request):
            return {
                ...state,
                loading: true,
            }
        case getType(actions.loadUser.success):
            return {
                ...state,
                loading: false,
                user: action.payload,
            }
        case getType(actions.loadSession.success):
            return {
                ...state,
                loading: false,
                accessToken: action.payload,
            }
        default:
            return state
    }
}

export const getUser = (state: State) => {
    if (!state.user) {
        return null
    }

    return {
        email: state.user.email,
        fullName: `${state.user.firstName} ${state.user.lastName}`,
        profileImage: state.user.photo,
    }
}
