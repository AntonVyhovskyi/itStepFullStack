// 2. Промисифікуйте функції.



const clearHouse = (isClear) => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            if (isClear) {

                resolve(100)
            } else {
                rejected('you should cleaning the house')
            }
        }, 1010)
    })
}






const goJeansBuy = (summ) => {
    const cost = 200
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (cost <= summ) {
                let rest = summ - cost

                res({
                    messege: 'Норм джинси, всі телки мої',
                    rest: rest
                })

            } else {

                rej({
                    error: 'не хватає на джинси',
                    summ: summ
                })
            }
        }, 1030)

    })

}

const goToMac = (summ) => {
    const cost = 100
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (cost <= summ) {
                let rest = summ - cost

                res({
                    messege: 'ммм. бургер сама ідеальна їжа в світі',
                    rest: rest
                })
            } else {

                rej({
                    error: 'прийдеться йти додому їсти суп',
                    summ: summ
                })
            }
        }, 1000)
    })


}
// 3. Викликайте ланцюжок виклку асинхронних функцій через Promise

console.log('3. Викликайте ланцюжок виклку асинхронних функцій через Promise');

clearHouse(true).then((res) => {
    console.log(`ура я заробив бабки. ${res} гривень`);
    return goJeansBuy(res)
}).then((res) => {
    console.log(res.messege);
    return goToMac(res.rest)

}).then((res) => {
    console.log(res.messege);

}).catch((rej) => {
    console.log(rej);

}).finally(() => {
    console.log('Може ще якось гроші заробить');

})

// 4.  Викликайте ланцюжок виклку асинхронних функцій через async/await.




async function asyncAwaitPracticice() {
    let money
    let restAfterJeansBuying
    try {
        money = await clearHouse(true)
        console.log(money);
    } catch (error) {
        console.log(error);

    }
    try {
        let dataAfterJeansBuying = await goJeansBuy(money)
        money = dataAfterJeansBuying.rest
        console.log(dataAfterJeansBuying.messege);
    } catch (err) {
       
        console.log(err);

    }

    try {
        const restAfterMac = await goToMac(money)
        console.log(restAfterMac.messege);
    } catch (error) {
        console.log(error);

    }



}

setTimeout(() => {
    console.log('4.  Викликайте ланцюжок виклку асинхронних функцій через async/await.');
    asyncAwaitPracticice()
}, 5000)


// 5. Покажіть приклади використання Promise.all, Promise.allSetlled, Promise.race.


setTimeout(()=>{
    console.log('5. Покажіть приклади використання Promise.all, Promise.allSetlled, Promise.race.');
    
Promise.all([clearHouse(true), goJeansBuy(200), goToMac(100)]).then((data => {
    console.log(data)
}))
Promise.allSettled([clearHouse(true), goJeansBuy(100), goToMac(100)]).then((data)=>{
    console.log(data);
    
    data.forEach((el)=>{
        if (el.status === 'fulfilled')  {
            console.log(el.value);
            
        } else {
            console.log(el.reason);
            
        }
    })
})
Promise.race([clearHouse(true), goJeansBuy(200), goToMac(100)]).then((data)=> {
    console.log(data);
    
})
}, 10000)