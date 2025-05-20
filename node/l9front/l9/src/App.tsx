
import { useEffect, useState } from 'react'
import cls from './App.module.css'
import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { createWish, fetchWishes } from './store/slices/whishes.slice'


function App() {
  const [userName, setUserName] = useState<string>('')
  const [text, setText] = useState<string>('')
  const [formError, setFormError] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const {list, loading, error} = useAppSelector(state=>state.wishes)
  useEffect(()=>{
    dispatch(fetchWishes())
  }, [])


  return (
    <div className={cls.container}>
      <div className={cls.left}>
        <div>
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Ім/я' />
        </div>
        <div>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Побажання' />
        </div>
        <div>
          <button onClick={() => {
            if (userName && text) {
              dispatch(createWish({name: userName, text}))
              setUserName('')
              setText('')
              setFormError(false)
            } else {
              setFormError(true)
            }
          }}>Wish</button>


          {formError
            &&
            <div className={cls.error}>
              Заповни всі поля нормально
            </div>

          }


        </div>
      </div>
      <div className={cls.right}>
        {(loading && 
        <div className={cls.loading}>
          <div></div>
          <div></div>
          <div></div>
        </div>)
        ||
        (error && 
        <div className={cls.fetchError}>Помилка при завантаженні побажань</div>)
        ||
        (
          list && 
          list.map((el)=> {
            return <div className={cls.wish}>
              <h3>{el.name}</h3>
              <p>{el.text}</p>
            </div>
          })
          
        )
        }

      </div>

    </div>
  )
}

export default App
