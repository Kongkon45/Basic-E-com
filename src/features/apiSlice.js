import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:4000/"}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "products"
        }),
        getProduct: builder.query({
            // query: (id) => `products/search?q=${id}`
            query: (id) => `products/${id}`
        }),
        createProduct: builder.mutation({
            query: (newProduct) => ({
                url: "product",
                method: "POST",
                body: newProduct
            }),
        }),
    }),
});

export const { useGetAllProductsQuery, useGetProductQuery, useCreateProductMutation } = productsApi;
