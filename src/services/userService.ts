import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IUser } from '../types/user'

export const userAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], number>({
      query: (limit = 5) => ({
        url: '/contacts',
        params: {
          _limit: limit,
        },
      }),
      providesTags: (result) => ['User'],
    }),
    createUser: builder.mutation<IUser, IUser>({
      query: (user) => ({
        url: '/contacts',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
    updateUser: builder.mutation<IUser, IUser>({
      query: (user) => ({
        url: `/contacts/${user.id}`,
        method: 'PUT',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
    deleteUser: builder.mutation<IUser, IUser>({
      query: (user) => ({
        url: `/contacts/${user.id}`,
        method: 'DELETE',
        credentials: 'include',
      }),
      invalidatesTags: ['User'],
    }),
  }),
})
