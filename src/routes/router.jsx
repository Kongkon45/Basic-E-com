import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import About from "../pages/About";
import CreateProduct from "../pages/CreateProduct";
import EditProduct from "../pages/EditProduct";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main/>,
        children : [
            {
                path : "/",
                element : <Home/>
            },
            {
                path : '*',
                element : <Error/>
            },
            {
                path : '/about',
                element : <About/>
            },
            {
                path : '/products',
                element : <Products/>
            },
            {
                path : "/products/:_id",
                element : <ProductDetails/>
            },
            {
                path : "/createProduct",
                element : <CreateProduct/>
            },
            {
                path : "/editProduct/:_id",
                element : <EditProduct/>
            }
        ]
    }
])

export default router;