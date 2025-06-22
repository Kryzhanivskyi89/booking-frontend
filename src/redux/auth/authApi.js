import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://booking-backend-a004.onrender.com/api' }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: 'auth/register',
        method: 'POST',
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation  } = authApi;