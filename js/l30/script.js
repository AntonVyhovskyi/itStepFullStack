// Exercise 1

console.log('--------------ex1------------------');

function People(name, f_name, old, isMaried, hasPosition, children) {
    this.name = name
    this.f_name = f_name
    this.old = old
    this.isMaried = isMaried
    this.hasPosition = hasPosition
    this.children = children
} 


let myFirstObjectFromConstructor = new People('Anton', 'Vyhovskyi', 28, 'True', 'Senior Full-Stack Developer', 0)


console.log(myFirstObjectFromConstructor);


// Exercise 2

console.log('--------------ex2------------------');


console.log('___myFilter___');


Array.prototype.myFilter = function(cb) {
    let result = []
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            result.push(this[i])
        }
        
    }
    return result
}


const probArray = [2, 4, 6, 1, 2, 8, 3]

const newProbArray = probArray.myFilter((el)=>{
    return el>3
})

console.log(newProbArray);


console.log('___myFind___');


Array.prototype.myFind = function(cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            return this[i]
        }
        
    }
    return undefined
}

let testFind1 = probArray.myFind((el)=>el>2)
let testFind2 = probArray.myFind((el)=>el===22)


console.log(testFind1);
console.log(testFind2);


console.log('___myincludes___');

Array.prototype.myIncludes = function(val) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === val) {
            return true
        }
        
    }

    return false
}


console.log(probArray.myIncludes(2));
console.log(probArray.myIncludes(22));


console.log('___myJoin___')

Array.prototype.myJoin = function(sep = ',') {
    let result = ''
    for (let i = 0; i < this.length; i++) {
        result = result + this[i]
        if (i < this.length - 1) {
            result = result + sep
        }
        
    }
    return result
}

console.log(probArray.myJoin());
console.log(probArray.myJoin('--'));


console.log('___mySlice___')

Array.prototype.mySlice = function (start = 0, end = this.length) {
    if (start < 0) { start = this.length + start }
    if (end < 0) { end = this.length + end }

    start = Math.max(start, 0)
    end = Math.min(this.length, end)

    console.log(start, end);
    
    let result = [];
    for (let i = start; i < end; i++) {
       result.push(this[i])
        
    }

    return result
}

console.log(probArray.mySlice(2, 5));


// Exercise 3


function Car(name, model, year, isNew, cost, wheels = 4) {
    this.name = name
    this.model = model
    this.year = year
    this.isNew = isNew
    this.cost = cost
    this.wheels = wheels
}


const myPegout = new Car('Pegout', '207', '2007', false, 2000)

console.log(myPegout);



// Exercise 4


function Animal (name, hp = 1, damage = 1, speed = 1) {
    this.name = name
    this.hp = hp
    this.damage = damage
    this.speed = speed
}


Animal.prototype.bite = function() {
    console.log('I am biting now');
    
    return this.damage
}


Animal.prototype.run = function() {
    console.log('I am running');
    
    return this.speed
}


// Exercise 5


function Dog (name, hp = 1, maxHp = 1, damage = 1, speed = 1) {
    this.name = name
    this.maxHp = maxHp
    this.hp = hp
    this.damage = damage
    this.speed = speed
}

Dog.prototype = {...Animal.prototype}


Dog.prototype.hill = function() {
    this.hp = this.maxHp
    console.log('I hill me');
    
}

Dog.prototype.gav = function () {
    console.log('GAV!');
    
}


const dog = new Dog('Chupy', 100, 100, 20, 80)

console.log(dog);
dog.gav()
dog.hill()
dog.run()
dog.bite()

