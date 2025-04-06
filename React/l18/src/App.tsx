import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Users from './components/Users/Users'
import Posts from './components/Posts/Posts'
import Comments from './components/Comments/Comments'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='content'>
      <div className="content_item"><Users/></div>
      <div className="content_item"><Posts/></div>
      <div className="content_item"><Comments/></div>
    </div>
      
    </>
  )
}

export default App
