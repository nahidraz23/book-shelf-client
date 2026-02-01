import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5001/api'}),
    tagTypes: ['books'],
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => '/books',
            providesTags: ['books']
        }),
        createBook: builder.mutation({
            query: (bookData) => ({
                url: '/books',
                method: 'POST',
                body: bookData
            }),
            invalidatesTags: ['books']
        }),
        updateBook: builder.mutation({
            query: ({id, ...updatedData}) => ({
                url: `/books/${id}`,
                method: 'PATCH',
                body: updatedData
            }),
            invalidatesTags: ['books']
        })
    })
})

export const {useGetBooksQuery, useCreateBookMutation, useUpdateBookMutation} = baseApi