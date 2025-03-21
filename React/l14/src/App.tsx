

import cls from './App.module.css'
import {  NavLink,  Outlet } from "react-router-dom";




function App() {
  

  return (
    <div>
      <div className={cls.header}>
        <nav>
          <NavLink to='/users' className={({ isActive }) => isActive ? cls.active : ''}>Users</NavLink>
          <NavLink to='/comments' className={({ isActive }) => isActive ? cls.active : ''}>Comments</NavLink>
          <NavLink to='/posts' className={({ isActive }) => isActive ? cls.active : ''}>Posts</NavLink>
        
          <NavLink to='/' className={({ isActive }) => isActive ? cls.active : ''}>Home</NavLink>
        </nav>
      </div>

      <div className={cls.main}>
        <div className={cls.mainContent}>
          <Outlet />
        </div>

      </div>


    </div>

  )
}

export default App
