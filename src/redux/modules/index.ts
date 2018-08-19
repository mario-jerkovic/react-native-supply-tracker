import { combineReducers } from 'redux'

import inventoryReducer, * as fromInventory from './inventory'
import {
    Actions as InventoryActions,
    State as InventoryState,
} from './inventory/types'
import sessionReducer, * as fromSession from './session'
import {
    Actions as SessionActions,
    State as SessionState,
} from './session/types'

export type RootState = {
    inventory: InventoryState,
    session: SessionState,
}

export type RootActions =
    | InventoryActions
    | SessionActions

export default combineReducers<RootState, RootActions>({
    inventory: inventoryReducer,
    session: sessionReducer,
})

export function getUser(state: RootState) {
    return fromSession.getUser(state.session)
}

export function getAppLoading(state: RootState) {
    return (
        fromSession.getLoading(state.session)
        ||
        fromInventory.getLoading(state.inventory)
    )
}

export function getLatestProductsSupply(state: RootState) {
    return fromInventory.getLatestProductsSupply(state.inventory)
}

export function getProductById(productId: string, state: RootState) {
    return fromInventory.getProductById(productId, state.inventory)
}
