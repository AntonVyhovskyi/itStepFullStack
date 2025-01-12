// 1. Створіть функцію, яка виводить текст "Hello, World!" в консоль з затримкою у 3 секунди за допомогою setTimeout.
//   Опишіть в console.info, як функція виконується асинхронно.


function firstExercise () {
    console.info('Починаеться виконуваться функція запускаеться консоль інфо попадають в колстек і виконуються ')
    setTimeout(() => {
        console.log('І вот як кол стек освободився і очередь в кюи дойшла до цього колбека він попав в колстек, зверху наклався консоль лог в колстеці, і виконався');
        
    }, 3000);
    console.info('а сет тайсмаут попадає в веб апіай де чекає три сикунди зоб потім закинути колбек внутрі нього в очередь (кьюи)')
}

firstExercise()


// 2. Створіть промисіфіковані функції, і функцію яка виконує кілька запитів до різних промисифікованих функцій за допомогою
//    - Promise.all
//    - Promise.allSettled
//    - Promice.race
//    - Promice.any

function ex21(params) {
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            if(params) {
                res(1)
            } else {
                rej(false)
            }
        }, 500)
        
    })
    
}
function ex22(params) {
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            if(params) {
                res(2)
            } else {
                rej(false)
            }
        }, 600)
        
    })
}
function ex23(params) {
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            if(params) {
                res(3)
            } else {
                rej(false)
            }
        }, 700)
        
    })
}

setTimeout(()=>{
    Promise.all([ex21(true), ex22(2), ex23('sadsad')]).then((data)=>{
        console.log(data);
        
    }).catch((error)=> {
        console.log(error);
        
    })
    Promise.allSettled([ex21(true), ex22(0), ex23('sadsad')]).then((data)=>{
        console.log(data);
        
    }).catch((error)=> {
        console.log(error);
        
    })
    Promise.race([ex21(false), ex22(2), ex23('sadsad')]).then((data)=>{
        console.log(data);
        
    }).catch((error)=> {
        console.log(error);
        
    })
    Promise.any([ex21(true), ex22(2), ex23('sadsad')]).then((data)=>{
        console.log(data);
        
    }).catch((error)=> {
        console.log(error);
        
    })


}, 4000)



// 3. Використовуючи асинхронний код, напишіть програму, 
//    яка виконує певну асинхронну операцію (наприклад, затримка за допомогою setTimeout) декілька разів у циклі.
//    Покажіть, як код виконується асинхронно та управляється з використанням:
//    - async/await
//    - Promise

function delay () {
    return new Promise((res)=>{
        setTimeout(()=>{
            res('виконано')
        },1000)
    })
}


async function ex3(times) {
    for (let i = 0; i < times; i++) {
         await delay().then((res)=>{
            console.log(`задачу ${i} ${res}`);
            
        })
        
    }
}

setTimeout(()=>{
ex3(3)
}, 7000)

// 4. Створіть анімацію об'єкта на веб-сторінці, використовуючи тільки CSS для анімації (наприклад, @keyframes).
//    Потім використайте JavaScript для асинхронного запуску анімації, наприклад, при кліку на кнопку.

function startAnim () {
     const box = document.querySelector('.kub')
    
     
     if (box.style.animation) {
        box.style.animation = ''
     } else {
        box.style.animation = 'anim 2s linear infinite'
     }

}