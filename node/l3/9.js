const EventEmitter = require('events')

class Tournament extends EventEmitter {
    constructor() {
        super();

        this.wins = []
    }

    addPlayer (name) {
        this.wins = [...this.wins, {name, wins: 0}]
        console.log(`${name} is added`);
        
    }

    addWin (name) {
        this.wins = this.wins.map((pl)=>{
            if (pl.name === name) {
                this.emit('playerWin', pl.name,  pl.wins + 1)
                return {...pl, wins: pl.wins + 1}
                
            } else {
                return pl
            }
        })
    }
}

const anton = 'Anton'
const vasya = 'Vasya'

const myTournament = new Tournament()

myTournament.on('playerWin', (name, wins)=>{
    console.log(`player ${name} win. he has now ${wins} wins`);
    
})


myTournament.addPlayer(anton)
myTournament.addPlayer(vasya)

myTournament.addWin(anton)
myTournament.addWin(anton)
myTournament.addWin(anton)
myTournament.addWin(anton)

myTournament.addWin(vasya)
myTournament.addWin(vasya)
myTournament.addWin(vasya)