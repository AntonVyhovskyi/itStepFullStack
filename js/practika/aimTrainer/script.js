// elements from dom
let ready = document.querySelector('.ready')
let gamePlace = document.querySelector('.window')
let tablo = document.querySelector('.tablo')
let start = document.querySelector('.button')
let blockToClick = document.querySelector('.blockToClick')
let body = document.querySelector('body')
let buttonEasy = document.getElementById('buttonEasy')
let buttonNorm = document.getElementById('buttonNorm')
let buttonHard = document.getElementById('buttonHard')
let resultsListElement = document.querySelector('.results')
// state
let isLose = false
let points = 0
let time = 2000
let statusGame = 'wait';
let lifetimeTarget = 5000
let stopForFailStatus = false
let complexity = 'easy'
//  create lose text
let loseText = document.createElement('div')
loseText.classList.add('ready')
loseText.innerHTML = 'lose'
loseText.style.color = 'red'
loseText.style.display = 'block'




// status functions 

function ifWaitStart() {
    blockToClick.style.display = 'block'
    if (isLose) {
        gamePlace.removeChild(loseText)
        ready.innerHTML = 'ready?'
        gamePlace.appendChild(ready)
    }
    stopForFailStatus = true
    points = 0
    tablo.innerHTML = points
    if (complexity === 'easy') {
        time = 2000
    } else if (complexity === 'norm') {
        time = 1200
    } else if (complexity === 'hard') {
        time = 500
    }

    ready.style.display = 'block'

    setTimeout(() => {
        statusGame = 'running'
        ready.innerHTML = 'GO!'
        setTimeout(() => {
            ready.style.display = 'none'
            startInterval()
        }, 500)
    }, 2500)
    setTimeout(() => {
        stopForFailStatus = false
    }, lifetimeTarget)
}

function ifRunningStart() {

    let hit = false
    let target = document.createElement('div')
    target.classList.add('target')
    target.style.top = `${Math.round(Math.random() * 350)}px`
    target.style.left = `${Math.round(Math.random() * 350)}px`
    target.onclick = () => {
        points += 1
        tablo.innerHTML = points
        hit = true
        gamePlace.removeChild(target)
    }
    gamePlace.appendChild(target)
    setTimeout(() => {
        if (!hit && !stopForFailStatus) {

            let results = JSON.parse(sessionStorage.getItem('results')) || [];
            results.push({ level: complexity, points: points })
            sessionStorage.setItem('results', JSON.stringify(results))
            lookingResultsAndRender()
            stopForFailStatus = true
            statusGame = 'fail'
            startInterval()
        }
    }, lifetimeTarget)
    setTimeout(() => {
        console.log(`tik: ${time}`);
        if (time > 900) {

            time -= 50
        }
        if (time <= 900 && time > 300) {

            time -= 1
        }
        startInterval()
    }, time)

}

function ifFailStart() {
    isLose = true
    gamePlace.innerHTML = ''
    gamePlace.appendChild(loseText)
    blockToClick.style.display = 'none'


}


function startInterval() {
    if (statusGame === 'wait') {
        ifWaitStart()
    } else if (statusGame === 'running') {
        ifRunningStart()

    } else if (statusGame === 'fail') {
        ifFailStart()
    }




}


start.onclick = () => {
    if (statusGame === 'wait' || statusGame === 'fail')
        statusGame = 'wait'
    startInterval()
}


buttonEasy.onclick = () => {
    complexity = 'easy'
    body.style.backgroundColor = 'rgb(0, 66, 48)'
}
buttonNorm.onclick = () => {
    complexity = 'norm'
    body.style.backgroundColor = 'rgb(66, 57, 0)'
}
buttonHard.onclick = () => {
    complexity = 'hard'
    body.style.backgroundColor = 'rgb(66, 4, 0)'
}


function lookingResultsAndRender() {
    resultsListElement.innerHTML = ''
    let results = JSON.parse(sessionStorage.getItem('results')) || [];
    results.reverse()
    if(results.length === 0) {
        resultsListElement.style.display = 'none'
    } else {
        resultsListElement.style.display = 'block'
    }
    results.forEach(element => {
        let item = document.createElement('div')
        let itemLevel = document.createElement('div')
        let itemResult = document.createElement('div')
        let color = 'colorGreen'
        if (element.level === 'norm') {
            color = 'colorYellow'
        } else if (element.level === 'hard') {
            color = 'colorRed'
        }
        item.classList.add(color)
        itemLevel.innerHTML = element.level;
        itemResult.innerHTML = element.points;
        item.appendChild(itemLevel)
        item.appendChild(itemResult)

        resultsListElement.appendChild(item)
    });
    console.log(results);
    


}


lookingResultsAndRender()