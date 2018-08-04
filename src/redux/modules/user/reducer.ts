import {
    getType,
    ActionType,
} from 'typesafe-actions'

import { User } from './types'
import * as user from './actions'

export type UserAction = ActionType<typeof user>

const initialState: User | null = null

export default function reducer(state: User = initialState, action: UserAction) {
    switch (action.type) {
        case getType(user.loadGoogleUser):
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}
