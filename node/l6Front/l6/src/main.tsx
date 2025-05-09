import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ItemCart from './ItemCart.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/:id',
        element: <ItemCart />
      }
    ]
  }
]

)

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
