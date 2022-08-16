import { combineReducers } from 'redux'
import { userAPI } from '../services/userService'
import { authAPI } from '../services/authService'
import authSlice from './slices/auth'

export const rootReducer = combineReducers({
  auth: authSlice,
  [authAPI.reducerPath]: authAPI.reducer,
  [userAPI.reducerPath]: userAPI.reducer,
})
