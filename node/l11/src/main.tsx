import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <div>home</div>
      },
      {
        path: 'top',
        element: <div>home</div>
      },
      {
        path: 'expensive',
        element: <div>home</div>
      }
    ]
  }
])
createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />

  ,
)
