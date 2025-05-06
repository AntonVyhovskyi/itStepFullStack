global.logs = [];

function createEvent(event) {
    global.logs.push(event)
}

process.stdin.setEncoding('utf8'); 

process.stdin.on('data', (input) => {
    const command = input.trim();

    if (command ==='log') {
        createEvent('логінація')
        
    }
    
    if (command ==='del') {
        createEvent('видалення')
        
    }

    if (command === 'add') {
        createEvent('додавання')
    }
    
    if (command ==='check') {
        console.log(JSON.stringify(global.logs));
        
        
    }
    

    if (command === 'close') {
        process.exit()
    }
})