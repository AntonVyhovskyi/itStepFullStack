import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ById from './components/ById/ById.tsx'
import ByUser from './components/ByUser/ByUser.tsx'
import Dream from './components/Dream/Dream.tsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children: [
      {
        path: '/',
        element: <ById/>
      },
      {
        path: '/user',
        element: <ByUser/>
      },
      {
        path: 'dream/:id',
        element: <Dream/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  
   <RouterProvider router={router}/>
  ,
)
