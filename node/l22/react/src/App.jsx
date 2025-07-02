import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [topWoeds, settopWoeds] = useState();
  const [totalWords, settotalWords] = useState();
  const [uniqueWords, setuniqueWords] = useState();
  const [textInInput, settextInInput] = useState('');

  const handler = () => {
    axios.post('http://localhost:3000/analize-text', { text: textInInput }).then(res => {
      setuniqueWords(res.data.uniqueWords)
      settotalWords(res.data.totalWords)
      settopWoeds(res.data.topWords)
    })
  }

  return (
    <>
      <textarea value={textInInput} onChange={(e) => { settextInInput(e.target.value) }} />
      <button onClick={handler}>го</button>
      {totalWords && <div>total words : {totalWords}</div>}
      {uniqueWords && <div>unique Words : {uniqueWords}</div>}

      {topWoeds && topWoeds.map(el => {
        return (
          <div>{el.word}: використано {el.count} разів</div>
        )
      })}
    </>
  )
}

export default App
