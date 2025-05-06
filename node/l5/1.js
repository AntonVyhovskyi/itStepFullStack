
global.callCount = 0

function greetUser(name) {
    global.callCount++

    console.log('hello' + ' ' + name);

    console.log('кількість викликів:' + ' ' +  global.callCount);
    
    
}


greetUser('Anton')
greetUser('Anton')
greetUser('Anton')
greetUser('Anton')
greetUser('Anton')
greetUser('Anton')