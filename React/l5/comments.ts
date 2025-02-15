const main: HTMLElement | null = document.querySelector('main')

interface Comment {
    id: number,
    name: string,
    email: string,
    body: string
}


fetch('https://jsonplaceholder.typicode.com/comments').then(responce => {
    return responce.json()

}).then((comments: Comment[]) => {
    comments.forEach((el: Comment) => {
        const newComment = document.createElement('div')
        newComment.classList.add('user')
        newComment.innerHTML = `
<div>${el.id}</div>
<div>${el.name}</div>
<div>${el.email}</div>
<div>${el.body}</div>
`;
        if (main) {
            main.appendChild(newComment)
        }

    });


})


const xmlRequest: XMLHttpRequest = new XMLHttpRequest()

xmlRequest.open('GET', 'https://jsonplaceholder.typicode.com/comments')

xmlRequest.send()

xmlRequest.onload = ({ target }) => {
    const { response } = target as XMLHttpRequest
    const comments: Comment[] = JSON.parse(response)
    comments.forEach((el: Comment) => {
        const newComment: HTMLElement = document.createElement('div')
        newComment.classList.add('user')
        newComment.classList.add('redBorder')
        newComment.innerHTML = `
<div>${el.id}</div>
<div>${el.name}</div>
<div>${el.email}</div>
<div>${el.body}</div>
`;

        if (main) {
            main.appendChild(newComment)
        }
    });

}