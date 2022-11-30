import { createBrowserRouter } from "react-router-dom";
import React from 'react';
import Main from '../Layout/Main/Main';
import Login from '../Pages/Login/Login';
import Home from "../Pages/Home/Home/Home";
import Registration from "../Pages/Registration/Registration";

import Privetroute from "./Privetroute/Privetroute";
import AllAvailableProducts from "../Pages/AllAvailableProducts/AllAvailableProducts";
import AllUsers from "../Pages/ALlUsers/AllUsers";
import AdminRoute from "./AdminRoute/AdminRoute";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import AddProducts from "../Pages/Dashboard/AddProducts/AddProducts";
import SubCatagories from "../Pages/SubCatagories/SubCatagories";
import Blog from "../Pages/Blog/Blog";
import NotFound from "../Pages/NotFound/NotFound";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            },
            {
                path: '/allavailableproducts',
                element: <Privetroute><AllAvailableProducts></AllAvailableProducts></Privetroute>
            },
            {
                path: '/allProducts/:id',
                element: <Privetroute><SubCatagories></SubCatagories></Privetroute>,
                loader: ({ params }) => fetch(`https://reselling-web-server.vercel.app/allProducts/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Privetroute><DashboardLayout></DashboardLayout></Privetroute>,
        children: [
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/allProducts/:email',
                element: <MyProducts></MyProducts>,
                loader: ({ params }) => fetch(`https://reselling-web-server.vercel.app/allProducts/${params.email}`)
            },
            // {
            //     path: '/dashboard/allProducts',
            //     element: <MyProducts></MyProducts>,
            // },
            {
                path: '/dashboard/addproducts',
                element: <AddProducts></AddProducts>
            },
        ]
    },
])
export default router;