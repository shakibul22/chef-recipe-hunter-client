import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import AuthProvider from './Providers/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Components/Routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='max-w-screen mx-auto'>
   <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
   </div>
  </React.StrictMode>,
)
