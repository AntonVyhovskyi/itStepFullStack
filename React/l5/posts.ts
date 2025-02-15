const mainPosts: HTMLElement | null = document.querySelector('main')

interface Post {
    id: number,
    userId: number,
    title: string,
    body: string
}


fetch('https://jsonplaceholder.typicode.com/posts').then(responce => {
    return responce.json()

}).then((posts: Post[]) => {
    posts.forEach((el: Post) => {
        const newPost: HTMLElement = document.createElement('div')
        newPost.classList.add('user')
        newPost.innerHTML = `
                <div>${el.id}</div>
            <div>${el.userId}</div>
            <div>${el.title}</div>
            <div>${el.body}</div>
            `;
        if (mainPosts) {
            mainPosts.appendChild(newPost)
        }

    });


})


const xmlRequestPosts: XMLHttpRequest = new XMLHttpRequest()

xmlRequestPosts.open('GET', 'https://jsonplaceholder.typicode.com/posts')

xmlRequestPosts.send()

xmlRequestPosts.onload = ({ target }) => {
    let { response } = target as XMLHttpRequest
    const posts: Post[] = JSON.parse(response)
    posts.forEach((el: Post) => {
        const newPost: HTMLElement = document.createElement('div')
        newPost.classList.add('user')
        newPost.classList.add('redBorder')
        newPost.innerHTML = `
                <div>${el.id}</div>
            <div>${el.userId}</div>
            <div>${el.title}</div>
            <div>${el.body}</div>
            `;

        if (mainPosts) {
            mainPosts.appendChild(newPost)
        }
    });

}