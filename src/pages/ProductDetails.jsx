import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDeleteProductMutation, useGetProductQuery } from '../features/apiSlice';

const ProductDetails = () => {
    const navigate = useNavigate();
    const {_id} = useParams();
    // console.log(_id)
    // const {data, isLoading, error} = useGetProductQuery(id);
    const { data, isLoading, error } = useGetProductQuery(_id);
    const [deleteProduct] = useDeleteProductMutation(_id);
    // console.log(deleteProduct)

    // console.log(id)
    // console.log(data?.data)

    if (isLoading) {
        return <p className='flex h-screen justify-center items-center'>Loading...</p>;
    }

    if (error) {
        return <p className='flex h-screen justify-center items-center'>Error: {error.message}</p>;
    }
    // const singleProduct = data?.data?.find((product)=>product.id === parseInt(id))
    // console.log(singleProduct)

    const singleProduct = data?.data;
    // console.log(singleProduct)

    if(!singleProduct){
        return <p className='flex h-screen justify-center items-center'>Product Not Found</p>
    }


    const handleDeleteProduct = async (_id)=>{
        try {
            await deleteProduct(_id);
            navigate("/products")
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='h-screen flex justify-center items-center gap-10 mx-10'>
        <div className='w-1/2'>
            <img className='hover:scale-110 duration-300 ease-in-out transition rounded-md cursor-pointer' src={singleProduct.images} alt={singleProduct.title} />
        </div>
        <div className='w-1/2'>
            <h2 className='text-2xl font-bold'><span className='text-2xl font-bold '>Name : </span> {singleProduct.title}</h2>
            <p className='text-md font-semibold'><span className='text-2xl font-bold '>Category : </span>{singleProduct.category}</p>
            <p className='text-md font-semibold'><span className='text-2xl font-bold '>Description : </span>{singleProduct.description}</p>
            <p className='text-md font-semibold'><span className='text-2xl font-bold '>Price : </span> ${singleProduct.price}</p>
            <p className='text-md font-semibold'><span className='text-2xl font-bold '>Brand : </span>{singleProduct.brand}</p>
            <p className='text-md font-semibold'><span className='text-2xl font-bold '>Rating : </span>{singleProduct.rating}</p>
            <p className='text-md font-semibold'><span className='text-2xl font-bold '>Stock : </span>{singleProduct.stock}</p>
            <button className='bg-blue-500 text-white py-1 px-4 rounded-lg text-xl font-bold my-4'>Add To Cart</button>
            <button onClick={()=>handleDeleteProduct(_id)} className='bg-red-500 text-white py-1 px-4 rounded-lg text-xl font-bold my-4 ml-6'>Delete</button>
        </div> 

    </div>
  )
}

export default ProductDetails