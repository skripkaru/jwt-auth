import { AuthState } from '../../types/auth'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: AuthState = {
  isLoggedIn: localStorage.getItem('login'),
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload
    },
  },
})

export default authSlice.reducer
export const { setIsLoggedIn } = authSlice.actions
