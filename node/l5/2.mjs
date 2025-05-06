import { createHash } from "crypto"; 


global.usersDB=[]

const createUser = (userName, password) => {
    const findUser = global.usersDB.find((el)=>userName === el.name)
    if(findUser) {
        console.log(`Імя ${userName} вже занято`);
        return
        
    }

    const hashPassword = createHash('sha256').update(password).digest('hex')

    global.usersDB.push({name: userName, password: hashPassword})

    console.log(`юзерa ${userName} додано до бд`);
    
}

createUser('anton', 'asd123')
createUser('anton', 'asd1a23')
createUser('leha', 'asd1ss23')

console.log(JSON.stringify(global.usersDB));
