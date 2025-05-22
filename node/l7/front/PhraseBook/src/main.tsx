import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './state/index.tsx'
import Home from './components/Home/Home.tsx'
import Desktop from './components/Desktop/Desktop.tsx'
import List from './components/List/List.tsx'
import Work from './components/Work/Work.tsx'
import CreateNew from './components/CreateNew/CreateNew.tsx'

const routers = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />
      },
      {
        path: 'home',
        element: <Home/>
      },
      {
        path: 'desktop',
        element: <Desktop/>,
        children: [
          {
            path: 'list',
            element: <List/>
          },
          {
            path: 'work',
            element: <Work/>
          },
          {
            path: 'createNew',
            element: <CreateNew/>
          },
        ]
      },

    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={routers}/>
    </Provider>
  ,
)
