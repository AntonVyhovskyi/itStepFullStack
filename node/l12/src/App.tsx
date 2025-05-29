import { useState } from 'react'

import cls from './App.module.css'
import { NavLink, Outlet } from 'react-router-dom'

function App() {


  return (
    <>
      <nav className={cls.header}>
        <NavLink to='/'>odin</NavLink>
        <NavLink to='/dva'>dva</NavLink>
        <NavLink to='/tri'>tri</NavLink>
      </nav>
      <div className={cls.content}>
        <Outlet/>
      </div>
    </>
  )
}

export default App
