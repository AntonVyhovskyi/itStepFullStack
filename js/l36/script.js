// 1. Створити 2 кубіка, при кліку на перший: другий повинен змінювати свій колір на рандомний.
document.body.innerHTML += `<div class='title'>1. Створити 2 кубіка, при кліку на перший: другий повинен змінювати свій колір на рандомний.</div>`
document.body.innerHTML += `<div id='ex1kub1'></div>`
document.body.innerHTML += `<div id='ex1kub2'></div>`

let ex1kub1 = document.getElementById('ex1kub1')
let ex1kub2 = document.getElementById('ex1kub2')

ex1kub1.style.width = '100px'
ex1kub1.style.height = '100px'
ex1kub2.style.width = '100px'
ex1kub2.style.height = '100px'

ex1kub1.style.backgroundColor = 'green'
ex1kub2.style.backgroundColor = 'blue'

ex1kub1.onclick = () => {
    let r = Math.floor(Math.random() *256)
    let g = Math.floor(Math.random() *256)
    let b = Math.floor(Math.random() *256)
    ex1kub2.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

// 2. Створити текстовий блок, при спробі його скопіювати покажіть користувачу вікно "Текст неможливо скопіювати!!"

let title2 = document.createElement('div');
title2.className = 'title';
title2.textContent = '2. Створити текстовий блок, при спробі його скопіювати покажіть користувачу вікно "Текст неможливо скопіювати!!"';
document.body.appendChild(title2);


let ex2 = document.createElement('p');
ex2.textContent = 'yakiys text yakiy ne mozhlivo skopiyoovati'
ex2.style.border = '1px solid black'
ex2.style.padding = '10px'
document.body.appendChild(ex2);

ex2.oncopy = (e) => {
    e.preventDefault();
    alert('Текст неможливо скопіювати!!')
}




// 3. Створити кубік 100х100 який міняє свій колір в залежності від того на яких координатах ви знаходитесь 
//    (r - X координата, g - Y координата, b - середнє арифметичне X+Y/2).


let title3 = document.createElement('div');
title3.className = 'title';
title3.textContent = '3. Створити кубік 100х100 який міняє свій колір в залежності від того на яких координатах ви знаходитесь ';
document.body.appendChild(title3);



let ex3 = document.createElement('div')
document.body.appendChild(ex3);
ex3.style.width = '100px'
ex3.style.height = '100px'
ex3.style.backgroundColor = 'black'


ex3.onmousemove = (e) => {
    let y = Math.floor((256/100) * e.offsetY)
    let x = Math.floor((256/100) * e.offsetX)
    let z = Math.floor((x+y)/2)

    ex3.style.backgroundColor = `rgb(${x}, ${y}, ${z})`
    
}


// 4. Створіть 3 кубіка один в одному які будуть при кліку виводити щось про себе в консоль
let title4 = document.createElement('div');
title4.className = 'title';
title4.textContent = '4. Створіть 3 кубіка один в одному які будуть при кліку виводити щось про себе в консоль';
document.body.appendChild(title4);


let ex41 = document.createElement('div')
let ex42 = document.createElement('div')
let ex43 = document.createElement('div')


ex41.style.width = '200px'
ex41.style.height = '200px'
ex41.style.backgroundColor = 'aqua'
ex41.onclick = () => {
    console.log('I am like sky');
    
}

ex42.style.width = '100px'
ex42.style.height = '100px'
ex42.style.backgroundColor = 'green'
ex42.onclick = () => {
    console.log('I am like grass');
    
}

ex43.style.width = '50px'
ex43.style.height = '50px'
ex43.style.backgroundColor = 'yellow'
ex43.onclick = () => {
    console.log('I am like sun');
    
}


document.body.appendChild(ex41)
ex41.appendChild(ex42)
ex42.appendChild(ex43)




// 5. Створіть ще 3 кубіка які є один в одному, змініть напрямок виконання івенту, 
//    зупиніть виконання івентів на другому івенті (Див. лекцію).





let title5 = document.createElement('div');
title5.className = 'title';
title5.textContent = '5. Створіть ще 3 кубіка які є один в одному, змініть напрямок виконання івенту';
document.body.appendChild(title5);


let ex51 = document.createElement('div')
let ex52 = document.createElement('div')
let ex53 = document.createElement('div')


ex51.style.width = '200px'
ex51.style.height = '200px'
ex51.style.backgroundColor = 'aqua'


ex52.style.width = '100px'
ex52.style.height = '100px'
ex52.style.backgroundColor = 'green'


ex53.style.width = '50px'
ex53.style.height = '50px'
ex53.style.backgroundColor = 'yellow'



document.body.appendChild(ex51)
ex51.appendChild(ex52)
ex52.appendChild(ex53)


ex51.addEventListener('click', (el)=> {
    console.log('I am like sky');
},true)

ex52.addEventListener('click', (el)=> {
    
    console.log('I am like grass');
    el.stopPropagation()
},true)

ex53.addEventListener('click', (el)=> {
    console.log('I am like sun');
},true)



// 6. Використайте будь яку форму з домашної про форми (в модулі HTML\CSS), та отримайте дані з неї у вигляді об'єкту,
//    виведіть об'єкт форми в консоль. Відмініть поведінку за замовчуванням для кнопки submit у формі (Див. лекцію). 
let title6 = document.createElement('div');
title6.className = 'title';
title6.textContent = '6. Використайте будь яку форму з домашної про форми (в модулі HTML\CSS), та отримайте дані з неї у вигляді обєкту, виведіть обєкт форми в консоль. Відмініть поведінку за замовчуванням для кнопки submit у формі (Див. лекцію). '
document.body.appendChild(title6);

let ex6 = document.getElementById('form')
title6.after(ex6)

let ex61 = document.getElementById('1')
let ex62 = document.getElementById('2')
let ex63 = document.getElementById('3')

ex63.onclick = (el) => {
    console.log(ex61.value);
    console.log(ex62.value);
    el.preventDefault()

    
}


// 
let titles = document.querySelectorAll('.title')
for (let i = 0; i < titles.length; i++) {
    titles[i].style.margin = '20px'
    titles[i].style.fontSize = '20px'
    titles[i].style.fontWeight = '700'
    
}

// 