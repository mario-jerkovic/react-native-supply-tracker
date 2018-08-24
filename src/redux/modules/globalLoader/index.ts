import { getType } from 'typesafe-actions'

import * as actions from './actions'
import { Actions, State } from './types'

const initialState: State = {
    loading: false,
    message: null,
}

export default (state: State = initialState, action: Actions) => {
    switch (action.type) {
        case getType(actions.showLoader):
            return {
                loading: true,
                message: action.payload.message,
            }
        case getType(actions.hideLoader):
            return {
                loading: false,
                message: null,
            }
        default:
            return state
    }
}
