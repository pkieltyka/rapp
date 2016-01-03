import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from 'modules'

const loggerMiddleware = createLogger({
  predicate: (getState, action) => process.env.NODE_ENV === `development`
})

export default function configureStore(initialState) {
  let createStoreWithMiddleware
  const middleware = applyMiddleware(thunkMiddleware, loggerMiddleware)

  if (__DEBUG__) {
    createStoreWithMiddleware = compose(
      middleware,
      window.devToolsExtension
        ? window.devToolsExtension()
        : require('containers/DevTools').default.instrument()
    )
  } else {
    createStoreWithMiddleware = compose(middleware)
  }

  const store = createStoreWithMiddleware(createStore)(
    rootReducer, initialState
  )
  if (module.hot) {
    module.hot.accept('modules', () => {
      const nextRootReducer = require('modules').default
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
