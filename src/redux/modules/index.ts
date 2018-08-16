import { combineReducers } from 'redux'

import sessionReducer, * as fromSession from './session'
import {
    Actions as SessionActions,
    State as SessionState,
} from './session/types'

export type RootState = {
    session: SessionState,
}

export type RootActions =
    | SessionActions

export default combineReducers<RootState, RootActions>({
    session: sessionReducer,
})

export const getUser = (state: RootState) => {
    return fromSession.getUser(state.session)
}
