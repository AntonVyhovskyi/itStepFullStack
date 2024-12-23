let oldDate = localStorage.getItem('nowDate') || 0
let nowDate = new Date()
localStorage.setItem('nowDate', nowDate)
localStorage.setItem('oldDate', oldDate)

let toDoArray = JSON.parse(localStorage.getItem('toDoList')) || [
    {
        title: 'test',
        date: '24.12.22',
        describe: 'test describe',
        isDone: false
    }
]

localStorage.setItem('toDoList', JSON.stringify(toDoArray))


// add toDo
let titleInForm = document.getElementById('titleNewToDo')
let descrInForm = document.getElementById('discribeNewToDo')
function addToDo() {
    let error = false
    toDoArray.forEach(element => {
        if (element.title === titleInForm.value.trim()) {
            error = true
        }
    });
    if (error) {
        alert('вже є таска с такой назвою')
        return 'Вже є така таска'
    }
    let newTask = {
        title: titleInForm.value.trim(),
        date: new Date,
        describe: descrInForm.value.trim(),
        isDone: false
    }
    toDoArray.push(newTask)
    localStorage.setItem('toDoList', JSON.stringify(toDoArray))
}

function deleteToDo(title) {
    let newArray = toDoArray.filter((el)=> {
        return el.title !== title
    })

    toDoArray = newArray
    localStorage.setItem('toDoList', JSON.stringify(toDoArray))
    pererisovka()
}

function isDoneToDo (title) {
    let newArray = toDoArray.map((el)=>{
        if (el.title === title) {
            return {
                ...el, isDone: !el.isDone
            }
        } else {
            return el
        }
    })
    toDoArray = newArray
    localStorage.setItem('toDoList', JSON.stringify(toDoArray))
    pererisovka()
}


//prorisovka 

let toDoListContainer = document.querySelector('.flex')
function pererisovka () {
    toDoListContainer.innerHTML = ''
    toDoArray.forEach((el) => {
        toDoListContainer.innerHTML += `<div class='item'>
        <div>${el.title}</div>
        <div>${el.date}</div>
        <div>${el.describe}</div>
        <div>${el.isDone}</div>
        <input type='checkbox' ${el.isDone ? 'checked' : ''} onchange='isDoneToDo("${el.title}")'>
        <button onclick="deleteToDo('${el.title}')">X</button>
        </div>`
    })
}

pererisovka ()


let seconds = localStorage.getItem('seconds') || 0
let secondsDiv = document.querySelector('.seconds')
secondsDiv.innerHTML = `ти на сайті вже ${seconds} секунд`
setInterval(() => {
    seconds = Number(seconds) + 1
    localStorage.setItem('seconds', seconds)
    secondsDiv.innerHTML = `ти на сайті вже ${seconds} секунд`
}, 1000);