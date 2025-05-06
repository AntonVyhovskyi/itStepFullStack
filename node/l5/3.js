global.userDaten = {login: 'user', password: 'qwerty123'}



function check () {
    if (process.argv[2] !== global.userDaten.login) {
        console.log('login uncorrect');
        
    } else if (process.argv[3] !== global.userDaten.password) {
        console.log('password uncorrect');
    } else {
        console.log('Succes');
        
    }
}

console.log(process.argv[2], process.argv[3]);


check()