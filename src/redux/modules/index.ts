import { combineReducers } from 'redux'
import { StateType } from 'typesafe-actions'

import userReducer from './user/reducer'

export const rootReducer = combineReducers({
    user: userReducer,
})

export type RootState = StateType<typeof rootReducer>
