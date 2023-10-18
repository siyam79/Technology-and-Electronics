import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import MyRoute from './Route/MyRoute'
import AuthProvider from './Pages/AuthProvider/AuthProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={MyRoute}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
