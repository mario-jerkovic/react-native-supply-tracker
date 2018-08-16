import {
    applyMiddleware,
    compose,
    createStore,
} from 'redux'
import thunkMiddleware from 'redux-thunk'

import {
    Store,
    StoreDispatcher,
    StoreState,
} from 'src/redux/types'
import Api from './api'
import rootReducer, {
    RootActions,
    RootState,
} from './modules'

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
