// 

// 1. Створіть функцію для обчислення факторіалу числа.
//    Створіть функцію calculateFactorial(n), яка приймає аргумент n (ціле число)
//    і виводить в консоль факторіал цього числа. Використовуйте цикл для обчислення факторіалу.


function calculateFactorial (n) {
    if (n === 0 || n === 1) {
        return 1
    }

    let result = 1

    for (let i = 1; i <= n; i++) {
        result = result * i;
        
    }

    return result
}


const zavdannya1 = calculateFactorial(10)
console.log('-------1. Створіть функцію для обчислення факторіалу числа.-----------');

console.log(zavdannya1);


// 2. Підрахунок кількості слів у рядку.
//    Створіть функцію countSymb(sym), яка приймає рядок через prompt
//    і виводить в консоль кількість букв у цьому рядку.
//    Використовуйте умови та цикли для підрахунку букв.
//    ** Підказка стрічку також можна ітерувати, використваши .length


function countSymb(sym) {
    let result = 0
    for (let i = 0; i< sym.length; i++) {
      const element = sym[i]
      if (element === ' ' || element === '.' || element === ',' || element === '!' || element === '?') {
        continue
      }
      result++
       
    }
    return result
}

let ex2 = prompt('Ввведи строку. Порахуем букви')
let ex2result = countSymb(ex2)

console.log('---------2. Підрахунок кількості слів у рядку.---------');

console.log(ex2result);


// 3. Створіть функцію для визначення простого числа (ціле число це число без коми: 1, 44, 100 ітд).
//    Створіть функцію isPrime(number), яка приймає аргумент number і повертає (return) true,
//    якщо число є простим, і false, якщо не є.
//    ** Просте число це 3, 56, 23
//       Не просте це 1.33, 4.1, 55.222


function isPrime(number) {
    const numberString = String(number)
    for (let i = 0; i < numberString.length; i++) {
        const element = numberString[i];
        if (element === '.') {
            return false
        }
        
    }
    return true
}

let ex3 = isPrime(231)
let ex32 = isPrime(2.23)

console.log('------3. Створіть функцію для визначення простого числа (ціле число це число без коми: 1, 44, 100 ітд).------------');

console.log('231');

console.log(ex3);

console.log('2.23');

console.log(ex32);


// 4. Запит на пароль.
//    Створіть функцію passwordPrompt(), яка приймає пароль і повторення паролю через prompt().
//    Після цього викликайте цю функцію, якщо паролі співпадають має вивестись (console): Успіх, а в іншому випадку: Невдача.

function passwordPrompt() {
    let pass = prompt('Введи пароль')
    let pass2 = prompt('Введи пароль ще раз')
    if (pass === pass2) {
        console.log('Успіх');
        return
        
    }


    console.log('Невдача');
    
}
console.log('--------4. Запит на пароль.----------');

passwordPrompt()


// 5. Факторіал чисел в діапазоні.
//    Створіть функцію factorialRange(num1, num2, num3),
//    яка приймає 2 числа.
//    Функція має обчислити факторіали всіх чисел і повернути (return) результат у вигляді об'єкта {num1: num2, num3: } і вивести



function factorialRange(num1, num2, num3){
    let num1Res = 1
    let num2Res = 1
    let num3Res = 1
    for (let i = 1; i <= num1; i++) {
        if (num1 === 0 || num1 ===1) {
            break
        }
        num1Res = num1Res * i
        
    }
    for (let i = 1; i <= num2; i++) {
        if (num2 === 0 || num2 ===1) {
            break
        }
        num2Res = num2Res * i
        
    }
    for (let i = 1; i <= num3; i++) {
        if (num3 === 0 || num3 ===1) {
            break
        }
        num3Res = num3Res * i
        
    }
    return {
        num1: num1Res,
        num2: num2Res,
        num3: num3Res
    }

}

let ex5 = factorialRange(1, 10, 20)
console.log('-------- 5. Факторіал чисел в діапазоні.----------');

console.log(ex5);

// 6. Калькурятор.
//    Створіть функцію calc(num1, num2, action), яка приймає 2 числа з prompt
//    та знак по якому потірбно порахувати приклад. Мусять бути наступні дії: (+, -, /, *)
//    Результат повернути (return) і вивести


function calc(num1, num2, action) {
    let result
    if (action !== '/' && action !== '*' && action !== '+' && action !== '-') {
        return 'Неправильно ввеений знак'
    }

    if (action === '/') {
        result = Number(num1) / Number(num2)
    }

    if (action === '+') {
        result = Number(num1) + Number(num2)
    }

    if (action === '-') {
        result = Number(num1) - Number(num2)
    }

    if (action === '*') {
        result = Number(num1) * Number(num2)
    }

    return result

}


let ex6num1 = prompt('введи перше число для калькулятора')
let ex6num2 = prompt('введи друге число для калькулятора')
let ex6shild = prompt('введи знак / * + або мінус')

let ex6result = calc(ex6num1, ex6num2, ex6shild)

console.log('-----------6. Калькурятор.---------');

console.log(ex6result);
