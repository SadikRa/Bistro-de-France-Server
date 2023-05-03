import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './component/Main/Main';
import Login from './component/Login/Login';
import ErrorPage from './component/ErrorPage';
import Home from './component/Home/Home';
import Blog from './component/Blog/Blog';
import Registration from './component/Login/Registration';
import AuthProvider from './provider/AuthProvider';
import Card from './component/Card/Card';
import ChefDetails from './component/Card/ChefDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://assessment-10-server-sadikra.vercel.app/chef')
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: 'card/:id',
        element: <Card></Card>,
        loader: ({params}) => fetch(`https://assessment-10-server-sadikra.vercel.app/chef/${params.id}`)
        
      },
      {
        path:'/chefDetails',
        element: <ChefDetails></ChefDetails>
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
