
import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import cls from './App.module.css'
import AddTaskInput from './components/AddTaskInpu/AddTaskInput'



interface Task {
  id: string,
  text: string,
  complated: boolean
}
interface Category {
  name: string,
  tasks: Task[]
}


const storageFromMemory: any = localStorage.getItem('state')

const initialState: Category[] = storageFromMemory ? JSON.parse(storageFromMemory) :
  [
    {
      name: 'first',
      tasks: [
        {
          id: 'first',
          text: 'asdasd',
          complated: false

        }
      ]
    }
  ]


type Action =
  | { type: 'ADD CATEGORY'; payload: string; forError: (v: boolean) => void }
  | { type: 'DELETE CATEGORY'; payload: string }
  | { type: 'ADD TASK'; payload: { nameCategory: string, id: string, text: string } }
  | { type: 'CHANGE STATUS'; payload: { nameCategory: string, id: string } }
  | { type: 'DELETE TASK'; payload: { nameCategory: string, id: string } }

function reducer(state: Category[], action: Action) {

  switch (action.type) {

    case 'ADD CATEGORY':
      const isNow = state.some((el) => el.name === action.payload)
      if (isNow) {
        action.forError(true)
        return state

      } else {
        action.forError(false)
        return [...state, {
          name: action.payload,
          tasks: []
        }]
      }


    case 'DELETE CATEGORY':
      return state.filter((el) => el.name !== action.payload)


    case 'ADD TASK':
      return state.map(el => {
        if (el.name === action.payload.nameCategory) {
          const newTask = {
            id: action.payload.id,
            text: action.payload.text,
            complated: false
          }
          return { ...el, tasks: [...el.tasks, newTask] }
        } else {
          return el
        }
      })


    case 'CHANGE STATUS':
      return state.map(el => {
        if (el.name === action.payload.nameCategory) {
          let newTasksArr = el.tasks.map(task => {
            if (task.id === action.payload.id) {
              return { ...task, complated: !task.complated }
            }
            return task;
          })
          return { ...el, tasks: newTasksArr };
        } else {
          return el;
        }
      });

    case 'DELETE TASK':
      return state.map(el => {
        if (el.name === action.payload.nameCategory) {
          let newTasks = el.tasks.filter(task => {
            return task.id !== action.payload.id
          })
          return { ...el, tasks: newTasks }
        }
        else return el
      })


    default:
      return state

  }
}



function App() {

  const [textNewCategory, setTextNewCategory] = useState<string>('')
  const [nowIsSoCategory, setNowSoCategory] = useState<boolean>(false)

  const [state, dispatch] = useReducer(reducer, initialState)

  const inputRef = useRef<HTMLInputElement>(null)


  function updateLocalStorage() {
    let parseState = JSON.stringify(state)
    localStorage.setItem('state', parseState)
  }

  const complateTasksMemo = useMemo(()=>{
    return state.reduce((count, category) => {
      return count + category.tasks.filter((el: Task)=> el.complated).length
    }, 0)
  }, [state])


  useEffect(() => {
    updateLocalStorage()
  }, [state])


  const handlerAddCategory = useCallback(() => {
    if (inputRef.current) {
      dispatch({ type: 'ADD CATEGORY', payload: textNewCategory, forError: setNowSoCategory })
      inputRef.current.value = ''
    }
  }, [textNewCategory, dispatch]) 
  return (
    <div className={cls.app}>
      <div className={cls.addCategory}>

        <input type="text" placeholder='Додати категорію' ref={inputRef} onChange={(e) => { setTextNewCategory(e.target.value) }} />
        <button onClick={handlerAddCategory}>add category</button>
        <span style={{marginLeft: '10px'}}>Виконано завдань {complateTasksMemo}</span>
        {nowIsSoCategory ? <div className={cls.addCategoryError}>You need to write another Category</div> : ''}
      </div>
      <div className={cls.items}>
        {state.map(el => {
          return (
            <div key={el.name} className={cls.item}>
              <div className={cls.itemHeader}>
                <h2>{el.name}</h2>
                <button onClick={() => { dispatch({ type: 'DELETE CATEGORY', payload: el.name }) }}>delete category</button>
              </div>
              <div className={cls.tasks}>
                {el.tasks.map((t) => (
                  <div className={cls.task} key={t.id} style={t.complated ? { borderColor: 'rgb(75, 212, 75)' } : {}}>
                    <h3>{t.text}</h3>
                    <div className={cls.taskMenu}>
                      status: {t.complated ? 'complated' : 'is not complated'}
                      <button className={cls.taskButtonChange} onClick={() => dispatch({ type: 'CHANGE STATUS', payload: { nameCategory: el.name, id: t.id } })}>change status</button>
                      <button className={cls.taskButtonDelete} onClick={() => { dispatch({ type: 'DELETE TASK', payload: { nameCategory: el.name, id: t.id } }) }}>delete task</button>
                    </div>
                  </div>
                ))}
              </div>

              <AddTaskInput categoryName={el.name} dispatch={dispatch} />

            </div>

          )
        })}

      </div>

    </div>
  )
}

export default App
