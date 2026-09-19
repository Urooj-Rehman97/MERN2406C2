import React from 'react'
import Register from './Pages/Register/Register'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from './Components/Layout';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Dashboard from './AdminPages/Dashboard';
import AdminLayout from './Components/AdminLayout';
import AddProduct from './AdminPages/AddProduct';
import Products from './AdminPages/Products';
import EditProduct from './AdminPages/EditProduct';
import Contact from './Pages/Contact/Contact';


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      children:[
       { path: "/",
        Component: Home
      },
      {
        path: "contact",
        Component: Contact
      }
   
     
      ]
    },
    ,
      {
        path: "/register",
        Component: Register
      },
      {
        path: "/login",
        Component: Login
      },
      {
        path: "/dashboard",
        Component: AdminLayout,
        children:[
          {
            index: true,
            Component: Dashboard
          },
          {
            path: "addproduct",
            Component: AddProduct
          },
          {
            path: "getproducts",
            Component: Products
          },
          {
            path: "editproduct/:id",
            Component: EditProduct
          }
       
        ]
      },

  ]);
  return   <RouterProvider router={router} />;
}

export default App
