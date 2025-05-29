import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Odin from './components/Odin.tsx'
import Dva from './components/Dva.tsx'
import Tri from './components/Tri.tsx'

const routers = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: '/',
        element: <Odin/>
      },
      {path: '/dva',
        element: <Dva/>
      },
      {path: '/tri',
        element: <Tri/>
      },
      
      
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={routers} />


  ,
)
