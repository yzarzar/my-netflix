import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const UserApi = createApi({
    reducerPath: 'UserApi',
    baseQuery : fetchBaseQuery({baseUrl:`http://localhost:8080/api/v1/`}),
    tagTypes: ['auth'],
    endpoints: (builder) => ({
        createUser: builder.mutation({
            query: (newUser) => ({
                url: 'auth/signUp',
                method: 'POST',
                body: newUser,
            }),
            invalidatesTags: ['auth'],
        }),
    }),
});

export const { useListUsersQuery, useCreateUserMutation } = UserApi