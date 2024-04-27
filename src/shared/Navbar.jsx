import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50'>
        <nav className='bg-blue-500 flex justify-center items-center h-12 gap-10 '>
            <Link className='text-white text-2xl font-bold' to='/'>Home</Link>
            <Link className='text-white text-2xl font-bold' to='/about'>About</Link>
            <Link className='text-white text-2xl font-bold' to='/products'>Products</Link>
            <Link className='text-white text-2xl font-bold' to='/createProduct'>CreateProduct</Link>
            <Link className='text-white text-2xl font-bold' to="/editProduct">EditProduct</Link>
        </nav>
    </div>
  )
}

export default Navbar