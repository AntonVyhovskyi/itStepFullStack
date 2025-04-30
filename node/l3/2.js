const EventEmitter = require('events')

class ShopingCart extends EventEmitter{
    constructor() {
        super() 
        this.cart = []
        this.summ = 0
    }
    itemAdded(item) {
        this.cart = [...this.cart, item]
        this.summ = this.cart.reduce((akk, el)=>{akk = akk + el.cost 
            return akk
        }, 0)
       
        console.log(`summa: ${this.summ}`);
        
    }
}


const iphone = {
    name: 'iphone', 
    cost: 231
}

const mac = {
    name: 'mac', 
    cost: 500
}


const myCart = new ShopingCart()

myCart.on('addInCart', (item)=>{
    myCart.itemAdded(item)
})

myCart.emit('addInCart', iphone)
myCart.emit('addInCart', mac)