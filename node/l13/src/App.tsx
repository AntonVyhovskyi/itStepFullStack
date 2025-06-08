import { useState } from 'react'

import cls from './App.module.css'
import { NavLink, Outlet } from 'react-router-dom'


const links = [
  {
    path: '/',
    text: 'Знайти мрію по айді'
  },
  {
    path: 'user',
    text: 'Знайти мрії юзера'
  }
]

function App() {


  return (
    <div className={cls.container}>
      <div className={cls.header}>
        {links.map(e => (
          <NavLink to={e.path} className={({ isActive }) => isActive ? cls.activeLink : cls.link}>{e.text}</NavLink>
        ))}
      </div>

      <Outlet />
    </div>
  )
}

export default App
