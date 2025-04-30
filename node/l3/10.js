const EventEmitter = require('events') 

class PomodoroTimer  extends EventEmitter{

    breakTime (timeWork, timeBrake) {
        console.log('break');
        setTimeout(()=>{
            
            this.work(timeWork, timeBrake)
        },timeBrake)
    }
    work (timeWork, timeBrake) {
        console.log('working');
        setTimeout(()=>{
            
            this.breakTime(timeWork, timeBrake)
        },timeWork)
        
    }
}


const myPomodoroTimer = new PomodoroTimer()

myPomodoroTimer.work(2000, 1000)