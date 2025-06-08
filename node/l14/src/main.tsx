import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store/index.ts'
import Auth from './components/Auth/Auth.tsx'
import Desktop from './components/Desktop/Desktop.tsx'
import Masters from './components/Masters/Masters.tsx'
import CreateRequest from './components/CreateRequest/CreateRequest.tsx'
import Requests from './components/Requests/Requests.tsx'
import AllRequests from './components/AllRequests/AllRequests.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'auth',
        element: <Auth />
      },
      {
        path: '/',
        element: <Desktop />,
        children: [
          {
            path: '/',
            element: <Masters />
          },
          {
            path: '/:masterId',
            element: <CreateRequest />
          },
          {
            path: 'requests',
            element: <Requests/>
          },
          {
            path: 'requestsAll',
            element: <AllRequests/>
          }

        ]
      },

    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <Provider store={store}><RouterProvider router={router} /></Provider>
  ,
)
