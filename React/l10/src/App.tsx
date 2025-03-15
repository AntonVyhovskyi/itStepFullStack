
import cls from './App.module.css'
import Comments from './components/Comments/Comments'
import Posts from './components/Posts/Posts'
import Users from './components/Users/Users'
import { useMyState } from './customHooks'

function App() {

  const [showComponent, setShowComponent] = useMyState<'users' | 'comments' | 'posts' | ''>('')

  const handlerChangeShowComponent = (value: 'users' | 'comments' | 'posts') => {
    setShowComponent(value)
  }


  return (

    <div>
      <div className={`${cls.buttons}`}>
        <button onClick={() => setShowComponent('users')} className={showComponent === 'users' ? cls.active : ''}>Users</button>
        <button onClick={() => setShowComponent('posts')} className={showComponent === 'posts' ? cls.active : ''}>Posts</button>
        <button onClick={() => setShowComponent('comments')} className={showComponent === 'comments' ? cls.active : ''}>Comments</button>
      </div>
      <div>
        {showComponent === 'users' &&
          <div className={cls.component}>
            <Users />
          </div>
        }
        {showComponent === 'posts' &&
          <div className={cls.component}>
            <Posts />
          </div>
        }

        {showComponent === 'comments' &&
          <div className={cls.component}>
            <Comments />
          </div>
        }
      </div>
    </div>

  )
}

export default App
