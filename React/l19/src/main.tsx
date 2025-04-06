import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './store/index.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/login/Login.tsx'
import Dashboard from './components/Dashboard/Dashboard.tsx'


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Dashboard/>
      },
      {
        path: 'login',
        element: <Login/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
     <RouterProvider router={routes} />
     
  </Provider>
  ,
)
