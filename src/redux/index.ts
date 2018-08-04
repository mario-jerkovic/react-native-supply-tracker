import {
    compose,
    createStore,
    applyMiddleware,
    Store as BaseStore,
    Dispatch as BaseDispatch,
} from 'redux'
import { StateType } from 'typesafe-actions'
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk'

import rootReducer, { RootActions } from './modules'

export type Dispatch = BaseDispatch<RootActions> & ThunkDispatch<StoreState, void, RootActions>;
export type Store = BaseStore<StoreState, RootActions>;
export type StoreState = StateType<typeof rootReducer>;

export default function configureStore() {
    const enhancers: any[] = []
    const middleware = [thunkMiddleware]
    let composeEnhancers = null

    if (__DEV__) {
        // @ts-ignore
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    }

    return createStore(
        rootReducer,
        composeEnhancers(
            applyMiddleware(...middleware),
            ...enhancers,
        ),
    )
}
