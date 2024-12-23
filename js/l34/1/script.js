let colect = localStorage.getItem('colectVisites') || 1
if (colect !== 1) {
    localStorage.setItem('colectVisites', Number(colect)+1)
} else {
    localStorage.setItem('colectVisites', colect)
}

let visites = document.querySelector('.visites')
visites.innerHTML = `Ви відвідали цей сайт ${localStorage.getItem('colectVisites')} разів`

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
