"use strict";
const mainUsers = document.querySelector('main');
var idUser;
(function (idUser) {
    idUser[idUser["F"] = 1] = "F";
    idUser[idUser["S"] = 2] = "S";
    idUser[idUser["T"] = 3] = "T";
    idUser[idUser["FR"] = 4] = "FR";
    idUser[idUser["FV"] = 5] = "FV";
    idUser[idUser["SX"] = 6] = "SX";
    idUser[idUser["SV"] = 7] = "SV";
    idUser[idUser["E"] = 8] = "E";
    idUser[idUser["N"] = 9] = "N";
    idUser[idUser["TN"] = 10] = "TN";
})(idUser || (idUser = {}));
fetch('https://jsonplaceholder.typicode.com/users').then(responce => {
    return responce.json();
}).then((users) => {
    users.forEach((el) => {
        const newUser = document.createElement('div');
        newUser.classList.add('user');
        newUser.innerHTML = `
                <div>${el.id}</div>
            <div>${el.name}</div>
            <div>${el.email}</div>
            <div>${el.website}</div>
            <div>${el.company.bs}</div>
            `;
        if (mainUsers) {
            mainUsers.appendChild(newUser);
        }
    });
});
const xmlRequestUsers = new XMLHttpRequest();
xmlRequestUsers.open('GET', 'https://jsonplaceholder.typicode.com/users');
xmlRequestUsers.send();
xmlRequestUsers.onload = ({ target }) => {
    let { response } = target;
    const users = JSON.parse(response);
    users.forEach((el) => {
        const newUser = document.createElement('div');
        newUser.classList.add('user');
        newUser.classList.add('redBorder');
        newUser.innerHTML = `
                <div>${el.id}</div>
            <div>${el.name}</div>
            <div>${el.email}</div>
            <div>${el.website}</div>
            <div>${el.company.bs}</div>
            `;
        if (mainUsers) {
            mainUsers.appendChild(newUser);
        }
    });
};
