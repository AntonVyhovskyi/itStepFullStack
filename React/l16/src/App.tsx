
import { Provider } from 'react-redux'
import { store } from '../redux/index'
import './App.css'
import Counter from './Counter'

function App() {


  return (
    <>
      <Provider store={store}>

        <Counter />app
      </Provider>
    </>
  )
}

export default App
