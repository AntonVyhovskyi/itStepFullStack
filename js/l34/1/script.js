//  1. Створіть HTML сторінку, яка відображає, скільки разів користувач її відвідував.
//     Використовуйте localStorage для збереження кількості відвідувань.

//     Результат:
//      На сторінці повинно з’являтися щось на кшталт: "Ви відвідали цю сторінку 5 разів."


let colect = localStorage.getItem('colectVisites') || 1
if (colect !== 1) {
    localStorage.setItem('colectVisites', Number(colect)+1)
} else {
    localStorage.setItem('colectVisites', colect)
}

let visites = document.querySelector('.visites')
visites.innerHTML = `Ви відвідали цей сайт ${localStorage.getItem('colectVisites')} разів`

// 2. Реалізуйте просту форму входу (2 prompt), де користувач вводить ім'я та пароль.
// Після входу ім'я користувача зберігається у sessionStorage.
// На іншій вкладці перевіряйте, чи користувач увійшов (при завантаженні сторінки),
// і виводьте повідомлення: "Привіт, [Ім'я користувача]".


let userLogin = sessionStorage.getItem('login') || undefined
let privit = document.querySelector('.privit')
if (!userLogin) {
    let login = prompt('введи логін')
    sessionStorage.setItem('login', login)
    privit.innerHTML = `privit ${login}`
}  else {
    privit.innerHTML = `privit ${userLogin}`
}









// 3. Реалізуйте таймер сесії, який показує, скільки часу користувач провів на сторінці.
// Час початку сесії зберігайте у cookie при оновленні сторінки він має продовжувати відлік.



let time = document.querySelector('.time')
let seconds = getCookie('secondsOnSite') || 0
time.innerHTML = `та на цій сторінці ${seconds} секунд` 
setInterval(() => {
    seconds = Number(seconds) + 1
    document.cookie = `secondsOnSite=${seconds}; path=/; max-age=3600`
    time.innerHTML = `та на цій сторінці ${seconds} секунд` 
}, 1000);



function getCookie (key) {
    let cookies = document.cookie.split('; ')
    for (let cookie of cookies) {
        const [keyC, value] = cookie.split('=')
        if (keyC === key) {
            return decodeURIComponent(value)
        }
        
    }
    return null
}
