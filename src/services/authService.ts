import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IUser } from '../types/auth'

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
  }),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    registerUser: builder.mutation<IUser[], IUser>({
      query: (user) => ({
        url: '/users',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Auth'],
    }),
    loginUser: builder.mutation<IUser, IUser>({
      query: (user) => ({
        url: '/login',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
})

export const { useRegisterUserMutation, useLoginUserMutation } = authAPI
