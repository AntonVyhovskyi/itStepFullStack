
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
import ContaierComponentUpdateBasicInfo from './components/Dashboard/UpdatePortfolio/UpdateBasicInfo/ContaierComponentUpdateBasicInfo.tsx'
import ContainerUpdateSkills from './components/Dashboard/UpdatePortfolio/UpdateSkills/ContainerUpdateSkills.tsx'
import ContainerUpdateProjects from './components/Dashboard/UpdatePortfolio/UpdateProjects/ContainerUpdateProjects.tsx'
import PortfolioPage from './components/PortfolioPage/PortfolioPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'portfolioPage/:id',
        element: <PortfolioPage />
      },
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
                path: '',
                element: <ContaierComponentUpdateBasicInfo/>
              },
              {
                path: 'skills',
                element: <ContainerUpdateSkills/>
              },
              {
                path: 'projects',
                element: <ContainerUpdateProjects/>
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
