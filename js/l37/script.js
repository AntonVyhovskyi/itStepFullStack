// 1. Створити промпт при заповненні якого вас перенаправляє на сайт який був введений в промпті.


let druhiySayt = prompt('Якщо хоч на другий сайт то введи його сюди в форматі https://google.com/')

if (druhiySayt) {
    console.log(window.location.href = druhiySayt);

}

// 2. Створити функцію яка буде показувати на екрані геолокацію та url шлях сайту.

let asd = document.getElementById('asd')
function geoAndUrl() {
   window.navigator.geolocation.getCurrentPosition((geo) => { 
    asd.innerHTML = `широта: ${geo.coords.latitude}   довготa: ${geo.coords.longitude}  ----site url: ${window.location.href}`

    })
   

}

geoAndUrl()



// 3. Створити стрім із мікро і відео (Див. лекцію).

let videoa = document.getElementById('video')

window.navigator.mediaDevices.getUserMedia({video: true, audio: true}).then(strim=>{
        videoa.srcObject = strim
        videoa.play()
})