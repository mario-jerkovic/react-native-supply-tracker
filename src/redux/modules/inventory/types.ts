import { ActionType } from 'typesafe-actions'

import * as actions from './actions'

export type Supply = {
    id: string,
    amount: number,
    createdTime: string,
}

export type Product = {
    id: string,
    name: string,
    supplies: Supply[],
    photo: string | null,
}

export type State = {
    loading: boolean,
    products: Product[],
}

export type Actions = ActionType<typeof actions>
