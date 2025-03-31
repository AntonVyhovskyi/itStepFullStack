import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Users from './components/Users/Users.tsx'
import Posts from './components/Posts/Posts.tsx'
import Comments from './components/Comments/Comments.tsx'


const routers = createBrowserRouter([{
  path: '/', element: <App/>, children: [
    {path:'/', element:<Users/>},
    {path:'/posts', element:<Posts/>},
    {path:'/comments', element:<Comments/>}
  ]
}])

createRoot(document.getElementById('root')!).render(
  
    <RouterProvider router={routers}/>
  
)
