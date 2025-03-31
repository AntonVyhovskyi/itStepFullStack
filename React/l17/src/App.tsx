import { useState } from 'react'

import './App.css'
import { Provider } from 'react-redux'
import { store } from './store/state'
import Users from './components/Users/Users'
import { NavLink, Outlet } from 'react-router'

const classForNavLink:string = 'p-2 border-2 border-amber-400 rounded-2xl hover:bg-blue-400 transition-colors duration-200'

function App() {
 

  return (
    <Provider store={store}>
      <div className="container bg-black w-full">
        <div className="header">
          <nav className='text-3xl text-amber-100 flex justify-around p-1'>
          <NavLink className={classForNavLink} to='/'>Users</NavLink>
          <NavLink className={classForNavLink} to='/posts'>Posts</NavLink>
          <NavLink className={classForNavLink} to='/comments'>Comments</NavLink>
          </nav>
        </div>
        <Outlet />
      </div>

    </Provider>
  )
}

export default App
