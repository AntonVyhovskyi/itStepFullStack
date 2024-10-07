// exercise one
console.log('--------------------exercise one--------------');

let exOneOne = 'stroka'
exOneOne = Boolean(exOneOne)
console.log(typeof exOneOne);


let exOneTwo = 1
exOneTwo = Boolean(exOneTwo)
console.log(typeof exOneTwo);

let exOneThree = '2'
exOneThree = Number(exOneThree)
console.log(typeof exOneThree);

let exOneFour = null
exOneFour = Boolean(exOneFour)
console.log(typeof exOneFour);

let exOneFive = undefined
exOneFive = Boolean(exOneFive)
console.log(typeof exOneFive);


console.log('--------------------exercise two-------------------');
if (confirm('ok or cancel')) {
    console.log('You confirmed popup')

} else { console.log('Confirm Error') }


console.log('--------------------exercise three-------------------');
confirm('ok or cancel') ? console.log('You confirmed popup') : console.log('Confirm Error')

console.log('--------------------exercise four-------------------');

let exFour = prompt('How old are you?')
exFour = Number(exFour)

if (exFour >= 1 && exFour <= 12) {
    console.log('you are child');

} else if (exFour > 12 && exFour < 18) {
    console.log('you are teenager');

} else if (exFour > 18 && exFour < 60) {
    console.log('you are adult person');
} else if (exFour > 60) {
    console.log('you are so old');
} else {
    console.log('you must indicate the number');
}

console.log('--------------------exercise five-------------------');
let exFive = prompt('Your name? (Admin, Student, Teacher or Young)')


switch (exFive) {
    case 'Admin':
        console.log('I have full access');

        break;
    case 'Student':
        console.log('Im student');

        break;
    case 'Teacher':
        console.log('Im teacher');

        break;
    case 'Young':
        console.log('I young and ready to party');

        break;


    default:
        console.log('You entered own name');

        break;
}

console.log('--------------------exercise six-------------------');


let a = 1
let b = 2

console.log(a<b);
console.log(a>b)

a=3
b=3

console.log(a>=b);

console.log(a<=b);

a=4
b='4'

console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);

a=2
b=3

console.log(a == b || a < b);

console.log(a === 2 && b > 2);










