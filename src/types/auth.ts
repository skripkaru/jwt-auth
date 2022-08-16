export interface IUser {
  accessToken?: string
  id?: number
  username?: string
  email: string
  password: string
}

export interface AuthState {
  isLoggedIn: boolean | string | null
}
