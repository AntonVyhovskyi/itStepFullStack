// 1. Через функцію конструктор створити об'єкт Car з полями:
//    name, model, old, price, wheels
//    Вивести об'єкт в консоль.



console.log('-------ex1--------');


function Car(name, model, old, price, wheels) {
    this.name = name
    this.model = model
    this.old = old
    this.price = price
    this.wheels = wheels
}


console.log(new Car('VW', 'B7', 8, 10000, 4));


// 2. Через прототайп створити власні методи масивів: some, every, splice



console.log('-------ex2--------');

console.log('my splice');

Array.prototype.mySplice = function (start, count = 0, ...items) {
    if (start<0) {start= start + this.length}
    start = Math.max(0, start)
    firstPart = this.slice(0,start)
    secondPart = this.slice(start + count, this.length)
    deletedPart = this.slice(start, start + count)
    this.length = 0
    this.push(...firstPart)
    this.push(...items)
    this.push(...secondPart)
    return deletedPart
}


let proba = [2, 3, 5, 1, 2]


console.log(proba.mySplice(1, 2, 10, 10));

console.log(proba);


console.log('my some');

Array.prototype.mySome = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            return true
        }
        
    }
    return false
}



Array.prototype.myEvery = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (!cb(this[i], i, this)) {
            return false
        }
        
    }
    return true
}

console.log(proba.mySome((el)=>el===10));
console.log(proba.mySome((el)=>el===11));
console.log('my every');
console.log(proba.myEvery((el)=>el>0));
console.log(proba.myEvery((el)=>el>1));



// 3. Через функцію конструктор створити об'єкт dog з полями:
//    name, model, year, cost
//    Вивести об'єкт в консоль.

console.log('-----ex3------');

function Dog(name, model, year, cost = 100) {
    this.name = name
    this.model = model
    this.year = year
    this.cost = cost
}

console.log(new Dog('tuzik', 'yorshik', 2023, 300));


// 4. Через функцію конструктор створити об'єкт Parent, створити мінімум 3 поля,
//    та додати через прототайп поведінку для об'єкту (мінімум 2 методи).

console.log('-----ex4------');

function Parent(name, old, eyeColor) {
    this.name = name
    this.old = old
    this.eyeColor = eyeColor
}

Parent.prototype.go = function() {
    console.log(this.name+' is going');
    
}

Parent.prototype.sleep = function () {
    console.log(this.name+' is sleeping');
    
}

const jon = new Parent('Jon', 33, 'blue')

console.log(jon);

jon.go();
jon.sleep();

// 5. Створити об'єкт Son, через прототип унаслідувати поведінку від об'єкту Parent
//    та додати власну поведінку (мінімум 2 методи).


function Son(name, old, eyeColor) {
    this.name = name
    this.old = old
    this.eyeColor = eyeColor
}

Son.prototype = {...Parent.prototype}

Son.prototype.play = function (whichGame = 'PlayStation') {
    console.log(this.name+' is playing ' + whichGame);
    
}

Son.prototype.jump = function () {
    console.log(this.name+' is jumping');
    
}

const son = new Son('Igor', 12, 'brown')

console.log(son);
son.go()
son.sleep()
son.play('football')
son.jump()


// 6. Створити КЛАС People із полями: name, age, isMarried, isChilds, job
//    створити 3 інстанси класу People і вивести їхні поля в консоль.
console.log('-----ex6------');


class People {
    name
    age
    isMarried
    isChilds
    job
    constructor (name, age, isMarried = false, isChilds = 0, job) {

        this.name = name
        this.age = age
        this.isMarried = isMarried
        this.isChilds = isChilds
        this.job = job
    }
}

const serega = new People('Serega', 35, true, 2, false)
const sanya = new People('Sanya', 47, true, 3, 'Developer')
const maria = new People('Maria', 33, false, 1, 'Manager')

console.log(serega);
console.log(sanya);
console.log(maria);

// 7. Створити КЛАС Tiger із полями: name, kind, age, speed, wight, height
//    Додатково створити методи: changeName, addAge, changeSpeed, run
//    Вивести поля класу в консоль та використати методи.
console.log('-----ex7------');

class Tiger {
    constructor (name = 'no name', kind = 0, age = 0, speed = 1, wight = 1, height = 1) {
        this.name = name
        this.kind = kind
        this.age = age
        this.speed = speed
        this.wight = wight
        this.height = height
    }

    changeName (name) {
        this.name = name
    }

    addAge (count) {
        this.age +=count
    }
    changeSpeed (speed) {
        this.speed = speed
    }
    run () {
        console.log('I run and my speed is ' + this.speed + ' km/h');
        
    }
}


const newTiger = new Tiger ( undefined, undefined, undefined, 20, 10, 15)

console.log(newTiger);

newTiger.changeName('Boris')
newTiger.addAge(1)
newTiger.changeSpeed(33)
newTiger.run()

console.log(newTiger);


// 8. Перевірити всі створені об'єкти на те чи вони походять від кожного класу (чи ф-ції конструктора),
//    вивести результат в консоль.

console.log('-----ex8------');


console.log(jon instanceof Parent);
console.log(jon instanceof Car);
console.log(son instanceof Son);
console.log(serega instanceof Son);
console.log(sanya instanceof Son);
console.log(maria instanceof Son);
console.log(maria instanceof People);
console.log(maria instanceof People);
console.log(maria instanceof People);
console.log(newTiger instanceof Tiger);
console.log(newTiger instanceof People);
