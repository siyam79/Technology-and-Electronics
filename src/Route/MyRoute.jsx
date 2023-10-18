import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Pages/MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import AddProduct from "../Components/AddProduct/AddProduct";
import MyCart from "../Components/MyCart/MyCart";
import Login from "../Components/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";


const MyRoute = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('data.json')
            },
            {
                path:'/products',
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path:'/mycart',
                element:<MyCart></MyCart>,
                loader:()=>fetch('http://localhost:5000/products')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
           
        ]
    }
])

export default MyRoute;