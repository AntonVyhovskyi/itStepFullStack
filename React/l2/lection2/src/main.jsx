
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react';


function A() {
  console.log(2222);
  
}
function B() {
  console.log(4444);
  return 4444
  
}
const ob = {s:1}
const n1 = 111
const n2 = true
const n3 = 'hello'
const el = React.createElement('div', {className: 2}, <h3>Hello created element</h3>)
const randomId = `ID-${Math.random()}`
createRoot(document.getElementById('root')).render(
  <div>
    <div className='red'> hello world!</div>
    <App></App>
    <App/>
    {App()}
    <div>
      111
    </div>
    <div>
      {111}
    </div>
    <div>
      {/* {ob} */}
      {n1}
    </div>
    <div>
      {n2}
      {true}
    </div>
    <div>
      {A()}
    </div>
    <div>
      {n3}
    </div>
    <div>
      {/* {()=>{
        console.log(333);
        
      }()} */}
    </div>
    <div>
      {B()}
    </div>
    <div>
      {React.createElement('div', {className: 1}, <div>222</div>)}
    </div>
    <div>
      {el}
    </div>
    <div id={randomId}>
      {randomId}
    </div>
  </div>
)
