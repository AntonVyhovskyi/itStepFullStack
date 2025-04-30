const EventEmitter = require('events')

class AlarmClock extends EventEmitter{
    start() {
        setTimeout(()=>{
            this.emit('ring')
        },5000)
    }
}

const myAlarm = new AlarmClock()


myAlarm.on('ring', ()=>{
    console.log('Wake up!!!');
    
})

myAlarm.start()


