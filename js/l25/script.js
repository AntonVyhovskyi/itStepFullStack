// -----------------Number------------------------
console.log('-----------------Number------------------------');


console.log(Number.isInteger(2));
console.log(Number.isInteger(2.2));
console.log(Number.isFinite(2));
console.log(Number.isFinite(Infinity));
console.log(Number.parseInt('2'));
console.log(Number.parseFloat('2.2'));


let num1 = 2.22

console.log(num1.toFixed(1));
console.log(num1.toPrecision(1));
console.log(num1.toExponential(1));
console.log(num1.toString());
console.log(Number.isNaN(num1));
console.log(Number.isNaN(NaN));


// -----------------------Math---------------------
console.log('-----------Math---------------');

console.log(Math.PI);
console.log(Math.E);


console.log(Math.round(4.5));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));
console.log(Math.trunc(4.321));


console.log(Math.sqrt(16));
console.log(Math.pow(2, 3));
console.log(Math.cbrt(8));

console.log(Math.random());
console.log(Math.random()*10);
console.log(5+Math.random()*5);

console.log(Math.sign(-1));
console.log(Math.sign(2));



// -------------------String--------------------

console.log('-------------------String--------------------');

let str1 = 'Hello, World! I want to become a full stack developer'

console.log(str1.length);

console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

console.log(str1.includes('World'));
console.log(str1.startsWith('Hello'));
console.log(str1.endsWith('developer'));
console.log(str1.indexOf('developer'));
console.log(str1.lastIndexOf('el'));

console.log(str1.slice(7,12));
console.log(str1.slice(14,-10));
console.log(str1.substring(12,7)); // якзо ідекс зліва більший за правий то він автоматично міняє місцями


console.log('   hello    '.trim());

console.log('hello'.repeat(5));

console.log('Hello word'.replace('word', 'World'));
console.log('hello hello goodbye hello goodbye'.replaceAll('goodbye', 'World!').replaceAll('hello', 'Hello'));


console.log(str1.split(' '));

console.log('380'.padEnd(12, '63'));

console.log('xxx'.padStart(6, 'o'));

// ------------------Array---------------
console.log('------------------Array---------------');

let arr1 = [1, 2, 3, 4, 5];

console.log(arr1.length);

arr1.push(6)
console.log(arr1);

arr1.unshift(0)
console.log(arr1);

arr1.pop()
console.log(arr1);

arr1.shift()
console.log(arr1);

console.log(arr1.includes(1));
console.log(arr1.indexOf(2));

let arr2 = [1, 2, 2, 1, 3, 6, 12, 1, 23, 52, 32, 291, 20]
arr2.sort( ( a, b ) => a - b )
console.log(arr2);
arr2.reverse()
console.log(arr2);


console.log(arr2.filter(el=>el<20));

let arrMap = arr2.map(e=>e+1)

console.log(arrMap);

let arrReduce = arr2.reduce((akk, val)=>{
    akk=akk+val
    return akk
},0)

console.log(arrReduce);

console.log(arrMap.slice(2, 5));

console.log(arrMap.concat(arr1));

arr1.splice(0,2,0,0,0)
console.log(arr1);

console.log(arrMap.find(x=>x>200));
console.log(arrMap.findIndex(x=>x>200));

console.log([2, 3, 1, [1, 33, [123, 231, [21, 123, [123, 123]]]]].flat(Infinity));

// --------------------------Object-----------------------------

let obj = { name: 'Anton', age: 28}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

console.log(Object.assign(obj));
console.log(Object.assign(obj, {city: 'Osnabruck'}));

console.log(obj.hasOwnProperty('name'))




let obj2 = {mark: 'bmw', model: 'm3'}
Object.freeze(obj2)
obj2.model = '320'
console.log(obj2);



let obj3 = {type: 'cat', hp: 9, damage: 0.7, attackSpeed: 932}
Object.seal(obj3)
obj3.hp = 8
obj3.newState = 'some'
delete obj3.damage;
console.log(obj3);


console.log(Object.fromEntries([['name', 'Anton'],['age', '28']]));








