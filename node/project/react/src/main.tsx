
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login/Login.tsx'
import Main from './components/Main/Main.tsx'
import Registration from './components/Registration/Registration.tsx'
import { Provider } from 'react-redux'
import store from './state'
import Dashboard from './components/Dashboard/Dashboard.tsx'
import Portfolios from './components/Dashboard/Portfolios/Portfolios.tsx'
import CreatePortfolio from './components/Dashboard/CreatePortfolio/CreatePortfolio.tsx'
import UpdatePortfolio from './components/Dashboard/UpdatePortfolio/UpdatePortfolio.tsx'
import UpdateBasikInfo from './components/Dashboard/UpdatePortfolio/UpdateBasicInfo/UpdateBasikInfo.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'registration',
        element: <Registration />
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
          {
            path: '',
            element: <Portfolios />
          },
          {
            path: 'createNew',
            element: <CreatePortfolio />
          },
          {
            path: 'update/:id',
            element: <UpdatePortfolio />,
            children: [
              {
                path: 'basicInfo',
                element: <UpdateBasikInfo/>
              },
              {
                path: 'skills',
                element: <div>skills</div>
              },
              {
                path: 'projects',
                element: <div>projects</div>
              }
            ]
          }
        ]
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>

  ,
)
