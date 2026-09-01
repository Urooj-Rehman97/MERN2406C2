import React from 'react'
import Register from './Pages/Register/Register'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from './Components/Layout';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Dashboard from './AdminPages/Dashboard';


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      children:[
       { path: "/",
        Component: Home
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
        Component: Dashboard
      }
  ]);
  return   <RouterProvider router={router} />;
}

export default App
