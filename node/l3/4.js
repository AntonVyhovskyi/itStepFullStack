const EventEmitter = require('events')


class Newsletter extends EventEmitter {
    constructor(){
        super()
        this.subscribers = []
        this.articles = []
    }

    subscribe(user) {
        this.subscribers = [...this.subscribers, user]
    }

    newArticle(title) {
        this.subscribers.forEach((user)=> {
            user.emit('newArt', title)
        })
        
    }
}

class User extends EventEmitter {
constructor(name) {
    super()
    this.name = name
}
}

const myNews = new Newsletter()

const vasya = new User('Vasya')

vasya.on('newArt', (title) => {
    console.log(`${vasya.name} ${title}`);
    
})

const kolya = new User('Kolya')

vasya.on('newArt', (title) => {
    console.log(`${kolya.name} ${title}`);
    
})

myNews.subscribe(vasya)
myNews.subscribe(kolya)
myNews.newArticle('statya')
