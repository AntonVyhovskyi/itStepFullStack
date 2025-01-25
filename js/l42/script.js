console.log('  - Перепишіть код по колбекам (лекція де було clearHouse) використовуючи функції генератори');

function* stepFunc (isClear, summFrom) {
    let summ = 0
    if (isClear) {
        summ = summFrom
    }
    yield `i have ${summ} dollars`
    if(summ >= 200) {
        summ -= 200
        yield `i have new jeans and ${summ} dollars`
    } else {
        yield 'i have not enough money'
    }

    if (summ >= 100) {
        summ -= 100
        yield `im not hungry and have ${summ} dollars`
    } else {
        `im hungry`
    }
}

const step = stepFunc(true, 100)

console.log(step.next());
console.log(step.next());
console.log(step.next());



const pattern = /^[1-5A-Fa-f]{1,9}$/;

const inp = document.getElementById('inp')
const val = document.getElementById('val')

inp.onchange = (e) => {
    const value = e.target.value
    if (pattern.test(value)) {
        val.innerHTML= 'true'
        val.classList.add('green')
        val.classList.remove('red')
    } else {
        val.innerHTML= 'false'
        val.classList.add('red')
        val.classList.remove('green')
    }
}