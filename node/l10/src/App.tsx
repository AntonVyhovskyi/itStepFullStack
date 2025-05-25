
import { useEffect, useState } from 'react'
import cls from './App.module.css'
import axios from 'axios'
import AddEdit from './AddEditComponent'

function App() {
  const [books, setBooks] = useState([{ id: 2, title: 'aaa', author: 'aaa', year: 22, rating: 8.5 }])
  const [fetchBooksError, setFetchBooksError] = useState(false)
  const [editNow, setEditNow] = useState<number | null>(null)
  const [addNow, setAddNow] = useState<boolean>(false)

  const apiURL = 'http://localhost:3000/'
  const fetchbooks = async () => {
    try {
      const response = await axios.get(`${apiURL}books`)
      setBooks(response.data)
      setFetchBooksError(false)
    } catch (error) {
      setFetchBooksError(true)
      console.log(error);

    }
  }
  useEffect(() => {
    fetchbooks()
  }, [])


  const deleteBookHundler = async (id: number) => {
    try {
      await axios.delete(`${apiURL}books/${id}`)
      fetchbooks()
    } catch (error) {
      console.log('не вдалося видалити');

    }
  }
  return (
    <div className={cls.container}>

      {fetchBooksError ? <div>error</div> : books.map((el, indx) =>
      (
        <div key={indx} className={cls.item}>
          <div className={cls.itemInfo}>
            <div>{el.title}</div>
            <div>{el.author}</div>
            <div>{el.year}y.</div>
            <div>rating:{el.rating}</div>
          </div>
          <button onClick={() => { setEditNow(indx) }}>edit</button>
          <button onClick={() => { deleteBookHundler(el.id) }}>delete</button>

        </div>
      )
      )}

      <div className={cls.buttonAddBook}><button onClick={()=>{setAddNow(true)}}>+</button></div>

      {(typeof editNow === 'number') && <AddEdit
        type="edit"
        id={books[editNow].id}
        title={books[editNow].title}
        author={books[editNow].author}
        year={books[editNow].year}
        rating={books[editNow].rating}
        apiURL={apiURL}
        setEditNow={setEditNow}
        fetchbooks={fetchbooks}
      />}
      {
        addNow &&
        <AddEdit
          type="add"
          apiURL={apiURL}
          setAddNow={setAddNow}
          fetchbooks={fetchbooks}
        />

      }
    </div>
  )
}

export default App
