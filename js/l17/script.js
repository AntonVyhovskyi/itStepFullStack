// ---------------------------- 1 --------------------------
console.log('-------------1-----------------');
console.log('-------------for-----------------');

for (let i = 20; i < 33; i++) {
    if (i % 2 == 0) {
        console.log(i);

    }

}

console.log('.......... for of .............');

let arr1 = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]

for (const element of arr1) {
    if (element % 2 === 0) {
        console.log(element);

    }
}



console.log('----------- for in ----------------');

for (const index in arr1) {
    if (arr1[index] % 2 === 0) {
        console.log(arr1[index]);

    }
}

console.log('----------- while ----------------');

let i1 = 20
while (i1 < 33) {
    if (i1 % 2 === 0) {
        console.log(i1);

    }

    i1++
}

console.log('----------- do while ----------------');
i1 = 20
do {
    if (i1 % 2 === 0) {
        console.log(i1);

    }
    i1++

} while (i1 < 32);





// ------------------------------------   2   -----------------------------




console.log('------------2--------------');
console.log('------------for-----------');


let arr2 = [
    'banana', 'yellow', 'Serega', 2314, 28
]


for (let index = 0; index < arr2.length; index++) {
    console.log(arr2[index], ':', typeof arr2[index]);


}

console.log('------------for of-----------');

for (const element of arr2) {
    console.log(element, ':', typeof element);

}


console.log('------------for in-----------');

for (const i in arr2) {
    console.log(arr2[i], ':', typeof arr2[i]);

}

console.log('------------while-----------');

let i2 = 0

while (i2 < arr2.length) {
    console.log(arr2[i2], ':', typeof arr2[i2]);
    i2++

}

console.log('------------do while-----------');
i2 = 0
do {

    console.log(arr2[i2], ':', typeof arr2[i2]);
    i2++

} while (i2 < arr2.length);




// --------------------------------   3   ------------------------------------

console.log('---------------3----------------');

console.log('---------------for---------');

for (let i = 17; i <= 39; i++) {
    if (i % 2 === 0) {
        continue
    }

    console.log(i);


}

console.log('-----------------for of------------------');

let arr3 = [17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39];

for (const element of arr3) {
    if (element % 2 === 0) {
        continue
    }
    console.log(element);

}

console.log('-----------------for in-----------------');

for (const i in arr3) {
    if (arr3[i] % 2 === 0) {
        continue
    }

    console.log(arr3[i]);

}

console.log('-----------------while-----------------');

let i3 = 0
while (i3 < arr3.length) {
    if (arr3[i3] % 2 === 0) {
        i3++
        continue
    }
    console.log(arr3[i3]);
    i3++


}

console.log('-------------do while----------------');

i3 = 0

do {
    if (arr3[i3] % 2 === 0) {
        i3++
        continue
    }
    console.log(arr3[i3]);
    i3++
} while (i3 < arr3.length);


// --------------------------------   4   ------------------------------------

console.log('---------------4----------------');

console.log('---------------for---------');

let arr4 = [1, 5, true, 'hello', false, null, 'iiii', 54, null]

for (let index = 0; index < arr4.length; index++) {
    if (index % 2 !== 0) {
        console.log(arr4[index]);

    }

}

console.log('-----------------for of------------------');
let i4 = 1

for (const element of arr4) {
    if (i4 % 2 === 0) {
        console.log(element);
        i4++
        continue
    }
    i4++


}

console.log('-----------------for in-----------------');

for (const i in arr4) {
    if (i % 2 !== 0) {
        console.log(arr4[i]);

    }
}

console.log('-----------------while-----------------');

i4 = 0
while (i4 < arr4.length) {
    if (i4 % 2 === 0) {
        console.log(arr4[i4]);

    }

    i4++
}


console.log('-------------do while----------------');
i4 = 0
do {
    if (i4 % 2 === 0) {
        console.log(arr4[i4]);

    }

    i4++
} while (i4 < arr4.length);




// ------------------------------------- 5 ---------------------------------------



console.log('---------------5----------------');

console.log('---------------for---------');

for (let i = 0; i < arr4.length; i++) {
    if (i % 2 === 0) {
        console.log(arr4[i]);

    }

}

console.log('-----------------for of------------------');

let i5 = 0

for (const element of arr4) {
    if (i5 % 2 === 0) {
        console.log(element);

    }
    i5++
}

console.log('-----------------for in-----------------');

for (const i in arr4) {
    if (i % 2 === 0) {
        console.log(arr4[i]);

    }
}

console.log('-----------------while-----------------');

i5 = 0

while (i5 < arr4.length) {
    if (i5 % 2 === 0) {
        console.log(arr4[i5]);

    }
    i5++

}

console.log('-------------do while----------------');

i5 = 0
do {
    if (i5 % 2 === 0) {
        console.log(arr4[i5]);

    }
    i5++

} while (i5 < arr4.length);



// --------------------------------- 6 -----------------------------------------



console.log('---------------6----------------');
let arr6 = [1, 2, 4, 2, 3, 55, 66, 777, 12]
console.log('---------------for---------');
let result = 0
for (let index = 0; index < arr6.length; index++) {
    result = result + arr6[index]

}
console.log(result);


console.log('-----------------for of------------------');
result = 0
for (const element of arr6) {
    result = result + element
}
console.log(result);
console.log('-----------------for in-----------------');
result = 0
for (const i in arr6) {
    result = result + arr6[i]
}

console.log(result);

console.log('-----------------while-----------------');
result = 0
let ind = 0
while (ind < arr6.length) {
    result = result + arr6[ind]
    ind++
}
console.log(result);

console.log('-------------do while----------------');

result = 0
ind = 0

do {
    result = result + arr6[ind]
    ind++
} while (ind < arr6.length);

console.log(result);




// ------------------------------------- 7 -----------------------------




console.log('---------------7----------------');

let arr7 = [1, 2, 4, 2, 3, 5, 6, 7, 1]
result = 1
console.log('---------------for---------');
for (let i = 0; i < arr7.length; i++) {
    const element = arr7[i];
    result = result * element
}
console.log(result);

console.log('-----------------for of------------------');

result = 1

for (const element of arr7) {
    result = result * element
}
console.log(result);

console.log('-----------------for in-----------------');
result = 1

for (const i in arr7) {

    const element = arr7[i];

    result = result * element

}
console.log(result);

console.log('-----------------while-----------------');
result = 1
ind = 0
while (ind<arr7.length) {
    const element = arr7[ind];

    result = result * element

    ind++

}
console.log(result);


console.log('-------------do while----------------');

result = 1
ind = 0
do {
    const element = arr7[ind];

    result = result * element

    ind++
} while (ind<arr7.length);

console.log(result);




// ------------------------------------- 8 -----------------------------
console.log('---------------------------- 8 ------------------');

let pr = Number(prompt('number'))
ind = 0

console.log('---------------for---------');
for (let i = 0; i <= pr; i++) {
    if (i===5 || i===6 || i===7 || i===8 || i===9 || i===10) {
        continue
    }
    if (i>100) {
        break
    }

    console.log(i);
    
    
}

console.log('-----------------while-----------------');
ind = 0
while (ind<=pr) {
    if (ind===5 || ind===6 || ind===7 || ind===8 || ind===9 || ind===10) {
        ind++
        continue
    }
    if (ind>100) {
        break
    }

    console.log(ind);
    ind++
}
console.log('-------------do while----------------');
ind = 0
do {
    if (ind===5 || ind===6 || ind===7 || ind===8 || ind===9 || ind===10) {
        ind++
        continue
    }
    if (ind>100) {
        break
    }

    console.log(ind);
    ind++
} while (ind<=pr);