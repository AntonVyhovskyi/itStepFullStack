import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Wrapper from './components/Wrapper/Wrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Wrapper/>
  )
}

export default App
