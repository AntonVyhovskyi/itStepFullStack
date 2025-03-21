import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import UserComponent from './components/Users/User.tsx'
// import Users from './components/Users/Users.tsx'
// import Comments from './components/Comments/Comments.tsx'
// import Posts from './components/Posts/Posts.tsx'
// import Home from './components/Home/Home.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'

const Home = lazy(() => import("./components/Home/Home"));
const Posts = lazy(() => import("./components/Posts/Posts"));
const Comments = lazy(() => import("./components/Comments/Comments"));
const Users = lazy(() => import("./components/Users/Users"));
const User = lazy(() => import("./components/Users/User"));
const Post = lazy(() => import("./components/Posts/Post"));
const Comment = lazy(() => import("./components/Comments/Comment"));

const routes = createBrowserRouter([
  {
    path: '/', element: <App />, children: [
      { path: '/', element: <Home /> },
      { path: '/posts', element: <Posts /> },
      { path: '/comments', element: <Comments /> },
      { path: '/users', element: <Users /> },
      { path: '/users/:id', element: <User /> },
      { path: '/posts/:id', element: <Post /> },
      { path: '/comments/:id', element: <Comment /> },
    ]
  },



])
createRoot(document.getElementById('root')!).render(

    <RouterProvider router={routes} />
  ,
)
