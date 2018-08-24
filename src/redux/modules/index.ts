import { combineReducers } from 'redux'

import globalLoaderReducer from './globalLoader'
import {
    Actions as GlobalLoaderActions,
    State as GlobalLoaderState,
} from './globalLoader/types'
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
    globalLoader: GlobalLoaderState,
    inventory: InventoryState,
    session: SessionState,
}

export type RootActions =
    | GlobalLoaderActions
    | InventoryActions
    | SessionActions

export default combineReducers<RootState, RootActions>({
    globalLoader: globalLoaderReducer,
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

export function getProductsWithLatestSupply(state: RootState) {
    return fromInventory.getProductsWithLatestSupply(state.inventory)
}

export function getProductById(productId: string, state: RootState) {
    return fromInventory.getProductById(productId, state.inventory)
}

export function getProductByIdWithLatestSupply(productId: string, state: RootState) {
    return fromInventory.getProductByIdWithLatestSupply(productId, state.inventory)
}
