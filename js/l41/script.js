

let anton = {
    name: 'Anton',
    age: 28,
    sayHallo: function hallo (summ, what) {
        console.log(`hallo ich bin ${this.name}. i have ${summ} dollars. i need to buy ${what}` );
        
    }
}

anton.sayHallo(33, 'car')

let jony = {
    name: 'Jony',
    age: 30
}

anton.sayHallo.bind(jony)(22, 'bike')
anton.sayHallo.call(jony, 22, 'bike')
anton.sayHallo.apply(jony, [22, 'bike'])
