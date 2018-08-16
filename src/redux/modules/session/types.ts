import { ActionType } from 'typesafe-actions'

import * as actions from './actions'

export type User = {
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    photo: string | null,
}

export type State = {
    loading: boolean,
    user?: User,
    accessToken?: string,
}

export type Actions = ActionType<typeof actions>
