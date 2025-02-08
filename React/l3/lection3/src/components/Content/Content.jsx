import { useState } from 'react';
import './Content.css'




function Counter() {
    const [count, setCount] = useState(0)
    const add = () => {
        setCount(count + 1)
    }
    const minus = () => {
        setCount(count - 1)
    }
    return ( 
        <div>
            <div className='button' onClick={add}>plus</div>
            <div>{count}</div>
            <div className='button' onClick={minus}>minus</div>
        </div>
     );
}



function Content() {
    const dateContent = {
        title: 'Heer is content',
        describe: 'Heer is describe'
    }
    return ( 
        <div className="content">
          <h1>{dateContent.title}</h1>
          <p>{dateContent.describe}</p>
          <Counter/>
        </div>
     );
}





export default Content;