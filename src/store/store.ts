import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import logger from 'redux-logger'
import { userAPI } from '../services/userService'
import { authAPI } from '../services/authService'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      logger,
      userAPI.middleware,
      authAPI.middleware
    ),
})

export type RootState = ReturnType<typeof rootReducer>
export type TypedDispatch = typeof store.dispatch
