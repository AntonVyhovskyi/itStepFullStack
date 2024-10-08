console.log('----------------------1----------------------');
let ex1 = '1'

console.log(typeof(!!ex1));

ex1 = 1

console.log(typeof(!!ex1));

ex1 = '1'

console.log(typeof(Number(ex1)));

ex1 = null

console.log(typeof(!!ex1));

ex = undefined

console.log(typeof(!!ex1));

console.log('----------------------2----------------------');

let user = {
    name: 'Anton',
    lvl: 82,
    hp: 1256,
    ult: {
        name: 'Black hole',
        type: 'Massive',
        kd: {
            lvl1: '120s',
            lvl2: '80s',
            lvl3: '60s' 
        }
    }
}

console.log(user.ult.name, user.ult.kd.lvl1, user.ult.kd.lvl3)

console.log('----------------------3----------------------');

let ex3 = [[1, [2, 3, 8], [11, 12, 38]], [4, 5], [6, 7]]

console.log( ex3[2][1], ex3[0][1][2],  ex3[0][2][1]);

console.log('----------------------4----------------------');

for (let i = 2; i <= 20 ; i = i +2) {
    console.log(i);
    
    
}


console.log('----------------------5----------------------');

let ex5 = ['banana', 'rozheviy', '28']

console.log(ex5);
console.log(typeof ex5);




console.log('----------------------6----------------------');

let ex61 = Number(prompt('напиши число'))
let ex62 = Number(prompt('напиши число'))

if (ex61 > ex62) {
    console.log(ex61);
    
} else if (ex61 < ex62) {
    console.log(ex62);
    
} else console.log( ex61, '=', ex62);

console.log('----------------------7----------------------');

for (let i = 1; i <= 15; i = i + 2) {
    console.log(i);
    
    
}

console.log('----------------------8----------------------');
let ex8 = [1, 5, true, 'hello', false, null, 'iiii', 54, null]

for (let i = 0; i < ex8.length; i = i + 2 ) {
    const element = ex8[i];
    console.log(element);
    
    
}

console.log('----------------------9----------------------');

for (let i = 1; i < ex8.length; i = i + 2 ) {
    const element = ex8[i];
    console.log(element);
    
    
}

console.log('----------------------10----------------------');

let ex10 =  [1, 2, 4, 2, 3, 55, 66, 777, 12]

let result = 0

for (let i = 0; i < ex10.length; i++) {
    result = result + ex10[i]
    
    
}

console.log(result);

console.log('----------------------11----------------------');


let ex11 =  [1, 2, 4, 2, 3, 5, 6, 7, 1]

let result2 = 1

for (let i = 0; i < ex11.length; i++) {
    result2 = result2 * ex11[i]
    
    
}

console.log(result2);

