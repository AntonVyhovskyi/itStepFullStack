import { createHash } from "crypto";

global.usersDB = []

function registration(login, pass) {
    const findSoLogin = global.usersDB.find((el)=>el.login === login)
    if (findSoLogin) {
        console.log('ERROR! login is used. Choose another');
        return
    }

    const hashPass = createHash('sha256').update(pass).digest('hex')

    global.usersDB.push({login, password: hashPass})

    console.log(`user ( ${JSON.stringify({login, password: hashPass})} ) is added`);
    
}

registration('name', 'aaa')
registration('name', 'aaa')
console.log(JSON.stringify(global.usersDB));



function login(login, pass) {
    const user = global.usersDB.find((el)=>el.login === login)
    if (!user) {
        console.log('ERROR, login is uncorrect');
        return
    }
    const hashPass = createHash('sha256').update(pass).digest('hex')
    if (user.password !== hashPass) {
        console.log('pass uncorrect');
        return
    }

    if (user.password === hashPass) {
        console.log(`hallo ${login}. You are logined`);
        
    }
} 

login('asd', 'asd')
login('name', 'asd')
login('name', 'aaa')
