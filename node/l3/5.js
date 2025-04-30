const EventEmitter = require('events')

class BankCard extends EventEmitter{
    constructor () {
        super()
        this.pinkod = '3232'
        this.countsOfTry = 0
    }

    pin(pin){
        if(this.countsOfTry>=3) {
            console.log('card is blocked!!!!');
            
        }else if (this.pinkod !== pin) {
            this.countsOfTry += 1
            console.log('pin is not correct');
            
        } else if  (this.pinkod === pin) {
            console.log('succes');
            
        }
    }

}

const myCard = new BankCard()

myCard.on('postPin', (pin)=> {
    myCard.pin(pin)
})

myCard.emit('postPin', '3242')
myCard.emit('postPin', '3242')
myCard.emit('postPin', '3112')
myCard.emit('postPin', '3112')