import { ActionType } from 'typesafe-actions'

import * as actions from './actions'

export type State = {
    loading: boolean,
    message: string,
}

export type Actions = ActionType<typeof actions>
