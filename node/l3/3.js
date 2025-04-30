const EventEmitter = require('events')

class FileDownloader extends EventEmitter {
    constructor(){
        super()
        this.progress = 0
    }

    start(){
        const interval = setInterval(()=>{
            this.progress += 10
            this.emit(`progress`, this.progress)
            if(this.progress >=100) {
                clearInterval(interval)
                this.emit('complated')
                
            }
        },500)
    }
}

const myDownloader = new FileDownloader()

myDownloader.on('progress', (prog) => {
    console.log(`${prog}%`);
    
})
myDownloader.on('complated', () => {
    console.log(`complated`);
    
})

myDownloader.start()