/* eslint-disable no-undef,no-underscore-dangle */
import {
  compose,
  createStore,
  applyMiddleware,
} from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducers from './modules'

export default function configureStore() {
  const enhancers = []
  const middleware = [thunkMiddleware]
  let composeEnhancers = null

  if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  }

  return createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers,
    ),
  )
}
