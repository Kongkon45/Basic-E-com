import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import About from "../pages/About";
import CreateProduct from "../pages/CreateProduct";

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
            }
        ]
    }
])

export default router;