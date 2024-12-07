// 1. Через клас створити об'єкт People який всі дані отримує ззовні з полями:
//    name, f_name, old, isMarried, hasPossition, children
//    Вивести об'єкт в консоль.
console.log('ex1-----------------------------');


class People {
    constructor(name, f_name, old, isMarried, hasPossition, children) {
        this.name = name
        this.f_name = f_name
        this.old = old
        this.isMarried = isMarried
        this.hasPossition = hasPossition
        this.children = children
    }
}

console.log(new People('Anton', 'Vyhovskyi', 28, true, 'Lagerhelfer', 0));



// 2. Через клас shortWork створити власні методи масивів всередині класу: filter, find, includes, join, slice
console.log('ex2-----------------------------');
class ShortWork {
    constructor(arr) {
        this.arr = arr
    }

    myFilter(cb) {
        let newArr = []
        for (let i = 0; i < this.arr.length; i++) {
            if (cb(this.arr[i], i, this.arr)) {
                newArr.push(this.arr[i])
            }

        }
        return newArr

    }

    myFind(val) {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] === val) {
                return this.arr[i]
            }

        }
        return undefined
    }

    myIncludes(val) {
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] === val) {
                return true
            }

        }

        return false
    }

    myJoin(iter = ',') {
        if (this.arr.length === 0) return ''
        let result = ''
        for (let i = 0; i < this.arr.length; i++) {
            result += this.arr[i]
            if (i < this.arr.length - 1) {
                result += iter
            }

        }
        return result
    }

    mySlice(start = 0, end = this.arr.length) {
        if (start < 0) { start = start + this.arr.length }
        if (end < 0) {  end = end + this.arr.length }

        let newArr = []

        for (let i = start; i < end; i++) {

            newArr.push(this.arr[i])
        }
        return newArr
    }
}



const ex2 = new ShortWork(['a', 21, true, false, '12321', null, 'chooo'])

console.log(ex2.myFilter((el)=> el));
console.log(ex2.myFilter((el)=> !el));
console.log(ex2.myFind(21));
console.log(ex2.myFind(3));
console.log(ex2.myIncludes(false));
console.log(ex2.myIncludes(32));
console.log(ex2.myJoin('---'));
console.log(ex2.myJoin());
console.log(ex2.mySlice(-2));
console.log(ex2.mySlice(1, 4));
console.log(ex2.mySlice());


// 3. Через клас створити об'єкт Car який всі дані отримує ззовні  з полями:
//    name, model, year, isNew, cost, wheels
//    Вивести об'єкт в консоль.
console.log('ex3-----------------------------');

class Car {
    constructor(name, model, year, isNew, cost, wheels) {
        this.name = name
        this.model = model
        this.year = year
        this.isNew = isNew
        this.cost = cost
        this.wheels = wheels
    }
}

console.log( new Car ('Babkovisosalka', '750', 1999, false, 3000, 19000));


// 4. Через клас створити об'єкт Animal який отримує дані ззвоні, створити мінімум 3 поля,
//    та додати через прототайп поведінку для об'єкту (мінімум 2 методи).

console.log('ex4-----------------------------');

class Animal {
    constructor(weight = 1, speed = 1, predator = false) {
        this.weight = weight
        this.speed = speed
        this.predator = predator
    }
    run () {
        console.log('animal is running with speed ' + this.speed + ' km/h');
        
    }
    eat (eat = '') {
        console.log('animal is eating ' + eat);
        
    }
}

let animal = new Animal(23, 30, true)
console.log(animal);
animal.run()
animal.eat('butterbrod')

// 5. Створити клас Dog, через прототип унаслідувати поведінку від класу Animal
//    та додати власну поведінку (мінімум 2 методи).
console.log('ex5-----------------------------');
class Dog extends Animal {
    constructor (weight, speed, predator) {
        super (weight, speed, predator)

    }

    gav() {
        console.log('Gav!!Gav!!');
        
    }

    sleep () {
        console.log('Dog is sleeping');
        
    }
}

let dog = new Dog(20, 30, true) 

dog.gav()
dog.sleep()


// 6. Створити клас Poli Який в консоль буде виводити короткий опис того що таке поліморфізм.
console.log('ex6-----------------------------');
class Poli {
    what() {
        console.log('Поліморфізм це коли класи унаслідують у батьківського класа методи але використовують їх по різному');
        console.log('Приклад. Є клас Пипл у якого є метод спик який виводе в консоль персон іс спіккінг');
        console.log('і є Чайнапипл який унаслідує поведінку і при методі спік виводить в консоль персон іс спіккінг чайніш');
        
    }
}

let poli = new Poli
poli.what()


// 7. Привести приклад поліморфізму.
console.log('ex7    -----------------------------');
class Person {
    constructor (name) {
        this.name = name
    }

    speak () {
        console.log(this.name +' is speeking');
        
    }
}

class ChinePerson extends Person {
    constructor (name) {
        super (name)
    }

    speak () {
        console.log(this.name +' is speeking Chinese');
        
    }
}

let person = new Person('Alex')
let chinePerson = new ChinePerson('Chan')
person.speak()
chinePerson.speak()

// 8. Створити клас Inc Який в консоль буде виводити короткий опис того що таке інкапсуляція.
console.log('ex8    -----------------------------');
class Inc {
    
    what () {
        console.log('Інкапсуляція це один із принципів ООП який полягає в приховуванні данних або методів від зовнішнього використання');
        console.log('Приватний дає доступ тільки одному класу');
        console.log('Паблік це по стандарту доступний для всіх');
        console.log('Протектед для себе і для наслідників');
        
    }
}

let inc = new Inc()
inc.what()


class Calculator {
    constructor(val) {
        this.val = val
        this.date = new Date();  
    }

    set plus (num) {
        this.val += num
        this.date = new Date();
        
    }
    set minus (num) {
        this.val =  this.val - num
        this.date = new Date();
    }
    set mnoj (num) {
        this.val =  this.val * num
        this.date = new Date();
    }
    set dil (num) {
        this.val =  this.val / num
        this.date = new Date();
    }
    set step(num) {
        this.val =  this.val ** num
        this.date = new Date();
    }
    set koriny (num) {
        this.val = Math.round(Math.pow(this.val, 1 / num))
        this.date = new Date();
    }
    get result() {
        return this.val
    }
    get fact () {
       if (this.val < 0) {
        return 0
       }
       let result = 1
       for (let i = 1; i <= this.val; i++) {
        result *= i
        
       }
       return result
    }  
    
}

let testCalc = new Calculator(1)
testCalc.plus = 10
console.log(testCalc.result);
testCalc.minus = 1
console.log(testCalc.result);
testCalc.mnoj = 2
console.log(testCalc.result);
testCalc.dil = 2
console.log(testCalc.result);
testCalc.step = 3
console.log(testCalc.result);
testCalc.koriny = 3
console.log(testCalc.result);
console.log(testCalc.fact);


