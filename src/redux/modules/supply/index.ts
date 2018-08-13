import { ActionType, getType } from 'typesafe-actions'

import { Product } from './models'

import * as actions from './actions'

export type Actions = ActionType<typeof actions>

export type State = {
    loading: boolean,
    products?: Product[]
}

const initialState: State = {
    loading: false,
    products: undefined,
}

export default (state: State = initialState, action: Actions) => {
    switch (action.type) {
        case getType(actions.setLoading):
            return {
                ...state,
                loading: action.payload.loading,
            }
        case getType(actions.getSupplies.request):
        case getType(actions.saveSupplies.request):
            return {
                ...state,
                loading: true,
            }
        case getType(actions.getSupplies.success):
            return {
                ...state,
                loading: false,
                products: [...action.payload],
            }
        case getType(actions.saveSupplies.success):
            return {
                ...state,
                loading: false,
            }
        default:
            return state
    }
}
