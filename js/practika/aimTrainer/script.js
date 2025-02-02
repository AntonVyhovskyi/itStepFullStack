// elements
let ready = document.querySelector('.ready')
let gamePlace = document.querySelector('.window')
let tablo = document.querySelector('.tablo')
let start = document.querySelector('.button')

// state
let isLose = false
let points = 0 
let time = 2000
let statusGame = 'wait';
let lifetimeTarget = 5000
//  create lose text
let loseText = document.createElement('div')
loseText.classList.add('ready')
loseText.innerHTML= 'lose'
loseText.style.color = 'red'
loseText.style.display = 'block'



function startInterval() {
    if (statusGame === 'wait') {
        if (isLose) {
            gamePlace.removeChild(loseText)
            ready.innerHTML = 'ready?'
            gamePlace.appendChild(ready)
        }
        
        points = 0
        time = 2000
        ready.style.display = 'block'
        
        setTimeout(()=>{
            statusGame = 'running'
            ready.innerHTML = 'GO!'
            setTimeout(()=>{
            ready.style.display = 'none'
            startInterval()
            },500)
        },2500)
    }else  if (statusGame === 'running') {
        let hit = false
        let target = document.createElement('div')
        target.classList.add('target')
        target.style.top = `${Math.round(Math.random() * 350)}px`
        target.style.left = `${Math.round(Math.random() * 350)}px`
        target.onclick = () =>{
            points +=1
            tablo.innerHTML = points
            hit = true
            gamePlace.removeChild(target)
        }
        gamePlace.appendChild(target)
        setTimeout(()=>{
            if(!hit) {
                statusGame = 'fail'
                startInterval()
            }
        },lifetimeTarget)
        setTimeout(()=>{
            console.log(`tik: ${time}`);
            if (time>300) {
    
                time -=50
            }
            startInterval()
        },time)
        
    } else if (statusGame === 'fail' ){
        isLose = true
        gamePlace.innerHTML = ''
        gamePlace.appendChild(loseText)
    }
   
    
    
    
}


start.onclick = () => {
    statusGame = 'wait'
    startInterval()
}

