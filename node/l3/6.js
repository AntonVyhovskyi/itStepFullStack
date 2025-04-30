const EventEmitter = require('events')

class RegistrationSystem extends EventEmitter {
    constructor() {
        super();
        this.user = '';
        this.email = '';
    }

    userRegistering (name, email) {
        this.user = name;
        this.email = email;
        this.emit('userRegistratingComplated')
    }

    sendEmailAboutComplatedRegistration () {
        console.log('registration complated');
        console.log('user name is' + ' ' + this.user);
        console.log('send message in email: ' + ' ' + this.email);
        
        
    }
}

const myRegistration = new RegistrationSystem()

myRegistration.on('userRegistratingComplated', ()=>{
    myRegistration.sendEmailAboutComplatedRegistration()
})

myRegistration.on('userRegistrating', (name, email) => {
    myRegistration.userRegistering(name,email)
    
})

myRegistration.emit('userRegistrating', 'Anton', 'anton@gmail.com')
