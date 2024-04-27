import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:4000/"}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "products"
        }),
        getProduct: builder.query({
            // query: (_id) => `products/search?q=${_id}`
            query: (id) => `products/${id}`
        }),
        createProduct: builder.mutation({
            query: (newProduct) => ({
                url: "product",
                method: "POST",
                body: newProduct
            }),
        }),
        updateProduct: builder.mutation({
            query: ({ _id, updatedProduct }) => ({
                url: `products/${_id}`,
                method: "PUT",
                body: updatedProduct
            }),
        }),
        deleteProduct: builder.mutation({
            query: (_id) => ({
                url: `products/${_id}`,
                method: "DELETE"
            }),
        }),
    }),
});

export const { useGetAllProductsQuery, useGetProductQuery, useCreateProductMutation , useUpdateProductMutation, useDeleteProductMutation } = productsApi;
