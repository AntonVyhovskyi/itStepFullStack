const EventEmitter = require('events')


class ChatRoom extends EventEmitter {
    constructor() {
        super();
        this.massages = []
    }

    newMessage(user, text) {
        this.massages = [...this.massages, { user, text }]
        console.log(`${user} send message with text: ${text}`);
        
    }
}

class User extends EventEmitter {
    constructor(name) {
        super();
        this.name = name
    }

    sendMessage(text, chat) {
        chat.newMessage(this.name, text)
    }
}

const myChat = new ChatRoom()

const anton = new User('Anton')


anton.on('newMessageInMyChat', (text)=>{
    anton.sendMessage(text, myChat)
})

anton.emit('newMessageInMyChat', 'hallo everybody')