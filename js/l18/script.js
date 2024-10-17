// ---------------------------  1  -------------------------

const array1 = ['Київ', 'Херсон', 'Крим', 'Запоріжжя', 'Донецьк', 'Білгород', 'Львів'];
let result = '';
let collectIt = 0
for (let i = 0; i < array1.length; i++) {
    collectIt ++
    if (array1[i] === 'Крим') {
        result = `index: ${i}, value: ${array1[i]}`
        break
    }
    
}
console.log('---------------------- 1 -----------------------');
console.log('Лінійний Алгоритм:' + result);
console.log('Кількість ітерацій:' + collectIt);

// ------------------------ 2 ----------------------------

const array2 = [1, 3, 5, 6, 9, 10, 20, 30, 32, 33, 44, 50, 55, 56, 60, 100, 110]

let startInd = 0
let endInd = array2.length - 1
let center = endInd / 2
let find = 60
collectIt = 0
result = 'не знайдено'

do {
    collectIt ++
    if (find === array2[center]) {
        result = `index: ${center}; value: ${array2[center]}`
        break
    }
    if(find > array2[center]) {
        startInd = center + 1
        center = Math.round((startInd + endInd) / 2)
    }
    if(find < array2[center]) {
        endInd = center - 1
        center = Math.round((startInd + endInd) / 2)
    }
    
} while (startInd <= endInd);

console.log('-------------------- 2 --------------------');

console.log('Бінарний алгоритм: ' + result);
console.log('Кількість ітерацій: ' + collectIt);


