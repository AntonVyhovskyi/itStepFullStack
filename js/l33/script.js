console.log('--------------------3.1.1------------------------');
console.log([1, '', 2, 3, '', 5].filter((el) => Boolean(el)));

console.log('--------------------3.1.2------------------------');
console.log([
    [2, 1, 4, 3, 5],
    [3, 5, 2, 4, 1],
    [4, 3, 1, 5, 2],
].map((el) => el.sort()));
console.log('--------------------3.1.2------------------------');
{
    let arr1 = [1, 2, 3];
    let arr2 = [1, 2, 3, 4, 5];
    let count = 0
    if (arr2.length > arr1.length) {
        count = arr2.length - arr1.length
        for (let i = 1; i <= count; i++) {
            arr2.pop(count)
        }
    }
    else {
        count = arr1.length - arr2.length
        for (let i = 1; i <= count; i++) {
            arr1.pop(count)
        }
    }
    console.log(arr1);
    console.log(arr2);


}


console.log('--------------------3.2.1------------------------');

{
    let resultArray = []
    for (let i = 10; i <= 1000; i++) {
        if (Number(i.toString()[i.toString().length - 1]) % 2 === 0 && i.toString()[i.toString().length - 1] !== '0') {
            resultArray.push(i)
        }

    }
    console.log(resultArray);

}

console.log('--------------------3.2.2------------------------');

{
    let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const newArr = []
    for (let i = 5; i <= arr1.length; i += 5) {
        newArr.push(...arr1.slice(i - 5, i - 1))

    }
    arr1 = newArr
    console.log(arr1);

}
console.log('--------------------3.2.3------------------------');
{
    let num = 6
    let result = ''
    for (let i = 1; i <= num; i++) {
        result += '0'

    }
    console.log(result);

}
console.log('--------------------3.2.4------------------------');
{
    let str = 'aaa bbb ccc eee fff'
    let strArr = str.split(' ')
    let newArr = []
    for (let i = 0; i < strArr.length; i += 2) {
        if (i % 2 === 0) {
            newArr.push(strArr[i])
        }

    }
    console.log(newArr);


}

console.log('--------------------3.2.5------------------------');
{
    let arr1 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]
    let result = 0
    for (let i = 0; i < arr1.length; i++) {
        for (let b = 0; b < arr1[i].length; b++) {
            result += arr1[i][b]

        }


    }
    console.log(result);

}


console.log('--------------------3.3.1-----------------------');

{
    let arr = ['asdsd', 'asdsad', 'asd', 'qwe']
    let newArr = arr.filter((el) => el.length <= 3)
    arr = newArr
    console.log(arr);

}
console.log('--------------------3.3.2-----------------------');
{
    let num = 1357
    let numArr = num.toString().split('')
    let result = true
    for (let i = 0; i < numArr.length; i++) {
        if (Number(numArr[i]) % 2 === 0) {
            result = false
        }


    }
    console.log(result);

}

console.log('--------------------3.3.3-----------------------');

{
    let str = 'abcba'
    let reverseStr = str.split('').reverse('').join('')
    console.log(str === reverseStr);


}

console.log('--------------------3.3.4-----------------------');

{
    const add = (arr) => {
        let result = 0
        const recursAdd = (arr1) => {
            for (let i = 0; i < arr1.length; i++) {
                if (Array.isArray(arr1[i])) {
                    recursAdd(arr1[i])
                } else {
                    result += arr1[i]
                }

            }
        }
        recursAdd(arr)

        return result

    }

    let arr = [
        [
            [11, 12, 13],
            [14, 15, 16],
            [17, 17, 19],
        ],
        [
            [21, 22, 23],
            [24, 25, 26],
            [27, 27, 29],
        ],
        [
            [31, 32, 33],
            [34, 35, 36],
            [37, 37, 39],
        ],
    ]


    console.log(add(arr));

}
console.log('--------------------3.4.1-----------------------');
{
    let arr = []
    for (let i = 10; i < 1001; i++) {
        if (Number(i.toString().split('')[0]) % 2 !== 0) {
            arr.push(i)
        }

    }
    console.log(arr);

}
console.log('--------------------3.4.2-----------------------');
{
    let arr = [1, 2, 3, 4, 5, 6]
    for (let i = 0; i < arr.length; i += 2) {
        let time = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = time

    }
    console.log(arr);

}
console.log('--------------------3.4.3-----------------------');
{
    let obj = {
        1: {
            1: 11,
            2: 12,
            3: 13,
        },
        2: {
            1: 21,
            2: 22,
            3: 23,
        },
        3: {
            1: 24,
            2: 25,
            3: 26,
        },
    }

    const func = (obj) => {
        let result = 0
        for (const key in obj) {
            for (const key1 in obj[key]) {
                result += obj[key][key1]
            }
        }
        return result
    }
    console.log(func(obj));

}
console.log('--------------------3.5.1-----------------------');
{
    let str = 'Learning programming is an essential skill in todays world. It helps solve problems, automate tasks, and create innovative solutions. The world is evolving fast, and programming plays a crucial role in it.'
    let strArr = str.split(/\W+/)
    let result = strArr.filter((el) => el[0] === 'a')
    console.log(result);


}
console.log('--------------------3.5.2-----------------------');
{
    let numbers = [0, 12, 45, 78, 23, 56, 89, 34, 67, 90, 21, 45, 67, 12, 54, 32, 18, 92, 67, 43, 87, 65, 43, 29, 57, 81, 34, 23, 55, 12, 68];
    let newNumbers = numbers.filter((el) => {
        if (el !== 0 && el % 5 === 0) {
            return true
        } else {
            return false
        }
    })
    numbers = newNumbers
    console.log(numbers);

}
console.log('--------------------3.5.3-----------------------');
{
    let numbers = [0, 12, 45, 78, 23, 56, 89, 34, 67, 90, 21, 28910123, 45, 67, 12, 54, 32, 18, 92, 67, 43, 87, 65, 43, 29, 57, 81, 34, 23, 55, 12, 68];
    let newNumbers = []
    for (let i = 0; i < numbers.length; i++) {
        let arrStrNum = numbers[i].toString().split('')
        for (let ind = 0; ind < arrStrNum.length; ind++) {
            if (arrStrNum[ind] === '0') {
                newNumbers.push(numbers[i])
                break
            }

        }
    }
    console.log(newNumbers);

}
console.log('--------------------3.5.4-----------------------');
{
    let numbers = [0, 12, 45, 78, 23, 56, 89, 34, 67, 90, 21, 28910123, 45, 67, 12, 54, 32, 18, 92, 67, 43, 87, 65, 43, 29, 57, 81, 34, 23, 55, 12, 68];
    let result = false
    for (let i = 0; i < numbers.length; i++) {
        let arrStrNum = numbers[i].toString().split('')
        let stop = false
        for (let ind = 0; ind < arrStrNum.length; ind++) {
            if (arrStrNum[ind] === '3') {
                result = true
                stop = true
                break
            }

        }
        if (stop) {
            break
        }
    }
    console.log(result);

}
console.log('--------------------3.5.5-----------------------');
{
    let num = 35142
    let sortNum = Number(num.toString().split('').sort().join(''))
    console.log(sortNum);

}
console.log('--------------------3.5.6-----------------------');
{
    const func = (a, b) => {
        if (a > b) { return false }
        let str = ''
        for (let i = a; i <= b; i++) {
            if (i === b) {
                str += '-'
                str += i
                str += '-'
            } else {
                str += '-'
                str += i
            }

        }
        return str
    }

    console.log(func(1, 10));

}
console.log('--------------------3.5.7-----------------------');
{
    let obj = {
        1: {
            1: {
                1: 111,
                2: 112,
                3: 113,
            },
            2: {
                1: 121,
                2: 122,
                3: 123,
            },
        },
        2: {
            1: {
                1: 211,
                2: 212,
                3: 213,
            },
            2: {
                1: 221,
                2: 222,
                3: 223,
            },
        },
        3: {
            1: {
                1: 311,
                2: 312,
                3: 313,
            },
            2: {
                1: 321,
                2: 322,
                3: 323,
            },
        },
    }

    const func = (obj) => {
        let result = 0
        const func1 = (obj1) => {
            for (const key in obj1) {
                if (typeof obj1[key] === 'object') {
                    func1(obj1[key])
                } else {
                    result += obj1[key]
                }
            }
        }
        func1(obj)
        return result
    }

    console.log(func(obj));

}

console.log('--------------------3.6.1-----------------------');
{
    let arr = [1, 2, 3, 5, 1234, 123, 52, 12356, 123, 2135, 52]
    let newArr = arr.filter((el) => {
        return !(el.toString().length > 3)
    })

    arr = newArr
    console.log(arr);

}
console.log('--------------------3.6.2-----------------------');

{
    let arr = [1, 2, 3, 5, 1234, 123, 52, 12356, 123, 2135, 52]
    let result = !(arr.some(el => el < 0))
    console.log(result);

}

console.log('--------------------3.6.3-----------------------');

{
    let arr = [123, 456, 789]
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        arr[i].toString().split('').forEach((el) => newArr.push(Number(el)))

    }
    console.log(newArr);

}

console.log('--------------------3.6.4-----------------------');

{
    let data = [
        {
            1: 11,
            2: 12,
            3: 13,
        },
        {
            1: 21,
            2: 22,
            3: 23,
        },
        {
            1: 24,
            2: 25,
            3: 26,
        },
    ];
    let result = 0
    data.forEach((el) => {
        for (const key in el) {
            result += el[key]
        }
    })
    console.log(result);

}
console.log('--------------------3.7.1-----------------------');
{
    let str = 'Learning programming is an essential skill in todays world It helps solve problems automate tasks and create innovative solutions The world is evolving fast and programming plays a crucial role in it'
    let arrStr = str.toLowerCase().split(' ').sort()
    let result = arrStr.join(' ')
    console.log(result);

}
console.log('--------------------3.7.2-----------------------');
{
    let num = 213213
    let resultArr = []
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            resultArr.push(i)
        }

    }
    console.log(resultArr);

}

console.log('--------------------3.7.3-----------------------');

{
    let num1 = 2132100
    let num2 = 3124200
    let resultArr = []
    for (let i = 1; i <= num2; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            resultArr.push(i)
        }

    }
    console.log(resultArr);

}
console.log('--------------------3.7.4-----------------------');
{
    {
        let num = 213213
        let resultArr = []
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                resultArr.push(i)
            }

        }
        console.log(resultArr);

    }
}

console.log('--------------------3.7.5-----------------------');

{
    let str = '123, 1234, 12, 52, 521, 15234, 123'
    let arr = str.split(', ')
    let res = 0
    arr.forEach((el) => {
        if (Number(el) > res) {
            res = Number(el)
        }
    })
    console.log(res);

}

console.log('--------------------3.7.6-----------------------');

{
    let arr = [1, 2, 3, 4, 5, 6, 10, 12, 13]
    let newArr = []
    arr.forEach((el) => {
        if (el.toString().length === 1) {
            newArr.push(el)
            newArr.push(el)
        } else {
            newArr.push(el)
        }
    })
    console.log(newArr);

}

console.log('--------------------3.7.7-----------------------');

{
    let str = 'Learning programming is an essential skill in todays world. It helps solve problems, automate tasks, and create innovative solutions. The world is evolving fast, and programming plays a crucial role in it.'
    let arrStr = str.split('')
    let glas = 'aeiouAEIOU'
    let newArrStr = []
    arrStr.forEach((el) => {
        if (!(glas.includes(el))) {
            newArrStr.push(el)
        }
    })
    let res = newArrStr.join('')
    console.log(res);

}
console.log('--------------------3.7.8-----------------------');
{
    let str = 'Learning programming is an essential skill in todays world. It helps solve problems, automate tasks, and create innovative solutions. The world is evolving fast, and programming plays a crucial role in it.'
    let arr = str.split(' ')

    let newArr = arr.map((el) => {
        let newEl = ''
        if ('.,?!'.includes(el[el.length - 1])) {
            for (let i = 0; i < el.length; i++) {
                if (i === el.length - 2) {
                    newEl += el[i].toUpperCase()
                } else {
                    newEl += el[i]
                }


            }
        } else {
            for (let i = 0; i < el.length; i++) {
                if (i === el.length - 1) {
                    newEl += el[i].toUpperCase()
                } else {
                    newEl += el[i]
                }


            }
        }
        return newEl

    })
    console.log(newArr.join(' '));


}
console.log('--------------------3.7.9-----------------------');

{
    let data = [
        {
            1: [1, 2, 3],
            2: [1, 2, 3],
            3: [1, 2, 3],
        },
        {
            1: [1, 2, 3],
            2: [1, 2, 3],
            3: [1, 2, 3],
        },
        {
            1: [1, 2, 3],
            2: [1, 2, 3],
            3: [1, 2, 3],
        },
    ];

    const func = (arr) => {
        let result = 0
        const funcR = (arr1) => {
            for (const key in arr1) {
                if (Array.isArray(arr1[key]) || typeof arr1[key] === 'object') {
                    funcR(arr1[key])
                } else {
                    result += arr1[key]
                }
            }
        }
        funcR(arr)
        return result
    }
    console.log(func(data));

}
console.log('--------------------3.8.1-----------------------');
{
    let arr = [3214, 3, 13, 413, 123, 4123, 1251253]
    let arr1 = [3214, 2, 13, 413, 123, 4123, 1251253]
    const is3 = (arr) => {
        result = true
        arr.forEach(el => {

            let arrEl = el.toString().split('')
            let result2 = arrEl.some(el => el === '3')
            if (result2 === false) {
                result = false
            }
        })
        return result
    }
    console.log(is3(arr));
    console.log(is3(arr1));

}
console.log('--------------------3.8.2-----------------------');
{
    const kebabToSnake = (str) => {
        let newStr = ''
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '-') {
                newStr += '_'
            } else {
                newStr += str[i]
            }

        }
        return newStr
    }

    console.log(kebabToSnake('snake-case'));

}
console.log('--------------------3.8.3-----------------------');

{
    const snakeToCamel = (str) => {
        let newStr = ''
        let akk = 0
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '_') {
                akk = 1
            } else if (akk === 1) {
                akk = 0
                newStr += str[i].toUpperCase()
            } else {
                newStr += str[i]
            }

        }
        return newStr

    }
    console.log(snakeToCamel('das_is_camel_case'));

}
console.log('--------------------3.8.4-----------------------');

{
    const camelToSnake = (str) => {
        let newStr = ''
        for (let i = 0; i < str.length; i++) {
            if (str[i] === str[i].toUpperCase()) {
                newStr += '_'
                newStr += str[i].toLowerCase()
            } else {
                newStr += str[i]
            }

        }
        return newStr
    }
    console.log(camelToSnake('dasIsSnakeCase'));

}

console.log('--------------------3.8.4-----------------------');
{
    const newArr = (num1, num2) => {
        let result = []
        for (let i = 0; i < num1; i++) {
            if (result[i] === undefined) {
                result.push([])
            }
            for (let a = 0; a < num2; a++) {
                result[i].push(a + 1)
            }

        }
        return result
    }
    console.log(newArr(5, 3));
    console.log(newArr(3, 20));

}
console.log('--------------------3.9.1-----------------------');

{
    const tilkuCufru = (str) => {
        result = true
        for (let i = 0; i < str.length; i++) {
            if (!('1234567890'.split('').includes(str[i]))) {
                result = false
            }

        }
        return result
    }
    console.log(tilkuCufru('1232141241'));
    console.log(tilkuCufru('123214a1241'));

}

console.log('--------------------3.9.2-----------------------');

{
    const tilkuCufru = (str) => {
        result = true
        for (let i = 0; i < str.length; i++) {
            if (!('2468'.split('').includes(str[i]))) {
                result = false
            }

        }
        return result
    }
    console.log(tilkuCufru('262648'));
    console.log(tilkuCufru('2143214'));

}
console.log('--------------------3.9.3-----------------------');

{
    const withoutTwoNulls = (arr) => {
        result = []
        arr.forEach((el) => {
            let elArr = el.toString().split('')
            let yesOrNo = elArr.reduce((akk, el) => {
                if (el === '0') {
                    akk += 1

                }
                return akk
            }, 0)
            if (yesOrNo < 2) {
                result.push(el)
            }

        })
        return result
    }

    const arrayWithNummers = [12310, 123, 321, 23000, 123, 23100, 2132130]
    console.log(withoutTwoNulls(arrayWithNummers));

}

console.log('--------------------3.9.4-----------------------');

{
    let arr = []
    for (let i = 1; i < 1001; i++) {
        let arr1 = i.toString().split('')
        let res = 0
        arr1.forEach((el) => {
            res += Number(el)
        })
        if (res === 13) {
            arr.push(i)
        }
    }
    console.log(arr);

}
console.log('--------------------3.9.5-----------------------');
{
    let arr = []
    let akk = 1
    for (let i = 0; i < 3; i++) {
        let arr1 = []
        for (let e = 0; e < 3; e++) {
            arr1.push(akk)
            akk += 1
        }
        arr.push(arr1)

    }
    console.log(arr);

}

console.log('--------------------3.10.1-----------------------');

{
    let array = [42, "apple", true, 3.14, "hello", false, 78, "banana"];
    let newArr = []
    array.forEach((el) => {
        newArr.push(el)
        newArr.push(el)
    })
    console.log(newArr);

}
console.log('--------------------3.10.2-----------------------');

{
    let numbers = [1, 2, 3, 4, 5, 6, 7, 12, 45, 78, 23, 56, 89, 34, 67, 90, 123, 234, 567, 890, 345, 678, 901, 111, 222, 333, 444, 555, 666, 777, 888, 999];
    let result = []
    let number = 23112
    numbers.forEach((el) => {
        if (number % el === 0) {
            result.push(el)
        }
    })
    console.log(result);

}
console.log('--------------------3.10.3-----------------------');

{
    let array1 = [12, 45, 78, 23, 56, 89, 34, 67, 90, 123, 234];
    let array2 = [78, 56, 123, 345, 678, 23, 89, 890, 234, 901];
    let res = []
    array1.forEach((el) => {
        if (array2.includes(el)) {
            res.push(el)
        }
    })
    console.log(res);

}

console.log('--------------------3.10.4-----------------------');
{
    let num = 31233138433
    let res = []
    let arrNum = num.toString().split('')
    arrNum.forEach((el, ind) => {
        if (el === '3' && ind !== 0 && ind !== (arrNum.length - 1)) {
            res.push(ind + 1)
        }
    })
    console.log(res);

}

console.log('--------------------3.10.5-----------------------');

{
    let numbers = [1, 2, 3, 4, 5, 6, 7, 12, 45, 78, 23, 56, 89, 34, 67, 90, 123, 234, 567, 890, 345, 678, 901, 111, 222, 333, 444, 555, 666, 777, 888, 999];
    let result = []
    numbers.forEach((el) => {
        akk = []
        res = true
        arrEl = el.toString().split('')
        arrEl.forEach(el => {
            if (!akk.includes(el)) {
                akk.push(el)
            } else {
                res = false

            }
        })
        if (res) {
            result.push(el)
        }

    })
    console.log(result);

}

console.log('--------------------3.10.5-----------------------');
{

    let arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]
    let res = []
    arr.forEach((el) => {
        res.push(...el)
    })
    console.log(res);

}


console.log('--------------------4.1.1-----------------------');
{
    const func = () => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDay = new Date().getDay()

        return days[currentDay]
    }

    console.log(func());


}
console.log('--------------------4.1.2-----------------------');

{
    const func = (obj) => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDay = obj.getDay()

        return days[currentDay]
    }
    console.log(func(new Date()));

}
console.log('--------------------4.1.3-----------------------');

{
    const func = (seconds) => {
        return (seconds / 86400).toFixed(2)
    }
    console.log(func(200000));

}
console.log('--------------------4.1.4-----------------------');


{
    const func = (num, str) => {
        let strArr = str.split('')
        let res = []
        for (let i = 0; i < num; i++) {
            res.push(strArr[i])

        }
        return res.join('')
    }

    console.log(func(7, 'yakasy stroka'));

}

console.log('--------------------4.1.5-----------------------');

{
    const func = (data) => {
        const start = new Date(data.getFullYear(), 0, 0)
        const diff = data - start
        const oneDay = 1000 * 60 * 60 * 24
        const nowDay = Math.floor(diff / oneDay)
        const zodiacSigns = [
            { sign: 'Козеріг', startDay: 355, endDay: 19 },
            { sign: 'Водолій', startDay: 20, endDay: 49 },
            { sign: 'Риби', startDay: 50, endDay: 79 },
            { sign: 'Овен', startDay: 80, endDay: 109 },
            { sign: 'Телець', startDay: 110, endDay: 140 },
            { sign: 'Близнюки', startDay: 141, endDay: 171 },
            { sign: 'Рак', startDay: 172, endDay: 202 },
            { sign: 'Лев', startDay: 203, endDay: 233 },
            { sign: 'Діва', startDay: 234, endDay: 264 },
            { sign: 'Терези', startDay: 265, endDay: 294 },
            { sign: 'Скорпіон', startDay: 295, endDay: 324 },
            { sign: 'Стрілець', startDay: 325, endDay: 354 }
        ];

        for (let i = 0; i < zodiacSigns.length; i++) {
            const element = zodiacSigns[i];
            if (element.startDay <= nowDay && element.endDay >= nowDay) {
                return element.sign
            }


        }

        return 'Козеріг'


    }

    console.log(func(new Date()));

}
console.log('--------------------4.1.6-----------------------');

{
    const func = (num) => {
        let res = 0
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                res += i
            }

        }
        return res
    }
    console.log(func(10));

}
console.log('--------------------4.2.1-----------------------');

{
    const func = (num) => {
        let res = 0
        let arr = num.toString().split('')
        arr.forEach((el) =>
            res += Number(el))
        return res
    }

    console.log(func(123));

}

console.log('--------------------4.2.2-----------------------');

{
    const func = (num) => {
        let arr = num.toString().split('')
        let res = []
        arr.forEach((el) => {
            if (el !== '0') {
                res.push(el)
            }
        })
        return Number(res.join(''))
    }

    console.log(func(12301230));

}

console.log('--------------------4.2.3-----------------------');
{
    const func = (date) => {
        let nowDate = new Date()
        if (date > nowDate) {
            return 'залищилось чекати ' + Math.floor((date - nowDate) / (1000 * 60 * 60 * 24)) + ' днів'
        } if (date < nowDate) {
            return 'пройшло вже ' + Math.floor((nowDate - date) / (1000 * 60 * 60 * 24)) + ' днів'
        }
    }

    console.log(func(new Date(2026, 0, 1)));

}

console.log('--------------------4.2.4-----------------------');

{
    const func = (year) => {
        if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
            return true
        } else { return false }
    }
    console.log(func(2400));

}

console.log('--------------------4.2.5-----------------------');

{
    const func = () => {
        const nowYear = new Date().getFullYear()
        let arr = []
        for (let i = nowYear - 100; i <= nowYear; i++) {
            if (i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0)) {
                arr.push(i)
            }

        }
        return arr
    }
    console.log(func());

}
console.log('--------------------4.2.6-----------------------');

{
    const func = () => {
        let nowDate = new Date()
        let newMonate = {}
        if (nowDate.getMonth() === 11) {
            newMonate = new Date(nowDate.getFullYear() + 1, 0, 0)

        } else {
            newMonate = new Date(nowDate.getFullYear(), nowDate.getMonth() + 1, 0)

        }

        return 'залишилось ' + Math.floor((newMonate - nowDate) / (1000 * 60 * 60 * 24)) + ' днів до кінця місяця'
    }
    console.log(func());

}
console.log('--------------------4.2.7-----------------------');

{
    func = () => {
        let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд']
        let date = new Date()
        let now = date.getDay()
        let prev = date.getDay() - 1
        let next = date.getDay() + 1
        if (now === 6) {
            next = 0
        } if (now === 0) {
            prev = 6
        }
        return {
            next: arr[next],
            curr: arr[now],
            prev: arr[prev]
        }

    }
    console.log(func());

}

console.log('--------------------4.3.1-----------------------');
{
    const func = (arr) => {
        let newArr = []
        arr.forEach((el) => {
            if (!newArr.includes(el)) {
                newArr.push(el)
            }
        })
        return newArr
    }
    console.log(func([1, 2, 3, 4, 5, 3, 2, 6, 7, 8, 5, 9, 1, 10]));

}

console.log('--------------------4.3.2-----------------------');
{
    const func = (arr) => {
        let newArr = []
        arr.forEach((el) => {
            akk = 0
            newArr.forEach((val) => {
                if (val === el) {
                    akk += 1
                }
            })
            if (akk < 2) {
                newArr.push(el)
            }
        })
        return newArr
    }
    console.log(func([1, 2, 3, 4, 5, 3, 2, 3, 6, 7, 8, 5, 5, 1, 10, 1, 2, 2]));

}
console.log('--------------------4.3.3-----------------------');

{
    const func = (arr) => {
        let newArr = []
        arr.forEach((el, ind) => {
            if (el !== arr[ind - 1]) {
                newArr.push(el)
            }
        })
        return newArr
    }
    console.log(func([1, 2, 3, 3, 3, 4, 5, 3, 2, 3, 6, 7, 8, 5, 5, 1, 10, 1, 2, 2]));
}

console.log('--------------------4.3.4-----------------------');
{
    const func = (arr) => {
        let max = arr[1]
        let min = arr[1]
        arr.forEach(el => {
            if (el > max) {
                max = el
            }
            if (el < min) {
                min = el
            }
        })
        return {
            max: max,
            min: min
        }
    }
    console.log(func([1, 2, 3, 3, 3, 4, 5, 3, 2, 3, 6, 7, 8, 5, 5, 1, 10, 1, 2, 2]));

}

console.log('--------------------4.4.1-----------------------');

{
    const func = (num) => {
        let akk = 0
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                akk += 1
            }
        }
        return akk
    }
    console.log(func(12));

}


console.log('--------------------4.4.4-----------------------');

{
    const func = (num) => {
        let akk = 0
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                akk += 1
            }
        }
        if (akk > 2) {
            return false
        } else {
            return true
        }
    }
    console.log(func(13));
    console.log(func(12));

}
console.log('--------------------4.4.5-----------------------');

{
    const func = (num) => {
        let numArr = num.toString().split('')
        let res = []
        numArr.forEach((el) => {
            if (!(Number(el) % 2 === 0)) {
                res.push(el)
            }
        })
        return Number(res.join(''))

    }
    console.log(func(13221321312821));

}

console.log('--------------------4.4.6-----------------------');

{
    const func = (from, to) => {
        let arr = []
        for (let i = 0; i < 20; i++) {
            arr.push(Math.round(from + (Math.random() * (to - from))))

        }
        return arr
    }
    console.log(func(1, 100));

}


console.log('--------------------4.5.1-----------------------');

{
    const func = (str) => {
        let res = true
        for (let i = 0; i < str.length; i++) {
            if (!(Number(str[i]) >= 0 && Number(str[i]) <= 9)) {
                res = false
            }

        }
        return res
    }
    console.log(func('1232189'));
    console.log(func('12s32189'));

}

console.log('--------------------4.5.2-----------------------');

{
    const func = (str) => {
        const pattern = /^-?\d+\.\d+$/;
        return pattern.test(str)
    }
    console.log(func('213'));
    console.log(func('21.3'));
    console.log(func('-21.3'));
    console.log(func('-2a1.3'));

}

console.log('--------------------4.5.3-----------------------');

{
    const func = (arr) => {
        let newArr = [];
        arr.forEach((el) => {
            if (!(newArr.includes(el))) {
                newArr.push(el)
            }
        })

        return newArr.sort((a, b) => a - b)[newArr.length - 2]

    }
    console.log(func([1, 2, 3, 3, 3, 4, 5, 3, 2, 3, 6, 7, 8, 5, 5, 1, 10, 1, 2, 2]));

}


console.log('--------------------4.5.4-----------------------');

{
    const func = (num1, num2) => {
        let max = Math.max(num1, num2)
        let min = Math.min(num1, num2)

        let arr = []
        for (let i = min; i <= max; i++) {
            arr.push(i)

        }
        return arr
    }

    console.log(func(1, 33));
    console.log(func(33, 4));
    console.log(func(-33, 4));

}
console.log('--------------------4.5.5-----------------------');

{
    const func = (num) => {
        let arr = []
        let alfavit = 'abcdefghijklmnopqrstuwqxvz'
        for (let i = 0; i < num; i++) {
            arr.push(alfavit[Math.floor(Math.random() * alfavit.length)])

        }
        return arr
    }

    console.log(func(10));

}

console.log('--------------------4.5.6-----------------------');


{
    let func = (num) => {
        if (num === 0) {
            return 0
        }
        if (num === 1) {
            return 1
        }
        let arr = [0, 1]
        for (let i = 2; i < num; i++) {
            arr.push(arr[i - 1] + arr[i - 2])

        }
        let res = 0
        arr.forEach((el) => {
            res += el
        })
        return res

    }
    console.log(func(10));

}
console.log('--------------------4.6.1-----------------------');

{
    const func = (year, month, day) => {
        let date = new Date(year, month - 1, day)


        if (month !== (date.getMonth() + 1)) {
            return false
        }
        if (day !== (date.getDate())) {
            return false
        }
        return true
    }
    console.log(func(2024, 3, 3));
    console.log(func(2024, 14, 3));

}
console.log('--------------------4.6.2-----------------------');

{

    const func = (num) => {
        let arr = []
        let alfavit = 'abcdefghijklmnopqrstuwqxvz'
        for (let i = 0; i < num; i++) {
            arr.push(alfavit[Math.floor(Math.random() * alfavit.length)])

        }
        return arr.join('')
    }

    console.log(func(10));


}
console.log('--------------------4.6.3-----------------------');

{
    const func = (str) => {
        strArr = str.split(' ')
        newArr = []
        strArr.forEach((el) => {
            newEl = []
            for (let i = 0; i < el.length; i++) {
                if (i === 0) {
                    newEl.push(el[i].toUpperCase())
                }
                else {
                    newEl.push(el[i])
                }

            }
            newArr.push(newEl.join(''))
        })
        return newArr.join(' ')
    }
    console.log(func('anton norm tip, i voobshe krutiy chel'));

}
console.log('--------------------4.6.4-----------------------');

{
    const func = (arr) => {
        newArr = []
        arr.forEach((el) => {
            arrForEl = []
            for (let i = 1; i <= el; i++) {
                if (el % i === 0) {
                    arrForEl.push(i)
                }
            }
            newArr.push(arrForEl)
        })
        return newArr
    }
    console.log(func([1, 2, 4, 5, 6]));

}

console.log('--------------------4.6.5-----------------------');


{
    const func = (seconds) => {
        let d = 0
        let h = 0
        let m = 0
        let s = 0
        for (let i = 0; i < seconds; i++) {
            s += 1
            if (s === 60) {
                m += 1
                s = 0
            }
            if (m === 60) {
                h += 1
                m = 0
            }
            if (h === 24) {
                d += 1
                h = 0
            }

        }

        return {
            d: d,
            h: h,
            m: m,
            s: s
        }

    }
    console.log(func(142214));

}

console.log('--------------------4.7.1-----------------------');

{
    const func = (str) => {
        let strArr = str.split(' ')
        let newArr = []
        strArr.forEach((el) => {
            let newEl = el.split('').sort().join('')
            newArr.push(newEl)
        })
        return newArr.join(' ')
    }
    console.log(func('asdhk Asda sajdh sakdhaskd hakjsdhaksj hdhg fshdsakjdh sakj hd'));

}

console.log('--------------------4.7.2-----------------------');


{
    const func = (arr1, arr2) => {
        let newArr = []
        arr1.forEach((el) => {
            if (arr2.includes(el) && !(newArr.includes(el))) {
                newArr.push(el)
            }
        })
        return newArr
    }
    const array1 = [1, 2, 3, 4, 5, 6, 6, 7];
    const array2 = [4, 5, 6, 8, 9, 10, 3];
    console.log(func(array1, array2));

}


console.log('--------------------4.7.3-----------------------');

{
    function createRandom() {
        let arr = []
        return function recurs() {
            let newEl = Math.floor(Math.random() * 10)
            if (arr.length === 10) {
                return 'більше нема чисал в данном діапазоні'
            } else
                if (arr.includes(newEl)) {
                    return recurs()
                } else {
                    arr.push(newEl)
                    return newEl
                }
        }
    }

    const creator = createRandom()
    console.log(creator());
    console.log(creator());
    console.log(creator());
    console.log(creator());
    console.log(creator());
    console.log(creator());
    console.log(creator());
    console.log(creator());
    console.log(creator());
    console.log(creator());
    console.log(creator());
    console.log(creator());
    console.log(creator());

}

console.log('--------------------4.7.4-----------------------');

{
    const func = (arr, num) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === num && (i === (arr.length - 1))) {
                return arr[0]
            }
            if (arr[i] === num) {
                return arr[i + 1]
            }

        }
    }

    console.log(func([1, 2, 3, 4, 5], 1));
    console.log(func([1, 2, 3, 4, 5], 2));
    console.log(func([1, 2, 3, 4, 5], 3));
    console.log(func([1, 2, 3, 4, 5], 5));

}

console.log('--------------------4.8.1-----------------------');

{
    const func = (arr) => {
        let randInd = Math.floor(Math.random() * arr.length)
        return arr[randInd]
    }
    console.log(func([1, 2, 3, 4, 5]));
    console.log(func([1, 2, 3, 4, 5]));
    console.log(func([1, 2, 3, 4, 5]));


}
console.log('--------------------4.8.2-----------------------');

{
    const func = (arr, n) => {
        let newArr = []
        for (let i = 0; i < n; i++) {
            let randInd = Math.floor(Math.random() * arr.length)
            newArr.push(arr[randInd])

        }
        return newArr
    }
    console.log(func([1, 2, 3, 4, 5], 7));

}

console.log('--------------------4.8.3-----------------------');


{
    function createRandom(arr) {
        let newArr = []
        return function recurs() {
            let newEl = arr[Math.floor(Math.random() * arr.length)]
            if (newArr.length === arr.length) {
                return 'більше нема чисал в данном діапазоні'
            } else
                if (newArr.includes(newEl)) {
                    return recurs()
                } else {
                    newArr.push(newEl)
                    return newEl
                }
        }
    }

    const creator = createRandom([1, 2, 3, 4, 5])
    console.log(creator());
    console.log(creator());
    console.log(creator());
    console.log(creator());
    console.log(creator());
    console.log(creator());
}

console.log('--------------------4.8.4-----------------------');


{
    const func = (start, end) => {
        let resArr = []
        for (let i = start; i <= end; i++) {
            res = 0
            for (let a = 1; a <= i; a++) {
                if (i % a === 0) {
                    res += 1
                }
            }
            if (!(res > 2)) {
                resArr.push(i)
            }

        }
        return resArr
    }

    console.log(func(1, 20));

}

console.log('--------------------4.8.5-----------------------');

{
    const func = (...items) => {
        let res = 0
        let arr = [...items]
        arr.forEach((el) => {
            res += el
        })
        return res
    }
    console.log(func(1, 2, 4, 6, 1, 3));

}
console.log('--------------------4.8.6-----------------------');

{
    const func = (start, end, n) => {
        let arr = []
        function recurs() {
            if (arr.length === n) {
                return
            }
            let el = Math.floor(start + (Math.random() * ((end + 1) - start)))
            if (el !== arr[arr.length - 1]) {
                arr.push(el)
            }
            recurs()


        }
        recurs()
        return arr
    }

    console.log(func(1, 10, 10));
}




console.log('--------------------4.8.7-----------------------');


{
    const func = (start, end) => {
        let arr = []
        function recurs() {
            if (arr.length === end - start + 1) {
                return
            }
            let el = Math.floor(start + (Math.random() * ((end + 1) - start)))
            if (!(arr.includes(el))) {
                arr.push(el)
            }
            recurs()


        }
        recurs()
        return arr
    }

    console.log(func(1, 10));
}

console.log('--------------------4.9.1-----------------------');

{
    const func = () => {
        const now = new Date()
        let next = null
        if ((now.getFullYear() % 4 === 0 && now.getFullYear() % 100 !== 0) || now.getFullYear() % 400 === 0) {
            if (new Date(now.getFullYear(), 1, 29) < now) {
                next = new Date(now.getFullYear() + 4, 1, 29)
            } else {
                next = new Date(now.getFullYear(), 1, 29)
            }
        } else {
            for (let i = now.getFullYear() + 1; i <= now.getFullYear() + 4; i++) {
                if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
                    next = new Date(i, 1, 29)
                    break
                }

            }
        }
        return (next - now) / (1000 * 60 * 60 * 24)

    }

    console.log(func());

}
console.log('--------------------4.9.2-----------------------');

{


    const func = () => {
        let now = new Date()
        let masl1 = null
        let masl2 = null
        for (let i = 0; i >= -7; i--) {
            let date = new Date(now.getFullYear(), 2, i)
            if (date.getDay() === 0) {
                masl1 = date
                break
            }

        }
        if (masl1 > now) {
            return (masl1 - now) / (1000 * 60 * 60 * 24)
        } else {
            for (let i = 0; i >= -7; i--) {
                let date = new Date(now.getFullYear() + 1, 2, i)
                if (date.getDay() === 0) {
                    masl2 = date
                    break
                }

            }
            return (masl2 - now) / (1000 * 60 * 60 * 24)
        }

    }

    console.log(func());




}
console.log('--------------------4.9.3-----------------------');
{
    const func = () => {
        let first = Math.floor(Math.random() * 255)
        let second = Math.floor(Math.random() * 255)
        let thirt = Math.floor(Math.random() * 255)

        return `rgb(${first}, ${second}, ${thirt})`
    }
    console.log(func());

}
console.log('--------------------4.9.4-----------------------');

{
    const func = (arr) => {
        arrAllDil = []
        arr.forEach((el) => {
            let arrDil = []
            for (let i = 1; i <= el; i++) {
                if (el % i === 0) {
                    arrDil.push(i)
                }

            }
            arrAllDil.push(arrDil)
        })
        let res = []
        arrAllDil[0].forEach((el) => {
            if (arrAllDil.every((val) => {
                return val.includes(el)
            })) {
                res.push(el)
            }
        })
        return res

    }

    console.log(func([28, 20, 24]));

}

console.log('--------------------4.9.5-----------------------');


{
    const func = (arr) => {
        res = 0
        arr.forEach((arr1) => {
            res += Math.max(...arr1)
        })
        return res
    }
    const arrayWithSubarrays = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [10, 11, 12]
    ];

    console.log(func(arrayWithSubarrays));

}
console.log('--------------------4.10.1-----------------------');

{
    const func = (s) => {
        let res = /[A-Za-z]/.test(s)
        if (res) {
            return 'lat'
        } else {
            return 'kir'
        }
    }
    console.log(func('s'));
    console.log(func('м'));

}
console.log('--------------------4.10.2-----------------------');

{
    const func = (arr) => {
        let newArr = [...arr]
        for (let i = 0; i < arr.length*10; i++) {
            let rand = Math.floor(Math.random()*arr.length)
            if (rand === 0 || rand === newArr.length - 1) {
                let time = newArr[0]
                newArr[0] = newArr[newArr.length - 1]
                newArr[newArr.length - 1] = time
            } else {
                let time = newArr[rand]
                newArr[rand]= newArr[rand + 1]
                newArr[rand + 1] = time
            }
        }
        return newArr
    }
    console.log(func([1, 2, 3, 4, 5, 6]));
    
}

console.log('--------------------4.10.3-----------------------');

{
    const func = (str) => {
        let arr = str.split(' ')
        let arrBucva = []
        arr.forEach((el)=> {
            if (!arrBucva.includes(el[0].toLowerCase())) {
                arrBucva.push(el[0].toLowerCase())
            }
        })
        let newObj = {}
        arrBucva.forEach((el)=>{
            arr.forEach((val)=>{
                if (!newObj[el]) {
                    newObj[el] = []
                }
                if (el===val[0].toLowerCase()) {
                    newObj[el].push(val)
                }
            })
        })
        console.log(newObj);
        
    }

    func('assd asd sad xc sad qwe gsad asd zxc asdwq')
    
}
console.log('--------------------4.10.4-----------------------');

{
    const func = (num) => {
        let arrDil = []
        for (let i = 1; i <= num; i++) {
            if (num%i===0) {
                arrDil.push(i)
            }
            
        }
        let res = []
        arrDil.forEach((el)=>{
            let akk = 0
            for (let i = 1; i <= el; i++) {
                if (el%i===0) {
                    akk +=1
                }
                
            }
            if (akk<=2) {
                res.push(el)
            }
        })
        return res
    }
    console.log(func(26));
    
}

console.log('--------------------4.10.5-----------------------');

{
    const func = (slovo) => {
        let golosni = "аеєиїіоуюяАЕЄИЇІОУЮЯ"
        let res = []
        let slog = ''

        for (let i = 0; i < slovo.length; i++) {
            const litera = slovo[i]
            slog += litera

            if(golosni.includes(litera) && (i+1) !== slovo.length -1){
                res.push(slog)
                slog = ''
            }
            
        }
        if (slog) {
            res.push(slog)
        }
        
        
    }

    console.log(func('Україна'));
    console.log(func('акула'));
    console.log(func('Чернігів'));
    
}



