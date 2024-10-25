// - Напишіть 5 прикладів анонімної функції

// 1.1

console.log('--------------Напишіть 5 прикладів анонімної функції');


const ex1exmpl1 = function() {
    console.log('Перший приклад анонімної функція яку ми привласнили константі. І тепер її можна викликати.');
    
}

ex1exmpl1()


// 1.2 


console.log(function () {
    console.log('Другий приклад. функцчя не спрацює, але ми побачимо саму функцію в консолі');
    
});


// 1.3

function ex1exzmpl3(funct) {
    funct()
}

ex1exzmpl3(function(){
    console.log('Другий приклад. Створюємо функцію яка приймає і викликае функцію. Потім викликаемо її передаючи атрибутом анонімну функцію');
    
})

// 1.4

function ex1exmpl4() {
    return function() {
        console.log('Читвертий приклад. Повертаемо через нормальну функцію анонімну. Потім привласнюємо її константі і викликаеємо.');
        
    }
}

const ex1exmpl42 = ex1exmpl4()

ex1exmpl42()

// 1.5

function ex1exmpl5 (res) {
    let trueOrNine = res()
    if (trueOrNine === true) {
        console.log('В пьятому прикладі нормальна функція виконує дію тільки якшо передана атрибутом анонімна функція повертає true');
        
    }
}

ex1exmpl5(function(){return 1+1 === 2})

console.log(' У всії пяти прикладах функції були анонімні і викликані якимись другими інструментами');


//  - Напишіть 5 прикладів самовикликаючої функції


console.log(' --------------------- Напишіть 5 прикладів самовикликаючої функції');

// 2.1
(function () {
    console.log('Перший приклад.');
    
}())

// 2.2
function ex2exmpl2 () {
    (function(){
        console.log('Другий приклад. Самовикликаюча функція викликаеться в функції');
        
    }())
}

ex2exmpl2()

// 2.3
function ex1exmpl5 (res) {
    
    if (res === true) {
        console.log('В третьому прикладі нормальна функція виконує дію тільки якшо переданий атрибут є тру. Передав атрибутом анонімну самовикликаючу функцію яка вертає тру');
        
    }
}

ex1exmpl5(function(){return true}())

// 2.4 

console.log(function(){return '4й приклад. тепер в сам консоль лог передав самовикликаючу функцію яка повертає цей текст'}());

// 2.5

(function(text) {
    console.log(text);
    
}('5й приклад схожий на перший але в цей раз текст переданий атрибутом'))

//  - Повторіть колбек функцію bubbleSort з лекції 

console.log('---------------- Повторіть колбек функцію bubbleSort з лекції ');


function bubbleSort (arr, cb)  {
    let act = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
           act++
            if(cb(arr[j], arr[j+1])) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
        
    }

    return `array: ${arr} ; actions: ${act}`
}

let sortArray = bubbleSort([3, 1, 10, 22, 19, 105, 23, 11, 20, 87, 2012], ( a, b)=> a > b )

console.log(sortArray);


// Калькурятор.
// Створіть функцію calc(num1, num2, action), яка приймає 2 числа з prompt
// та знак по якому потірбно порахувати приклад. Мусять бути наступні дії: (+, -, /, *)
// Результат повернути (return) і вивести

// На основі цього завдання зробіть 3 приклади:
// - Зробіть калькулятор застосовуючи підхід Function in function (1-ий приклад Function in function в лекції)
// - Зробіть калькулятор застосовуючи підхід Function in function (2-ий приклад Function in function в лекції)
// - Зробіть калькулятор використовуючи функцію зворотнього виклику (callback function), 

console.log('------------Калькурятор.');

console.log('перший приклад');


// ------------------------перший приклад калькулятора

function calcFirstVar (a, b, action) {
    function plus () {return a + b}
    function minus () {return a - b}
    function multi () {return a * b}
    function div () {return a / b}

    switch (action) {
        case '+': return plus();
        case '-': return minus();
        case '*': return multi();
        case '/': return div()
        
    }

}

let calcResult1 = calcFirstVar(2, 3, '+')
let calcResult2 = calcFirstVar(2, 3, '*')
let calcResult3 = calcFirstVar(2, 3, '/')
let calcResult4 = calcFirstVar(2, 3, '-')

console.log(calcResult1);
console.log(calcResult2);
console.log(calcResult3);
console.log(calcResult4);

// ------------------------дпугий приклад калькулятора

console.log('другий приклад');

function plus (a, b) {return a + b}
function minus (a, b) {return a - b}
function multi (a, b) {return a * b}
function div (a, b) {return a / b}

function calcSecondVar (a, b, action) {


    switch (action) {
        case '+': return plus(a, b);
        case '-': return minus(a, b);
        case '*': return multi(a, b);
        case '/': return div(a, b)
        
    }

}

calcResult1 = calcSecondVar(6, 3, '+')
calcResult2 = calcSecondVar(6, 3, '*')
calcResult3 = calcSecondVar(6, 3, '/')
calcResult4 = calcSecondVar(6, 3, '-')

console.log(calcResult1);
console.log(calcResult2);
console.log(calcResult3);
console.log(calcResult4);


// ------------------------дпугий приклад калькулятора с кб


function canlThirtyVar (a, b, cb) {
    return cb(a,b)
}

console.log('третий варіант с колбеком');


let calcResult5 = canlThirtyVar(9, 3, plus)  // функції взяв з другого прикладу
let calcResult6 = canlThirtyVar(9, 3, minus)
let calcResult7 = canlThirtyVar(9, 3, multi) 
let calcResult8 = canlThirtyVar(9, 3, div)

console.log(calcResult5);
console.log(calcResult6);
console.log(calcResult7);
console.log(calcResult8);

