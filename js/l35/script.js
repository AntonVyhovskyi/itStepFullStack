// 1. Зміна стилю елементу: Створіть HTML-сторінку з декількома елементами, такими як кнопки або тексти.
//    Використовуючи JavaScript, змініть стиль одного або декількох елементів 
//    (наприклад, колір фону або розмір шрифту).


let ex1 = document.querySelector('.ex1')
let ex11 = document.querySelector('.ex11')
ex1.style.color = 'red';
ex11.style.fontSize = '33px';

console.log(ex11.style);


// 2. Зміна текстового вмісту: Створіть елементи, які містять текст. 
// За допомогою JavaScript, змініть текстовий вміст одного або декількох елементів.

let ex2 = document.getElementById('ex2')


ex2.innerHTML = 'зміниний текст';



// 3. Додавання нового елементу: За допомогою JavaScript,
//    додайте 3 нові елемент до DOM-структури.

let ex3 = document.querySelector('.ex3')
ex3.innerHTML = '<div>aaaa111</div>'
ex3.innerHTML += '<div>aaaa222</div>'
ex3.innerHTML += '<div>aaaa333</div>'



// 4. Видалення елементу: За допомогою JavaScript, видаліть декілька елементів з DOM.

let ex4 = document.querySelector('.ex4')
let itemsEx4 = ex4.querySelectorAll('div')
ex4.removeChild(itemsEx4[0])
ex4.removeChild(itemsEx4[2])

// 5. Зміна атрибутів: Створіть елементи, які мають атрибути 
//    (наприклад, "src" для зображення або "href" для посилання).
//    За допомогою JavaScript, змініть атрибути цих елементів.

let ex5 = document.querySelector('.ex5')
ex5.href = 'http://google.com'

// 6. Сортування списку: Створіть список (наприклад, список <ul>) з декількома пунктами. 
//    Використовуючи JavaScript, відсортуйте цей список в алфавітному порядку.

let ex6 = document.querySelector('.ex6')
let itemsEx6 = Array.from(ex6.querySelectorAll('li'))

ex6.innerHTML = ''

itemsEx6.sort((a,b) => a.innerHTML-b.innerHTML)

itemsEx6.forEach((el=>ex6.appendChild(el)))

// 7. Зміна порядку елементів: Створіть декілька елементів. За допомогою JavaScript,
//    змініть порядок цих елементів в DOM.

let ex7 = document.querySelector('.ex7')
ex7.appendChild(document.createElement('div'))
ex7.appendChild(document.createElement('div'))
let itemsEx7 = Array.from(ex7.querySelectorAll('div'))
itemsEx7[0].innerHTML = 'first'
itemsEx7[1].innerHTML = 'second'

ex7.innerHTML = ''
itemsEx7.reverse().forEach((el)=> ex7.appendChild(el))

// 8. Видалення дочірніх елементів: Створіть батьківський елемент, який містить декілька дочірніх елементів.
//    Використовуючи JavaScript, видаліть всі дочірні елементи цього батьківського елемента.

let ex8 = document.querySelector('.ex8')

ex8.innerHTML = ''

// 9. Зміна класів: Створіть сторінку з елементами, які мають CSS-класи. За допомогою JavaScript, змініть класи цих елементів без використання подій.

let ex9 = document.querySelector('.ex9')
ex9.className = 'backgroundred'


// 10. Зміна HTML-структури: Створіть сторінку з деревом DOM-структури. 
//     Використовуючи JavaScript, змініть HTML-структуру шляхом додавання нових елементів,
//     переміщення або видалення існуючих елементів.


let ex10 = document.querySelector('.ex10')
let ex10A = ex10.querySelector('a')
ex10.appendChild(document.createElement('div'))
let ex10Divs = ex10.querySelectorAll('div')
ex10Divs[4].innerHTML = '5'
ex10A.before(ex10Divs[0])
ex10.removeChild(ex10Divs[1])
