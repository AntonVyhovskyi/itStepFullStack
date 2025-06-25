import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [postError, setPostError] = useState();
  const [inputText, setInputText] = useState('');

  useEffect(()=>{
    axios.get('http://localhost:3000/api/users').then(res=>{
      setLoading(false)
      setFetchError(false)
      setUsers(res.data)
    }).catch(err=>{
      setLoading(false)
      setFetchError(true)
    })
  }, [])

  const post = (name) => {
    axios.post('http://localhost:3000/api/users').then(res=>{
      setInputText('')
      setPostError(false)
      setUsers(prev=>[...prev, res.data])
    }).catch(err=>{
      setPostError(true)
    })
  }

  return (
    <>
     {loading&& <div>loading...</div>}
     {fetchError&& <div>fetchError</div>}
     {postError&& <div>postError</div>}
     {users && users.map(el=><div>{el.name}</div>)}
     <input type="text" value={inputText} onChange={(e)=>{
      setInputText(e.target.value)
     }}/>
     <button onClick={()=>{
      post(inputText)
     }}>додати користувача</button>
    </>
  )
}

export default App
