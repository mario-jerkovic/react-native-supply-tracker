import {
    applyMiddleware,
    compose,
    createStore,
    Dispatch as BaseDispatch,
    Store as BaseStore,
} from 'redux'
import { StateType } from 'typesafe-actions'
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk'

import Api from './api'
import rootReducer, { RootActions, RootState } from './modules'

export type Store = BaseStore<StoreState, RootActions>;
export type StoreState = StateType<typeof rootReducer>;
export type StoreDispatcher = BaseDispatch<RootActions> & ThunkDispatch<StoreState, Api, RootActions>;

export default function configureStore(api: Api) {
    return (initialState: StoreState): Store => {
        const enhancers: any[] = []
        let composeEnhancers = null

        if (__DEV__) {
            // @ts-ignore
            composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        }

        return createStore<RootState, RootActions, StoreDispatcher, void>(
            rootReducer,
            initialState,
            composeEnhancers(
                applyMiddleware(...[thunkMiddleware.withExtraArgument(api)]),
                ...enhancers,
            ),
        )
    }
}
