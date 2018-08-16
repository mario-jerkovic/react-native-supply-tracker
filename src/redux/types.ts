import {
    Dispatch as BaseDispatch,
    Store as BaseStore,
} from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { StateType } from 'typesafe-actions'

import Api from 'src/redux/api'
import rootReducer, { RootActions } from 'src/redux/modules'

export type Store = BaseStore<StoreState, RootActions>

export type StoreState = StateType<typeof rootReducer>

export type StoreDispatcher = BaseDispatch<RootActions> & ThunkDispatch<StoreState, Api, RootActions>
