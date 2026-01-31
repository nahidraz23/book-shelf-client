import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5001/api'}),
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => '/books',
        }),
        createBook: builder.mutation({
            query: (bookData) => ({
                url: '/books',
                method: 'POST',
                body: bookData
            })
        }),
        updateBook: builder.mutation({
            query: ({id, ...updatedData}) => ({
                url: `/books/${id}`,
                method: 'PATCH',
                body: updatedData
            })
        })
    })
})

export const {useGetBooksQuery, useCreateBookMutation, useUpdateBookMutation} = baseApi