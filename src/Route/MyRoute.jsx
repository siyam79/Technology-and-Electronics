import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import AddProduct from "../Components/AddProduct/AddProduct";
import MyCart from "../Components/MyCart/MyCart";
import Login from "../Components/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import Error from "../Components/Error/Error";
import BrandsCards from "../Pages/BrandCards/BrandsCards";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import UpdateBrand from "../Pages/UpdateBrand/UpdateBrand";


const MyRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader:()=>fetch('https://technology-and-electronics.vercel.app/brands')
                loader: () => fetch('data.json')
            },
            {
                path: '/products',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/mycart',
                element:<PrivateRoute> <MyCart></MyCart></PrivateRoute>,
                loader: () => fetch('https://technology-and-electronics.vercel.app/addcard')
                // loader: () => fetch('https://technology-and-electronics.vercel.app/products')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/brands/:brand_name',
                element: <BrandsCards></BrandsCards>,
                loader: () => fetch("https://technology-and-electronics.vercel.app/products")
            },
            {
                path: "/products/:id",
                element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://technology-and-electronics.vercel.app/products/${params.id}`)
            },
            {
                path: "/product/:id",
                element: <PrivateRoute><UpdateBrand></UpdateBrand></PrivateRoute>,
                loader: ({ params }) => fetch(`https://technology-and-electronics.vercel.app/products/${params.id}`)
            },

        ]
    }
])

export default MyRoute;