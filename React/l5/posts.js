"use strict";
const mainPosts = document.querySelector('main');
fetch('https://jsonplaceholder.typicode.com/posts').then(responce => {
    return responce.json();
}).then((posts) => {
    posts.forEach((el) => {
        const newPost = document.createElement('div');
        newPost.classList.add('user');
        newPost.innerHTML = `
                <div>${el.id}</div>
            <div>${el.userId}</div>
            <div>${el.title}</div>
            <div>${el.body}</div>
            `;
        if (mainPosts) {
            mainPosts.appendChild(newPost);
        }
    });
});
const xmlRequestPosts = new XMLHttpRequest();
xmlRequestPosts.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xmlRequestPosts.send();
xmlRequestPosts.onload = ({ target }) => {
    let { response } = target;
    const posts = JSON.parse(response);
    posts.forEach((el) => {
        const newPost = document.createElement('div');
        newPost.classList.add('user');
        newPost.classList.add('redBorder');
        newPost.innerHTML = `
                <div>${el.id}</div>
            <div>${el.userId}</div>
            <div>${el.title}</div>
            <div>${el.body}</div>
            `;
        if (mainPosts) {
            mainPosts.appendChild(newPost);
        }
    });
};
