import React, { useState } from "react";
import { useGetAllProductsQuery } from "../features/apiSlice";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";

const Products = () => {
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  const { data, error, isLoading } = useGetAllProductsQuery();
  // console.log(data?.data)
  if (isLoading) {
    return (
      <p className="flex h-screen justify-center items-center">Loading...</p>
    );
  }

  if (error) {
    return (
      <p className="flex h-screen justify-center items-center">
        Error: {error.message}
      </p>
    );
  }

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data?.data?.slice(firstPostIndex, lastPostIndex);
  // console.log(currentPosts)

  return (
    <div>
      <h2 className="text-center my-4 text-2xl font-bold">All Products</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 m-5">
        {currentPosts?.map((product) => {
          return (
            <div
              key={product.id}
              className="border rounded-lg shadow-lg bg-white"
            >
              <img
                className="w-full h-40 rounded-t-lg"
                src={product.images}
                alt={product.title}
              />
              <div className="text-center font-bold my-2 p-3">
                <h1 className="text-xl">Name : {product.title}</h1>
                <p>{product._id}</p>
                <p>Price : ${product.price}</p>
                <p>Rating : {product.rating}</p>
                <Link to={`/products/${product._id}`}>
                  <button className="bg-blue-500 text-white py-1 px-4 rounded-lg text-xl font-bold my-4">
                    View Product
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <Pagination
        totalPosts={data?.data?.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Products;
