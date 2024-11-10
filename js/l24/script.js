
// Даний масив: [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20 11, [11, [true]]. Застосувати наступні методи:
// reverse, flat, includes, join, map, reduce
console.log('--------------------------------1---------------------------------');

let reverseArray = [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20, [11, [true]]]

reverseArray.reverse()

console.log(reverseArray);


let flatArray = reverseArray.flat(2)


console.log(flatArray);


let includesArray = flatArray.includes(true, 1)

console.log(includesArray);

let joinArray = flatArray.join(' ')

console.log(joinArray);

let mapArray = flatArray.map((el) => {
    if (typeof el === 'number') {
        return 'number'
    }

    if (typeof el === 'boolean') {
        return "boolean"
    }

    return 'hz'
})

console.log(mapArray);


let reduceArray = flatArray.reduce((akk, el) => {
    if (typeof el === 'number') {
        akk++
    }
    return akk
}, 0)

console.log('array hat ' + reduceArray + ' elements with type number');


// Даний рядок: 'Hello world and my dear friend ...' Застосувати наступні методи:
//  split, trim, toLocaleUpperCase, toLocaleLowerCase, charAt, charCodeAt, includes,
//  concat, search, startsWith, endsWith, indexOf, lastIndexOf, replace
console.log('--------------------------------2---------------------------------');


let firstString = 'Hello world and my dear friend ...'


let splitString = firstString.split(' ')

console.log(splitString);



let secondString = ' Hello world and my dear friend ... '

let trimString = secondString.trim();

console.log(trimString);


console.log(trimString.toLocaleUpperCase());
console.log(trimString.toLocaleLowerCase());
console.log(trimString.charAt(2));
console.log(trimString.charCodeAt(2));
console.log(trimString.includes('k'));
console.log(trimString.includes('d'));
console.log(trimString.concat('ische trohu textu'));
console.log(trimString.search('and'));
console.log(trimString.startsWith('and'));
console.log(trimString.startsWith('Hello'));
console.log(trimString.endsWith('Hello'));
console.log(trimString.endsWith('...'));
console.log(trimString.indexOf('friend'));
console.log(trimString.lastIndexOf('nd'));
console.log(trimString.replace('Hello', 'Servus,'));



console.log('--------------------------------3---------------------------------');

// Застосувати інші методи які були використані в лекції (методи стрічок та методи об'єктів)

console.log(trimString.match(/l/g));
console.log(trimString.slice(0,5));
console.log(secondString.trimStart());
console.log(secondString.trimEnd());
console.log(secondString.valueOf());
console.log(secondString.padStart(40, '0'));
console.log(secondString.padEnd(40, '0'));
console.log(secondString.repeat(3));



