import { createAction, handleActions } from 'redux-actions'
import fetch from 'isomorphic-fetch'

//
// Constants
//
const REQUEST_HUB_POSTS = 'posts/REQUEST_HUB_POSTS'
const RECEIVE_HUB_POSTS = 'posts/RECEIVE_HUB_POSTS'

//
// Reducer
//
const initialState = []

const reducer = handleActions({
  [REQUEST_HUB_POSTS]: (state, { payload }) => {
    console.log('inside the REQ_HUB_POSTS reducer..')
    return state
  },
  [RECEIVE_HUB_POSTS]: (state, { payload }) => {
    // TODO: we should be joining the posts array etc...?
    console.log('inside the REC_HUB_POSTS reducer.., got', payload.json.length, 'posts')
    let posts = payload.json
    return posts
  }
}, initialState)

export default reducer

//
// Action Creators
//
const requestPosts = createAction(REQUEST_HUB_POSTS, (hubID) => ({ hubID }))

const receivePosts = createAction(RECEIVE_HUB_POSTS, (hubID, json) => ({
  hubID,
  json
}))

export const fetchPosts = hubID => {
  return dispatch => {
    dispatch(requestPosts(hubID))
    return fetch(`https://api.pressly.com/hubs/${hubID}/stream`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(hubID, json)))
  }
}
