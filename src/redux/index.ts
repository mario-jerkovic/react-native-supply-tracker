import {
    compose,
    createStore,
    applyMiddleware,
} from 'redux'
import thunkMiddleware from 'redux-thunk'

import { rootReducer } from './modules'

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
