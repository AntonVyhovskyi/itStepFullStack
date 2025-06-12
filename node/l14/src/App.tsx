import { useEffect } from 'react'
import './App.css'
import { useAppSelector } from '../hooks/hooks'
import { Outlet, useNavigate } from 'react-router-dom'

function App() {
  const email = useAppSelector(state => state.user.email)
  
  const navigate = useNavigate()


  useEffect(() => {
    if (!email) {
      navigate('/auth')
    }
  }, [email])
  
  return (
    <>

      <Outlet />
    </>
  )
}

export default App
