import { combineReducers } from 'redux'

import sessionReducer, {
    Actions as SessionActions,
    State as SessionState,
} from './session'

import supplyReducer, {
    Actions as SupplyActions,
    State as SupplyState,
} from './supply'

export type RootState = {
    session: SessionState,
    supply: SupplyState,
}

export type RootActions =
    | SessionActions
    | SupplyActions

export default combineReducers<RootState, RootActions>({
    session: sessionReducer,
    supply: supplyReducer,
})
