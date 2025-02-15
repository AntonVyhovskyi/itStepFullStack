"use strict";
const main = document.querySelector('main');
fetch('https://jsonplaceholder.typicode.com/comments').then(responce => {
    return responce.json();
}).then((comments) => {
    comments.forEach((el) => {
        const newComment = document.createElement('div');
        newComment.classList.add('user');
        newComment.innerHTML = `
<div>${el.id}</div>
<div>${el.name}</div>
<div>${el.email}</div>
<div>${el.body}</div>
`;
        if (main) {
            main.appendChild(newComment);
        }
    });
});
const xmlRequest = new XMLHttpRequest();
xmlRequest.open('GET', 'https://jsonplaceholder.typicode.com/comments');
xmlRequest.send();
xmlRequest.onload = ({ target }) => {
    const { response } = target;
    const comments = JSON.parse(response);
    comments.forEach((el) => {
        const newComment = document.createElement('div');
        newComment.classList.add('user');
        newComment.classList.add('redBorder');
        newComment.innerHTML = `
<div>${el.id}</div>
<div>${el.name}</div>
<div>${el.email}</div>
<div>${el.body}</div>
`;
        if (main) {
            main.appendChild(newComment);
        }
    });
};
