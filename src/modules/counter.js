import { createAction, handleActions } from 'redux-actions'

//
// Constants
//
const INCREMENT = 'counter/INCREMENT'

//
// Actions
//
export const increment = createAction(INCREMENT, (value = 1) => value)

//
// Reducer
//
const reducer = handleActions({
  [INCREMENT]: (state, { payload }) => state + payload
}, 1)

export default reducer
