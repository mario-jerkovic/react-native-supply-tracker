// @flow
import { combineReducers } from 'redux'

import authReducer from './auth'
import type { State as AuthState } from './auth'


// console.log(combineReducers)
export default combineReducers({
  auth: authReducer
})

export type AppState = {
  auth: AuthState
}
