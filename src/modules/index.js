import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'

import counter from './counter'
import posts from './posts'

const rootReducer = combineReducers({
  router,
  counter,
  posts
})

export default rootReducer
