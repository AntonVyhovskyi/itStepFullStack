import { useState } from 'react'
import cls from './App.module.css'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <div className={cls.container}>
      <Outlet/>
    </div>
  )
}

export default App
