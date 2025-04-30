const EventEmitter = require('events')

class NetworkMonitor extends EventEmitter {
    constructor() {
        super(),
            this.internetSpeed = 100
    }

    download() {
        setInterval(() => {
            this.internetSpeed = Math.round(Math.random() * 40)
            console.log(`internet speed is ${this.internetSpeed} mb/s`);
            if (this.internetSpeed < 10) {
                this.emit('slowConnection')
            }
        }, 1000)


    }
}

const myNetworkMonitor = new NetworkMonitor();

myNetworkMonitor.on('slowConnection', () => {
    console.log('!!!!! Slow Connection !!!!!!!!!!');

})

myNetworkMonitor.download()