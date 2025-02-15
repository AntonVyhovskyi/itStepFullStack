const mainUsers: HTMLElement | null = document.querySelector('main')

interface User {
    id: idUser,
    name: string,
    email: string,
    website: string,
    company: {
        bs: string
    }

}

enum idUser {
    F = 1, 
    S = 2,
    T = 3,
    FR = 4,
    FV = 5,
    SX = 6,
    SV = 7,
    E = 8,
    N = 9,
    TN = 10


}


fetch('https://jsonplaceholder.typicode.com/users').then(responce => {
    return responce.json()

}).then((users: User[]) => {
    users.forEach((el: User) => {
        const newUser: HTMLElement = document.createElement('div')
        newUser.classList.add('user')
        newUser.innerHTML = `
                <div>${el.id}</div>
            <div>${el.name}</div>
            <div>${el.email}</div>
            <div>${el.website}</div>
            <div>${el.company.bs}</div>
            `;

        if (mainUsers) {
            mainUsers.appendChild(newUser)
        }
    });


})


const xmlRequestUsers: XMLHttpRequest = new XMLHttpRequest()

xmlRequestUsers.open('GET', 'https://jsonplaceholder.typicode.com/users')

xmlRequestUsers.send()

xmlRequestUsers.onload = ({ target }) => {
    
    let {response} = target as XMLHttpRequest
    const users: User[] = JSON.parse(response)
    users.forEach((el: User) => {
        const newUser: HTMLElement = document.createElement('div')
        newUser.classList.add('user')
        newUser.classList.add('redBorder')
        newUser.innerHTML = `
                <div>${el.id}</div>
            <div>${el.name}</div>
            <div>${el.email}</div>
            <div>${el.website}</div>
            <div>${el.company.bs}</div>
            `;
        if (mainUsers) {
            mainUsers.appendChild(newUser)
        }

    });

}