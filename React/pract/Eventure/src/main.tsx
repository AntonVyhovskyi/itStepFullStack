import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'

import './index.css'
import App from './App.tsx'
import Day from './components/Day/Day.tsx'
import NewEvent from './components/NewEvent/NewEvent.tsx'
import CorrectEvent from './components/CorrectEvent/CorrectEvent.tsx'
import { Provider } from 'react-redux'
import store from './state/index.tsx'

const routers = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "day/:date",
        element: <Day />,
        children: [
          {
            path: 'event/new',
            element: <NewEvent />
          },
          {
            path: "event/edit/:id",
            element: <CorrectEvent />
          }
        ]
      }

    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={routers} />
  </Provider>



  ,
)
