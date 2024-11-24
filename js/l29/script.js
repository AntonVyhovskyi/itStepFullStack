//  level 1.1

// n1
function func111(num) {
    if (num > 0) {
        return 'Ne otricatilne'
    } if (num == 0) {
        return 'noly'
    } else {
        return 'otricatelne'
    }
}

console.log(func111(1));
console.log(func111(0));
console.log(func111(-1));

// n2
console.log('-----------------------');

console.log('skilkybukv'.length);


// n3 
console.log('-----------------------');
console.log('stroka'['stroka'.length - 1]);


// n4
console.log('-----------------------');
function func114(num) {
    if (num === 0) {
        return 'noly'
    }
    if (num % 2 === 0) {
        return 'chetne'
    } else {
        return 'nechetne'
    }
}

console.log(func114(8));
console.log(func114(3));
console.log(func114(0));


// n5
console.log('-----------------------');

console.log('stroka'[0] === 'seil'[0]);
console.log('stroka'[0] === 'ceil'[0]);

// n6
console.log('-----------------------');

function func116(word) {
    if (word[word.length - 1] === 'ь') {
        return word[word.length - 2]
    }

    return word[word.length - 1]
}

console.log(func116('Джміль'));
console.log(func116('авто'));



// LEVEL 1.2-----------------------------------------------------------
console.log('-----------------------------------------LEVEL 1.2-----------------------------------------------------------');
// n1
const number121 = 42321
console.log(number121.toString()[0]);

// n2
console.log('-----------------------');
console.log(number121.toString()[number121.toString().length - 1]);


// n3 
console.log('-----------------------');
console.log(number121.toString()[0] + '/' + number121.toString()[number121.toString().length - 1]);

// n4
console.log('-----------------------');
console.log(number121.toString().length);

// n5
console.log('-----------------------');
const number125 = 423121
const number126 = 523121

console.log(number121.toString()[0] === number125.toString()[0]);
console.log(number121.toString()[0] === number126.toString()[0]);



// LEVEL 1.3--------------------------------------------------------------------
console.log('---------------------------------LEVEL 1.3-------------------------------');

// n1

console.log(('asdasdasd'.length > 1) ? 'asdasdasd'['asdasdasd'.length - 1] : 'muss mehr sein');
console.log(('a'.length > 1) ? 'a'['a'.length - 1] : 'muss mehr sein');

// n2
console.log('-----------------------');
console.log((213 % 105) === 0);
console.log((210 % 105) === 0);

// LEVEL 1.4---------------------------------------------------------------------
console.log('---------------------------------LEVEL 1.4-------------------------------');

// n1
let arr141 = []
for (let i = 1; i < 101; i++) {
    arr141.push(i)

}

console.log(arr141);

// n2 
console.log('-----------------------');
let arr142 = []
for (let i = -100; i < 0; i++) {
    arr142.push(i)

}

console.log(arr142);

// n3
console.log('-----------------------');
arr141.reverse()

console.log(arr141);
// n4
console.log('-----------------------');


arr141 = []

for (let i = 1; i < 101; i++) {
    if (i % 2 === 0) {
        arr141.push(i)
    }


}


console.log(arr141);
// n5
console.log('-----------------------');
arr141 = []
for (let i = 1; i < 101; i++) {
    if (i % 3 === 0) {
        arr141.push(i)
    }


}

console.log(arr141);


// LEVEL 1.5 -------------------------------------------------------------------
console.log('-----------------------level 1.5--------------------------------');

// n1

let summ151 = 0

for (let i = 1; i < 101; i++) {
    summ151 += i

}

console.log(summ151);
console.log('-----------------------');
// n2

summ151 = 0

for (let i = 1; i < 101; i++) {
    if (i % 2 === 0) {
        summ151 += i
    }

}

console.log(summ151);


// n3
console.log('-----------------------');
summ151 = 0

for (let i = 1; i < 101; i++) {
    if (i % 2 !== 0) {
        summ151 += i
    }

}

console.log(summ151);

// n4 
console.log('-----------------------');
console.log(222 % 112);

// n5 
console.log('-----------------------');
const stroka155 = 'stroka'

for (let i = 0; i < stroka155.length; i++) {
    console.log(stroka155[i]);
}


// LEVEL 1.6 ------------------------------------------------------------------------
console.log('-----------------------level 1.6------------------------------------');

// n1 
let summ161 = 0

let arr161 = [2, 3, 4, 5, 1, 2, 6, 11]

arr161.forEach((el) => {
    summ161 += el ** 2
})

console.log(summ161);

// n2 
console.log('-----------------------');
summ161 = 0

arr161.forEach((el) => {
    summ161 += Math.sqrt(el)
})

console.log(summ161);


// n3 
console.log('-----------------------');
summ161 = 0
let arr163 = [2, 3, -2, 4, 19, -22]


arr163.forEach((el) => {
    if (el > 0) {
        summ161 += el
    }
})

console.log(summ161);

// n4 
console.log('-----------------------');
summ161 = 0
arr163.forEach((el) => {
    if (el > 0 && el < 10) {
        summ161 += el
    }
})

console.log(summ161);

// LEVEL 1.7 -------------------------------------------------------------------
console.log('-----------------------Level 1.7----------------------------');
// n1 
let str171 = 'abcde'
console.log([...str171]);

// n2 
console.log('-----------------------');
let num172 = 12345;

console.log([...num172.toString()]);

// n3 
console.log('-----------------------');
console.log(Number([...num172.toString()].reverse().join('')));


// n4
console.log('-----------------------');
let ressult174 = 0;


[...num172.toString()].forEach((el) => {
    ressult174 += Number(el)
})

console.log(ressult174);

// LEVEL 1.8 -------------------------------------------------------------------

console.log('-----------------------Level 1.8----------------------------');
// n1 
let arr18 = []

for (let i = 0; i < 10; i++) {
    arr18.push(i + 1)

}

console.log(arr18);

// n2 
console.log('-----------------------');
arr18 = []

for (let i = 1; i < 101; i++) {
    if (i % 2 === 0) {
        arr18.push(i)
    }


}

console.log(arr18);

// n3 
console.log('-----------------------');
arr18 = [1.456, 2.125, 3.32, 4.1, 5.34]

let newArr18 = arr18.map(el => Math.round(el * 10) / 10)
// Чому не туфіксед тому що в завданні вказано округлити в не скоротити

console.log(newArr18);

// LEVEL 1.9 ----------------------------------------------------------------------
console.log('-------------------------Level 1.9--------------------------');

// n1 

let strings191 = [
    "http://example.com",
    "https://secure-site.com",
    "http://another-example.org",
    "plain-text.html",
    "file.html",
    "just-a-string",
    "http://cool-site.net",
    "page.html",
    "http://website.com/home.html"
];

let newStrings191 = strings191.filter((el) => {
    return el.startsWith('http://')
});

strings191 = [...newStrings191];

console.log(strings191);


// n2 

console.log('-----------------------');
strings191 = [
    "http://example.com",
    "https://secure-site.com",
    "http://another-example.org",
    "plain-text.html",
    "file.html",
    "just-a-string",
    "http://cool-site.net",
    "page.html",
    "http://website.com/home.html"
];

let newStrings192 = strings191.filter((el) => {
    return el.endsWith('.html')
});

strings191 = [...newStrings192]

console.log(strings191);

// n3 
console.log('-----------------------');
let arr193 = [2, 3, 4, 5, 1, 2, 6, 11]

arr193 = arr193.map(el => (el * 1.1).toFixed(1))

console.log(arr193);

// LEVEL 1.10 ---------------------------------------------------------


console.log('--------------------level 1.10------------------------');
// n1 
let arr1101 = []

for (let i = 0; i < 10; i++) {

    arr1101.push(Math.ceil(Math.random() * 100))
}

console.log(arr1101);

// n2 
console.log('-----------------------');
let num1102 = 12345

for (let i = 0; i < num1102.toString().length; i++) {
    console.log(num1102.toString()[i]);


}

// n3 
console.log('-----------------------');
let arr1103 = [1, 2, 3, 4, 5, 6]

for (let i = 0; i < arr1103.length; i += 2) {
    console.log([arr1103[i], arr1103[i + 1]]);


}

// n4 
console.log('-----------------------');
let arr1104 = [1, 2, 3];
let arr11041 = [4, 5, 6];

let newArray1101 = arr1104.concat(arr11041)

console.log(newArray1101);


// LEVEL 2.1 -----------------------------------------------------------------------
console.log('-------------------level 2.1--------------------------');
// n1 
let someString211 = 'sadasdsa2310sadas';

let index211 = [...someString211].findIndex(val => val === '0');

console.log(index211);

// n2 
console.log('-----------------------');
let res212 = []

for (let i = 0; i < 1001; i++) {
    if (Number(i.toString()[0]) + Number(i.toString()[1]) === 5) {
        res212.push(i)
    }

}

console.log(res212);

// n3 
console.log('-----------------------');
strings191 = [
    "http://example.com",
    "https://secure-site.com",
    "http://another-example.org",
    "plain-text.html",
    "file.html",
    "just-a-string",
    "http://cool-site.net",
    "page.html",
    "http://website.com/home.html"
];

strings191 = strings191.filter((el) => el !== "http://another-example.org")

console.log(strings191);

// n4 
console.log('-----------------------');
let arr214 = [1, 2, 3, 4, 5, 6];
let res214 = 0;
for (let i = 0; i < arr214.length / 2; i++) {
    res214 += arr214[i]

}

console.log(res214);


// LEVEL 2.2 ----------------------------------------------------------------------
console.log('----------------------Level 2.2------------------------------');

// n1 

console.log([2, 3, -10, 2, -5].reduce((akk, el) => {
    if (el > 0) {
        akk += 1
    }
    return akk
}, 0));

// n2 
console.log('-----------------------');
console.log([2, 3, -10, 2, -5].filter((el) => el > 0));

// n3 
console.log('-----------------------');
function func223(str) {
    let arrStr = [...str]
    arrStr.splice(arrStr.length - 2, 1)
    let newStr = arrStr.join('')
    return newStr
}

console.log(func223('qwertyui'));

// n4
console.log('-----------------------');
function func224(arr) {
    let centr = Math.ceil(arr.length / 2)
    let summ1 = 0
    let summ2 = 0
    for (let i = 0; i < centr; i++) {
        summ1 += arr[i]

    }

    for (let i = centr; i < arr.length; i++) {
        summ2 += arr[i]

    }

    return summ1 / summ2
}

console.log(func224([1, 2, 3, 4, 5, 6]));


// LEVEL 2.3 --------------------------------------------------------------------------
console.log('--------------------------level 2.3--------------------------');

// n1 

function func231(word1, word2) {
    if (word1[word1.length - 1] === word2[0]) {
        return true
    }
    return false
}

console.log(func231('asdsadsre', 'edfsdsfa'));
console.log(func231('asdsadsre', 'dfsdsfa'));

// n2 
console.log('-----------------------');
function func232(str) {
    let result = 0
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') {
            count++
        }
        if (count === 3) [
            result = i + 1
        ]

    }

    return result
}


console.log(func232('00ssss0'));

// n3 
console.log('-----------------------');
let str233 = '12,34,56'

let res233 = str233.split(',').reduce((akk, el) => {
    akk += Number(el)
    return akk
}, 0)

console.log(res233);

// n4 
console.log('-----------------------');
function func234(dataStr) {
    let arr = dataStr.split('-')
    let obj = {}
    arr.forEach((el, ind) => {
        if (ind === 0) {
            obj.year = el
        }

        if (ind === 1) {
            obj.month = el
        }

        if (ind === 2) {
            obj.day = el
        }
    })
    return obj
}


console.log(func234('2025-12-31'));

// LEVEL 2.4 --------------------------------------------------------------------------
console.log('--------------------------level 2.4--------------------------');
// n1 
function func241(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i].charCodeAt(0) >= 48 && str[i].charCodeAt(0) <= 57) {
            return i + 1
        }

    }
}

console.log(func241('js3han1'));

// n2 
console.log('-----------------------');
let obj242 = { year: '2025', month: '12', day: '31' }

let arr242 = Object.keys(obj242)
let arr2421 = Object.values(obj242)

console.log(arr242);
console.log(arr2421);


// n3 
console.log('-----------------------');
function func243(num) {
    let arr = [...num.toString()]
    let res = arr.reduce((akk, el) => {
        if (el % 2 === 0 && el !== 0) {
            akk++
        }
        return akk
    }, 0)
    return res
}

console.log(func243(444449990));

// n4 
console.log('-----------------------');
function func244(str) {
    let arr = [...str]
    let newArr = arr.map((el, ind) => {
        if (ind % 2 === 0) {
            return el.toUpperCase()
        }
        return el
    })
    let result = newArr.join('')
    return result
}

console.log(func244('aksjdlkajsdl'));

// n5 
console.log('-----------------------');
function func245(str) {
    let arr = str.split(' ')
    let newArr = []
    arr.forEach((el) => {
        let newEl = el.split('')
        newEl[0] = newEl[0].toUpperCase()
        newArr.push(newEl.join(''))
    })
    return newArr.join(' ')
}

console.log(func245('aaa bbb ccc'));

// LEVEL 2.5 --------------------------------------------------------------------------
console.log('--------------------------level 2.5--------------------------');
// n1 
function func251(str) {
    let res = [];

    [...str].forEach((el, ind) => {
        if (el == '0') {
            res.push(ind + 1)
        }


    })

    return res
}

console.log(func251('023m0df0dfg0'));

// n2 
console.log('-----------------------');
function func252(str) {
    let res = [];
    [...str].forEach((el, ind) => {
        if ((ind + 1) % 3 === 0) {
            return
        }
        res.push(el)
    })
    return res.join('')
}

console.log(func252('abcdefg'));


// n3 
console.log('-----------------------');
function func253(arr) {
    let summ1 = 0
    let summ2 = 0
    arr.forEach((el, ind) => {
        if ((ind + 1) % 2 === 0) {
            summ1 += el

        } else {
            summ2 += el
        }


    })

    return summ1 / summ2
}

console.log(func253([1, 2, 3, 4, 5, 6]));

// LEVEL 2.6 --------------------------------------------------------------------------
console.log('--------------------------level 2.6--------------------------');
// n1 
function func261(str) {
    let arr = [];
    [...str].forEach((el, ind) => {
        if (el.charCodeAt(0) >= 48 && el.charCodeAt(0) <= 57) {
            arr.push(ind + 1)
        }
    })
    return arr
}

console.log(func261('222aaa2asdxcv'));
// n2 

console.log('-----------------------');
function func262(arr) {
    let res = arr.map((el) => {
        return Number([...el.toString()].reverse().join(''))
    })

    return res
}

console.log(func262([123, 456, 789]));

// n3 
console.log('-----------------------');
function func263(str) {
    let count = 0
    let res = ''
    for (let i = str.length - 1; i >= 0; i--) {
        res = str[i] + res
        count++
        if (count === 3) {
            count = 0
            res = ' ' + res
        }


    }

    return res

}

console.log(func263('1234567'));

// n4 
console.log('-----------------------');
function func263(str) {
    let strArr = [...str]
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            strArr[i] = strArr[i].toLowerCase()
        }
        if (str[i] === str[i].toLowerCase()) {
            strArr[i] = strArr[i].toUpperCase()
        }

    }

    return strArr.join('')

}

console.log(func263('AbCdE'));


// n5 
console.log('-----------------------');
function func265(arr) {

    let newArr = [];
    for (let i = 0; i < arr.length; i = i + 2) {
        if (i+1 < arr.length ) {
            newArr.push(Number(arr[i].toString() + arr[i + 1].toString()))
        } else {
            newArr.push(arr[i])
        }
        

    }

    return newArr
}

console.log(func265([1, 2, 3, 4, 5, 6]));

// n6 
console.log('-----------------------');
function func266(str) {
    let strArr = str.split(' ')
    
    let newArr = strArr.map((el, ind) => {
        if (((ind+1)%2) === 0) {
            let elArr = [...el];
            elArr[0] = elArr[0].toUpperCase();
            return elArr.join('')
        } else {
            return el
        }

    })

    return newArr.join(' ')
}

console.log(func266('aaa bbb ccc eee fff'));


// LEVEL 2.7 --------------------------------------------------------------------------
console.log('--------------------------level 2.7--------------------------');
// n1

function func271(str) {
    let strArr = str.split(' ')
    let newArr = []
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length<=3) {
            newArr.push(strArr[i].toUpperCase())
        } else {
            newArr.push(strArr[i])
        }
        
    }

    return newArr
}

console.log(func271('a bc def ghij'));

// n2 
console.log('-----------------------');
function func272(symbol) {
    if (symbol === symbol.toUpperCase()) {
        return 'upper case'
    } else {
        return 'lower case'
    }
}

console.log(func272('A'));
console.log(func272('a'));


// n3 
console.log('-----------------------');
function func273(num) {
    let numArr = [...num.toString()]

    let newArr = numArr.filter((el)=> {
        return Number(el)%2 === 0 && el !== 0
    })

    return Number(newArr.join(''))

    
}

console.log(func273(123789));


// LEVEL 2.8 --------------------------------------------------------------------------
console.log('--------------------------level 2.8--------------------------');

// n1 

function func281(str) {
    let strArr = [...str]
    let count = 0 
    strArr.forEach((el)=>{
        if(el === el.toUpperCase()) {
            count++
        }
    })
    if (count > 2) {
        return 'error'
    }
    return 'alles gut'
}

console.log(func281('aaALAa'));
console.log(func281('aaAAa'));


// n2 
console.log('-----------------------');

function func282(str) {
    let strArr = str.split(' ')
    let newArr = []
    strArr.forEach((el)=> {
        if (el.length>3) {
            return
        }
        newArr.push(el)
    })

    return newArr.join(' ')
}

console.log(func282('1 22 333 4444 22 5555 1'));

// n3 
console.log('-----------------------');
function func283(arr1, arr2) {
    let newArr = [...arr1]
    newArr.splice(2, 0, ...arr2)
    return newArr
}

console.log(func283([1, 2, 3], ['a', 'b', 'c']));


// LEVEL 2.9 --------------------------------------------------------------------------
console.log('--------------------------level 2.9--------------------------');
// n1 
function func291(num) {
    let numArr = [...num.toString()]
    let newArr = []
    for (let i = 0; i < numArr.length; i= i+2) {
        newArr.push(numArr[i]+numArr[i+1])
        
    }

    return newArr.reduce((akk, val) => {
        akk = akk + Number(val)
        return akk
    }, 0)
}

console.log(func291(123456));


// n2 
console.log('-----------------------');

[1, 2, 3, 4, 5].reverse().forEach((el)=>console.log(el))


// LEVEL 2.10 --------------------------------------------------------------------------
console.log('--------------------------level 2.10--------------------------');

// n1 
function func210(str) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i].charCodeAt(0)<48 || str[i].charCodeAt(0)>57) {
            count++
        }
        if (count > 3) {
            return 'Bilshe'
            
        }


        
    }

    return 'norm'


}

console.log(func210('222asss'));


// n2 
console.log('-----------------------');
function func2101(num) {
    let numStr = num.toString()

    for (let i = numStr.length -1 ; i >= 0; i--) {
        if (Number(numStr[i])%2===0 && Number(numStr[i]) !== 0) {
            return Number(numStr[i])
        }
        
    }
}

console.log(func2101(21321345989));

// n3 
console.log('-----------------------');
function func21103 (str) {
    let strArr = str.split(' ')
    let newArr = strArr.map((el)=> {
        let newEl = [...el]
        newEl[0] = '!'
        return newEl.join('')
    })

    return newArr.join(' ')
}

console.log(func21103('abcde abcde abcde'));


function func2104(arr) {
    let res = false
    arr.forEach((el, ind) => {
        if (arr.length > ind+1) {
            if (el === arr[ind+1]) {
                res = true
            }
        } 
        
    })
    return res

}

console.log(func2104([1, 2, 3, 3, 4, 5]));
