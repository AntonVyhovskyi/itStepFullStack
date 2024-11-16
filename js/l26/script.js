// Перше завдання рекурсивна функція
console.log('hello I,m recurse function');

let arr1 = [1, 2, 3, 3, 2, 1, 4, 5, 6]
let arr2 = ['hello', true, 23, 'recurse function', false, null, 'the best']

const recurseFunction = (arr, i = 0) => {
    if (arr.length > i) {
        console.log(arr[i]);
        recurseFunction(arr, ++i)
        
    }
}

recurseFunction(arr1)
console.log('-----------example 2---------');
recurseFunction(arr2)

// Друге завдання рекурсивна функція с логікой навпаки
console.log('------------recurse function with reverse logic--------------');

const recurseReverseFunction = (arr, i = 0) => {
    if (arr.length <= i) return

    console.log(arr[i]);
    recurseReverseFunction(arr, ++i)
    
}

recurseReverseFunction(arr1)
console.log('-------------example 2--------');

recurseReverseFunction(arr2)


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


const usObjWithClosFunc = closureFunction()

console.log(usObjWithClosFunc.dec());
console.log(usObjWithClosFunc.inc());
console.log(usObjWithClosFunc.dec());
console.log(usObjWithClosFunc.dec());
console.log(usObjWithClosFunc.getNum());

// Четверте, колбеки, прибираємо дома за 500 гривень

console.log('----------------Callbacks, clear house');

const clearHouse = (isClear, cb) => {
    if (isClear) {
        cb(500)
    } else {
        cb(0, 'Du muss zu erst aufraumen, Schurke')
    }


}

const goJeansBuy = (summ, cb) => {
     const cost = 200
     if (cost <= summ) {
        let rest = summ - cost
        console.log('Ich habe neu hose. Sie sieht gut aus');
        cb(rest)
        
     } else {
        console.log('leider ich habe zu wenig geld');
        cb(summ)
     }
}

const goToMac = (summ, cb) => {
    const cost = 100

    if (cost <= summ) {
        let rest = summ - cost
        console.log('mmmm, schmek gut');
        cb(rest)
    } else {
        console.log('Sheizer! Was werde ich essen heute?');
        cb(summ)
    }
}


clearHouse(true, (summ, str) => {
    if (summ) {
        console.log('urra Ich habe geld');
        goJeansBuy(summ, (rest) => {
            if (rest) {
                console.log('ich habe noch geld');
                goToMac(rest, (summ)=>{
                    if (summ) {
                        console.log('ich habe noch geld. Was werde ich weiter machen?');
                        
                    } else {
                        console.log('das was?!?');
                        
                    }
                })
            } else {
                console.log('leider ich habe keine noch geld ');
                
            }
        })
    } else {
        console.log(str);
        
    }
})


