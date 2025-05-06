const crypto = require('crypto');

global.sessions = []

function login () {


    const token = crypto.randomBytes(24).toString('hex')
    global.sessions.push(token)
    console.log('created session token' + ' ' + token);
    
}

function unlogin(token) {
    global.sessions = global.sessions.filter((el)=>el!==token)

    console.log(`token (${token}) is deleted`);
    
}


login()
login()
 unlogin(global.sessions[0])


console.log(` global sessions: ${JSON.stringify(global.sessions)}`);
