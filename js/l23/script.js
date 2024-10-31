const users = [
    { name: "Alice", age: 25, email: "alice@example.com", status: "active" },
    { name: "Bob", age: 30, email: "bob@example.com", status: "inactive" },
    { name: "Charlie", age: 22, email: "charlie@example.com", status: "active" },
    { name: "David", age: 28, email: "david@example.com", status: "inactive" },
    { name: "Eve", age: 35, email: "eve@example.com", status: "active" }
];


// 1 Найди юзера с емейлом eve@example.com 

console.log('----------------- 1 Найди юзера с емейлом eve@example.com ');


let user1 = users.find((el)=>el.email === 'eve@example.com')

console.log(user1);


// 2 Виведи рандомного юзера

console.log('--------- 2 Виведи рандомного юзера');


let user2 = users[Math.floor(Math.random() * users.length)]

console.log(user2);


// 3 визнач індекс елемента с емейлом eve@example.com 

console.log('----------- 3 визнач індекс елемента с емейлом eve@example.com');

let user3 = users.findIndex((el)=>el.email === 'eve@example.com')

console.log(user3);

// 4 знайди index  першogo числa 11

console.log('------------4 знайди index  першogo числa 11');

let arr4 = [1, 11, 23, 11, 12, 15, 11, 12]

let find4 = arr4.indexOf(11)

console.log(find4);

// 5 знайди  index ostanyogo chisla 11

console.log('------------5 знайди  index ostanyogo chisla 11');
let find5 = arr4.lastIndexOf(11)

console.log(find5);

// 6 відсортуй по віку

console.log('--------------------6 відсортуй по віку');

let sortUsers6 = users.sort((a, b) => a.age - b.age)

console.log(sortUsers6);



// 7  тепер зроби реверс
console.log('--------------------7  тепер зроби реверс');
let reverseUsers6 = [...sortUsers6]

reverseUsers6.reverse()

console.log(reverseUsers6);


// 8 виведи всіх юзерів зі статусом актів
console.log('---------- 8 виведи всіх юзерів зі статусом актів');

let users8 = users.filter((el)=>el.status === 'active')

console.log(users8);

// 9 перевір чи є хоч один юзер с емейлом такого@немає.ком а потим перевір ще такий charlie@example.com

console.log('------- 9 перевір чи є хоч один юзер с емейлом такого@немає.ком а потим перевір ще такий charlie@example.com');

let res91 = users.some((el)=>el.email === 'такого@немає.ком')

let res92 = users.some((el)=> el.email === 'charlie@example.com')

console.log(res91);
console.log(res92);

// 10 перевірь чи всі юзери повнолітні

console.log('-------------10 перевірь чи всі юзери повнолітні');

let cpvnltni = users.every((el)=>el.age>18)

console.log(cpvnltni);

// 11 перевірь чи в масиві чисел ж 12

let incCh = arr4.includes(12)

console.log('-------- 11 перевірь чи в масиві чисел є 12');

console.log(incCh);

// 12  зроби багаторівневий рядок однорівневим
console.log('----------12  зроби багаторівневий array однорівневим');

const deepArray12 = [[[[[[[[[[42, 7], 15], 3], 88], [6, 13]], [34, 17]], 9], [58]], 27], 14];

let newarray12 = deepArray12.flat(Infinity)

console.log(newarray12);

// 13 обьеднай два масива
console.log('-------------13 обьеднай два масива');
let array131 = [1, 3, 5, 7, 9];
let array132 = [2, 4, 6, 8, 10];


let newArray13 = array131.concat(array132)

console.log(newArray13);


// 14 а тепер зроби новий масив з юзерів і всім хто зараз в статусі актів добав подарунок

console.log('---------14 а тепер зроби новий масив з юзерів і всім хто зараз в статусі актів добав подарунок');


let winUsers = users.map((el)=>{

    if (el.status === 'active') {
        return {...el, bonus: 'yes'}
    }

    return el
})


console.log(winUsers);

