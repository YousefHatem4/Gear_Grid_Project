import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Register from './Components/Register/Register'
import Home from './Components/Home/Home'
import Listing from './Components/Listing/Listing'
import Brands from './Components/Brands/Brands'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Save from './Components/Save/Save'
import Login from './Components/Login/Login'
import NotFound from './Components/NotFound/NotFound'
import UserContextProvider from './Components/Context/UserContext'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import CarDetails from './Components/CarDetails/CarDetails'
import CarsContextProvider from './Components/Context/CarsContext'



const routers = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      { path: 'register', element: <Register /> },
      { index: true, element: <ProtectedRoute> <Home /></ProtectedRoute> },
      { path: 'listing', element: <ProtectedRoute><Listing /></ProtectedRoute> },
      { path: 'brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },
      { path: 'about', element: <ProtectedRoute><About /></ProtectedRoute> },
      { path: 'contact', element: <ProtectedRoute><Contact /> </ProtectedRoute>},
      { path: 'save', element: <ProtectedRoute><Save /></ProtectedRoute> },
      { path: 'cardetails/:id', element: <ProtectedRoute><CarDetails /></ProtectedRoute> },
      { path: 'login', element: <Login /> },
      { path: '*', element: <NotFound /> },
    ]
  }
])


function App() {
  return (
    <>
      <CarsContextProvider>
        <UserContextProvider>
          <RouterProvider router={routers}></RouterProvider>
        </UserContextProvider>
      </CarsContextProvider>
    </>
  )
}

export default App
