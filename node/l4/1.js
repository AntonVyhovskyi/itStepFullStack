const fs = require('fs')

function functionForExercise (str) {

    const buffer = Buffer.from(str, 'utf-8')
    fs.writeFile('buffer_output.txt', buffer, (err)=>{
        if(err) {
            console.log(err);
            
        } else {
            console.log(`buffer length is : ${buffer.length}`);
            
        }
    })
}

functionForExercise('hallo')