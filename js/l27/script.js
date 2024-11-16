console.log('---------------------first exercise');




const clearHouse = (isClear, cb) => {

    setTimeout(()=>{
        if (isClear) {
            cb(null, 500)
        } else {
            cb('ти мусиш поприбирати для початку, поганець', 0)
        }
    }, 1000)
    


}

const goJeansBuy = (summ, cb) => {
     const cost = 200

     setTimeout(()=>{
        if (cost <= summ) {
            let rest = summ - cost
            console.log('Норм джинси, всі телки мої');
            cb(null, rest)
            
         } else {
           
            cb('не хватає на джинси', summ)
         }
     }, 1000)
    
}

const goToMac = (summ, cb) => {
    const cost = 100

    setTimeout(()=>{
        if (cost <= summ) {
            let rest = summ - cost
            console.log('ммм. бургер сама ідеальна їжа в світі');
            cb(null, rest)
        } else {
            
            cb('прийдеться йти додому їсти суп', summ)
        }
    }, 1000)
    
}


// в моему коді якщо не хвате на джинси то я все одно піду і попробую поїсти в макі))) так як мак дешевше


clearHouse(true, (err, summ) => {
    if (summ) {
        console.log('бабки! бабки! гуляємо');
        goJeansBuy(summ, (error, rest) => {
            if(error) {
                console.log(error);
            }
            if (rest) {
                console.log('Є ще пару гривень');
                goToMac(rest, (error, summ)=>{
                    if(error) {
                        console.log(error);
                        
                    }
                    if (summ) {
                        console.log('є ще! що ми будем робити з цим баблом?');
                        
                    } else {
                        console.log('це все?!? треба ще бабла намутить');
                        
                    }
                })
            } else {
                console.log('все закончились бабки ');
                
            }
        })
    } else {
        console.log(err);
        
    }
})


// ----------------------------Друге завдання

setTimeout(()=>{
console.log('----------------------second exercise');

}, 4000)

const writeProgram = (isReady, cb) => {
    setTimeout(()=>{
        if (isReady) {
            cb(null, 100)
        } else {
            cb('I need finish the job', 0)
        }
    }, 5000)
}

const buyKeyboard = (summ, cb) => {
    const cost = 300
    setTimeout(()=>{
        if (summ >= cost) {
            console.log('The new keyboard is so brilliant');
            const rest = summ - cost
            cb(null, rest)
        } else {
            cb('not enough money for keyboard', summ)
        }
    }, 1000)
    
    
}

const visitCinema = (summ, cb) => {
    const cost = 100
    setTimeout(()=>{
        if (summ >= cost) {
            const rest = summ - cost
            console.log('This movie was funny');
            cb(null, rest)
            
        } else {
            cb('not enough money for cinema', summ)
        }
    },1000)
    
    
}


writeProgram(true, (error, summ)=>{
    if (error) {
        console.log(error);
        
    }
    if (summ) {
        console.log('I got more money');
        buyKeyboard(summ, (error, rest) => {
            if (error) {
                console.log(error);
                
            }
            if (rest) {
               console.log('i still have money');
               visitCinema(summ, (error, rest) => {
                if (error) {
                    console.log(error);
                    
                }
                if (rest) {
                    console.log('i still have money');
                    
                } else {
                    console.log('no money no problem =(');
                    
                }
               }) 
               
            } else {
                console.log('no money no problem =(');
            }
        })
    }
})