// Перша функція рекурсія (просто передам масив спред оператором а прийму рест)

console.log('Перша функція рекурсія (просто передам масив спред оператором а прийму рест)');


console.log('hello I,m recurse function');

let arr1 = [1, 2, 3, 3, 2, 1, 4, 5, 6]
let arr2 = ['hello', true, 23, 'recurse function', false, null, 'the best']

const recurseFunction = (i = 0, ...arr) => {
    if (arr.length > i) {
        console.log(arr[i]);
        recurseFunction(++i, ...arr)
        
    }
}

recurseFunction(0, ...arr1)
console.log('-----------example 2---------');
recurseFunction(0, ...arr2)

// Друге завдання рекурсивна функція с логікой навпаки
console.log('------------recurse function with reverse logic--------------');

const recurseReverseFunction = (i = 0, ...arr) => {
    if (arr.length <= i) return

    console.log(arr[i]);
    recurseReverseFunction(++i, ...arr)
    
}

recurseReverseFunction(0, ...arr1)
console.log('-------------example 2--------');

recurseReverseFunction(0, ...arr2)


// Потім у нас завдання із замиканням. В данному випадку я вирішив використати деструктуризацію
// Так як я побочив що данна функція повертає в моему розумінні обьект с методами тому я вирішив
// витягнути ці методи данним способом

console.log('Потім у нас завдання із замиканням. В данному випадку я вирішив використати деструктуризацію');
console.log('Так як я побочив що данна функція повертає в моему розумінні обьект с методами тому я вирішив');
console.log('витягнути ці методи данним способом');


// Третє завдання замикання 
console.log('-----------------halo i,m closure function');

const closureFunction = () => {
    let num = 0

    function dec() {
        num++
        return num
        
    }

    function inc() {
        num--
        return num
        
    }

    function getNum() {
        return num
        
    }

    return {
        dec: dec,
        inc: inc,
        getNum: getNum
    }
}


const {dec, inc, getNum} = closureFunction()

console.log(dec());
console.log(dec());
console.log(inc());
console.log(getNum());



// В функціях с колбеками ну було не масивів не обьектів. 
// Тому я вирішив їх пропустити і перейти до наступного завдання
console.log('Копіюєио масив');


const randomNumbers = [42, 17, 93, 8, 65];
const randomStrings = ['apple', 'banana', 'cherry', 'dragonfruit', 'elderberry'];
const randomBooleans = [true, false, true, false, true];
const nestedMixedArray = [true, [99, 'hello'], null, [[{ name: 'John' }, 42], 'world']];
const nestedArray = [
    [2, 3, false],
    [
        null,
        [2, 'lalala', 10, 22, ['flat', [2, 3, 4]]]
    ],
    23
];

const firstMetodCopyArray = [...randomNumbers]
console.log(firstMetodCopyArray);
const secondMethodCopyArray = randomStrings.slice()
console.log(secondMethodCopyArray);
const thirdMetodComyArray = randomBooleans.map((e)=>e)
console.log(thirdMetodComyArray);
const fourthMetodCopyArray = JSON.parse(JSON.stringify(nestedMixedArray))
console.log(fourthMetodCopyArray);

const recurseCopy = (arr) => {
    let newArray = []
    for (let el of arr) {
        if (Array.isArray(el)){
            newArray.push(recurseCopy(el))
        }  else {
            newArray.push(el)
        }
    }
    return newArray
}

const fifthMetodCopyArray = recurseCopy(nestedArray)
console.log(fifthMetodCopyArray);



// Копыюемо обьект

const obj51111 = {
    name: "John",
    age: 28,
    isActive: true,
};

const obj52222 = {
    product: "Laptop",
    price: 1500,
    inStock: false,
};

const obj5333 = {
    title: "Book",
    author: "Jane Austen",
    year: 1813,
};

const obj5444 = {
    user: {
        id: 101,
        name: "Alice",
        preferences: {
            theme: "dark",
            notifications: true,
        },
    },
    posts: [
        { id: 1, content: "Hello world!" },
        { id: 2, content: "My second post" },
    ],
};

const obj55555 = {
    order: {
        orderId: "ORD12345",
        date: "2024-11-23",
        customer: {
            name: "Bob",
            email: "bob@example.com",
        },
        items: [
            { product: "Phone", quantity: 2, price: 700 },
            { product: "Charger", quantity: 1, price: 50 },
        ],
    },
    status: "Processing",
};


let firstMerodCopyObj = {...obj51111}

console.log(firstMerodCopyObj);

let secondMetodCopyObj = Object.assign({}, obj52222)

console.log(secondMetodCopyObj);

let thirthMetodCopyObj = JSON.parse(JSON.stringify(obj5333))

console.log(thirthMetodCopyObj);

function copyObjRecurs (obj) {
    let newObj = {}
    for (const key in obj) {
        if (Array.isArray(obj[key])) {
            newObj[key] = copyArrayForRecursCopyForObj(obj[key])
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            newObj[key] = copyObjRecurs(obj[key])
        } else {
            newObj[key] = obj[key]
        }
    }
    return newObj
}

function copyArrayForRecursCopyForObj (arr) {
    let newArray = []
    for (const el of arr) {
        if (Array.isArray(el)) {
            newArray.push(copyArrayForRecursCopyForObj(el))
        } else if (typeof el === 'obj' && el !== null) {
            newArray.push(copyObjRecurs(el))
        } else { newArray.push(el) }
    }
    return newArray
}

//  Честно користувався чатом джбити але тільки для того щоб знати як правильно написати
//  код писав сам не підглядуючи тільки після того як зрозумів як він працює


let fourthMerodCopyObj = copyObjRecurs(obj5444)

console.log(fourthMerodCopyObj);


let fifthMetodCopyObj = structuredClone(obj55555)  // найшов цей метод на ютубі
console.log(fifthMetodCopyObj);


fifthMetodCopyObj.order.orderId = 1
console.log(fifthMetodCopyObj.order.orderId);
console.log(obj55555.order.orderId);


