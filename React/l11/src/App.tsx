
import { useEffect, useState } from 'react'
import './App.css'
import UncontrolForm from './UncontrolForm'


interface FormData {
  name: string,
  pass: string,
  pass2: string,
  data: string,
  sex: string,
  age: number | '',
  discription: string

}

function App() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    pass: '',
    pass2: '',
    data: '',
    sex: '',
    age: '',
    discription: ''

  })

  const handlerForInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, type, value, name } = e.target
    if (type === 'radio') {
      setFormData(prev => ({ ...prev, [name]: id }))

    } else if (id === 'age') {
      setFormData(prev => ({ ...prev, [id]: Number(value) }))

    } else {
      setFormData(prev => ({ ...prev, [id]: value }))

    }

  }

  const handlerForSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <>
      <form onSubmit={handlerForSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input required type="text" id="name" onChange={handlerForInput} value={formData.name} />
        </div>
        <div>
          <label htmlFor="pass">Password</label>
          <input required type="password" id="pass" onChange={handlerForInput} value={formData.pass} />
        </div>
        <div>
          <label htmlFor="pass2">Password noch mal</label>
          <input required type="password" id="pass2" onChange={handlerForInput} value={formData.pass2} />
        </div>
        <div>
          <label htmlFor="data">Geburtstag</label>
          <input required type="date" id="data" onChange={handlerForInput} value={formData.data} />
        </div>
        <div className="radio">
          <label htmlFor="sex">Sex</label>
          <div>
            <input type="radio" name="sex" id="man" onChange={handlerForInput} checked={formData.sex === 'man'} />
            <label htmlFor="man">Man</label>
            <input type="radio" name="sex" id="woman" onChange={handlerForInput} checked={formData.sex === 'woman'} />
            <label htmlFor="woman">Woman</label>
          </div>
        </div>
        <div>
          <label htmlFor="age">Wie alt bist du?</label>
          <input required type="number" id="age" max="150" onChange={handlerForInput} value={formData.age === 0 ? '' : formData.age} />
        </div>
        <div>
          <label htmlFor="discription">Beschreibe dich</label>
          <textarea style={{ width: "300px", height: "200px", resize: "none" }} name="discription" id="discription" placeholder="Ich bin fleissig" onChange={handlerForInput} value={formData.discription}></textarea>
        </div>
        <div>
          <button type="submit" >
            Bereit
          </button>
        </div>

      </form>
      <UncontrolForm />
    </>
  )
}

export default App
