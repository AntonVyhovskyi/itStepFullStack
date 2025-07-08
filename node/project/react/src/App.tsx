import { useEffect, useState } from 'react'
import cls from './App.module.css'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from './state'

function App() {

 

  return (
    <div className={cls.container}>
      <Outlet/>
    </div>
  )
}

export default App
