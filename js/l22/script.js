

let array1 = []

for (let i = 0; i < 200; i++) {
    array1.push(i+1)
    
}

console.log(array1);


//  1. Напишіть цикл, який виводить всі парні числа від 20 до 32.
console.log('---------------------------- 1. Напишіть цикл, який виводить всі парні числа від 20 до 32.');


let newArray1 = []
array1.forEach((val)=>{
    if (val > 19 && val%2 == 0 && val<33) {
        newArray1.push(val)
    }
})

console.log(newArray1);



// 2. Створіть масив зі списком:

//    вашого улюбленого фрукту,
//    вашого улюбленого кольору,
//    ім'я,
//    рандомного числа,
//    вашого віку.

//    Виведіть цей проітерований масив на консоль і визначте його тип даних.


console.log('------------------------ 2. Створіть масив зі списком:  Виведіть цей проітерований масив на консоль і визначте його тип даних.');


let arr2 = ['груша', 'white', 'Anton', 32, 28]
let newArr2 = []
arr2.forEach((val)=>{newArr2.push(typeof(val))})
console.log(newArr2);



// 3. Напишіть цикл який виводить всі непарні числа від 17 до 39.



console.log('------------------3. Напишіть цикл який виводить всі непарні числа від 17 до 39.');


let newArray3 = []
array1.forEach((val)=>{
    if (val > 16 && val%2 !== 0 && val<40) {
        newArray3.push(val)
    }
})

console.log(newArray3)




// 4. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть парні елементи



console.log('-------------4. Даний масив ..., виведіть парні елементи',  [1, 5, true, 'hello', false, null, 'iiii', 54, null]);


let arr4 = [1, 5, true, 'hello', false, null, 'iiii', 54, null]

let newArr4 = []

arr4.forEach((val, ind) => {
    if (ind !==0 && ind%2 !== 0) {
        newArr4.push(val)
    }
})

console.log(newArr4);



// 5. Даний масив [1, 5, true, 'hello', false, null, 'iiii', 54, null], виведіть не парні елементи



console.log('------------------------- 5. виведіть не парні елементи');


let newArr5 = []

arr4.forEach((val, ind) => {
    if (ind%2 == 0) {
        newArr5.push(val)
    }
})

console.log(newArr5);

// 6. Даний масив [1, 2, 4, 2, 3, 55, 66, 777, 12]. Виведіть суму всіх  елементів масиву.
console.log('-----------------Даний масив [1, 2, 4, 2, 3, 55, 66, 777, 12] . Виведіть суму всіх  елементів масиву.');


let arr6 = [1, 2, 4, 2, 3, 55, 66, 777, 12]
let res6 = 0

arr6.forEach((val)=>{res6+=val})
console.log(res6);


// Даний масив [1, 2, 4, 2, 3, 5, 6, 7, 1]. Перемножити та вивести всі елементи масиву.

let arr7 = [1, 2, 4, 2, 3, 5, 6, 7, 1]
let res7 = 1

arr7.forEach((val)=>{res7*=val})
console.log(res7);



// 8. Створіть prompt в якому потрібно проітерувати число з 0. 
//    Якщо це числа 5, 6, 7, 8, 9, 10 то пропустити ітерацію.
//    Якщо це числа 100 і більше, завершити ітерацію.

console.log('-------------------8. Створіть prompt в якому потрібно проітерувати число з 0. ');


const chislo8 = Number(prompt('Введи число для ітерації'))
let res8 = [0]

function iteracia8 (chislo) {
    array1.forEach((val)=>{
        if(val>100) {
            return
        }else if (val <= chislo && val !==5 && val !==6 && val !==7 && val !==8 && val !==9 && val !==10 ) {
            res8.push(val)
        }
        
    })
}

iteracia8(chislo8)

console.log(res8);


// 9. Створіть функцію яка приймає дробове значення (наприклад 1.34 чи 55.43), та заокруглює його до меншого числа і повертає значення.


console.log('----------------------9. Створіть функцію яка приймає дробове значення (наприклад 1.34 чи 55.43), та заокруглює його до меншого числа і повертає значення.');

function muth9(num) {
    return Math.floor(num)
}

let res9 = muth9(12.232)

console.log(res9);



// 10. Створіть функцію яка приймає дробове значення (наприклад 1.34 чи 55.43), та заокруглює його до більшого числа і повертає значення.


console.log('----------------------10. Створіть функцію яка приймає дробове значення (наприклад 1.34 чи 55.43), та заокруглює його до більшого числа і повертає значення.');

function muth10(num) {
    return Math.ceil(num)
}

let res10 = muth10(12.232)

console.log(res10);

// 11. Створіть функцію яка генерує рандомне число (випадкове) від 0 до 1000 і повертає його.

console.log('---------------------11. Створіть функцію яка генерує рандомне число (випадкове) від 0 до 1000 і повертає його.');

function muth11() {
    return Math.random() * 1000
}

let res11 = muth11()

console.log(res11);

// 12. Створіть функцію яка приймає 2 числа та виодить степіть перше число основне, друге сама степіть.


console.log('-------------------12. Створіть функцію яка приймає 2 числа та виодить степіть перше число основне, друге сама степіть.');

function muth12(num1, num2) {
    return Math.pow(num1, num2)
}


let res12 = muth12(2, 3)

console.log(res12);


// 13. Створіть функцію яка приймає число, виводить з нього корінь, заокруглює його і повертає.

console.log('--------------------13. Створіть функцію яка приймає число, виводить з нього корінь, заокруглює його і повертає.');

function math13 (num) {
    return Math.round(Math.sqrt(num)) 
}

let res13 = math13(13)

console.log(res13);


// 14. Дано масив [1, 5, true], додати в кінець масиву 'Hello'

console.log('------------14. Дано масив [1, 5, true], додати в кінець масиву hallo');

let mass14 = [1, 5, true]

mass14.push('hallo')

console.log(mass14);

// 15. Дано масив [1, 5, true], додати в початок масиву 'HelloArray'

console.log('----------------15. Дано масив [1, 5, true], додати в початок масиву HelloArray');


let mass15 = [1, 5, true]

mass15.unshift('HelloArray')

console.log(mass15);



// 16. Дано масив [1, 5, true], видалити останній елемент з масиву

console.log('------------16. Дано масив [1, 5, true], видалити останній елемент з масиву');

let mass16 = [1, 5, true]

mass16.pop()

console.log(mass16);


// 17. Дано масив [1, 5, true], видалити перший елемент з масиву

console.log('------------17. Дано масив [1, 5, true], видалити перший елемент з масиву');




let mass17 = [1, 5, true]


mass17.shift()

console.log(mass17);


// 18. Дано масив [5, true, 'hello', false, null, 5] вирізати *в новий масив* з 1 по 5 індекс
console.log('------------------// 18. Дано масив [5, true, hello, false, null, 5] вирізати *в новий масив* з 1 по 5 індекс');

let mass18 = [5, true, 'hello', false, null, 5]

let res18 = mass18.splice(1, 5)


console.log(res18);


// 19. Дано масив [5, true, 'hello', false, null, 5] вирізати з 1 по 5 індекс дані

console.log('------19. Дано масив [5, true, hello, false, null, 5] вирізати з 1 по 5 індекс дані');


let mass19 = [5, true, 'hello', false, null, 5]

mass19.splice(1, 5)

console.log(mass19);

// 20. Дано масив [5, true, 'hello', false, null, 5] вирізати з 1 по 5 індекс та вставити 10, 100, 111, 222

console.log('20. Дано масив [5, true, hello, false, null, 5] вирізати з 1 по 5 індекс та вставити 10, 100, 111, 222');


let mass20 = [5, true, 'hello', false, null, 5]

mass20.splice(1, 5, 10, 100, 111, 222)

console.log(mass20);


// 21. Створені масиви під час виконанняцього завдання об'єднайте в рядок, а потім назад приведіть рядок в масив.

console.log('---------------------21. Створені масиви під час виконанняцього завдання обєднайте в рядок, а потім назад приведіть рядок в масив.');


let mutmass14 = mass14.join('?')
let mutmass15 = mass15.join('?')
let mutmass16 = mass16.join('?')
let mutmass17 = mass17.join('?')
let mutmass18 = res18.join('?')
let mutmass19 = mass19.join('?')
let mutmass120 = mass20.join('?')


console.log(mutmass14);
console.log(mutmass15);
console.log(mutmass16);
console.log(mutmass17);
console.log(mutmass18);
console.log(mutmass19);
console.log(mutmass120);


console.log(mutmass14.split('?'));
console.log(mutmass15.split('?'));
console.log(mutmass16.split('?'));
console.log(mutmass17.split('?'));
console.log(mutmass18.split('?'));
console.log(mutmass19.split('?'));
console.log(mutmass120.split('?'));
