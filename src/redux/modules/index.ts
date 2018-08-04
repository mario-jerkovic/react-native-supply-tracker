import { combineReducers } from 'redux'

import sessionReducer, {
    State as SessionState,
    Actions as SessionActions,
} from './session'


export type RootState = {
    session: SessionState
}

export type RootActions =
    | SessionActions

export default combineReducers<RootState, RootActions>({
    session: sessionReducer,
})
