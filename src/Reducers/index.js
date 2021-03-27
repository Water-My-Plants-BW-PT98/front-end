import {combineReducers} from 'redux'
// INDIVIDUAL REDUCERS
import {userReducer} from './userReducer'
import {plantsReducer} from './plantsReducer'

export const rootReducer = combineReducers({
      user: userReducer,
      plants: plantsReducer
})