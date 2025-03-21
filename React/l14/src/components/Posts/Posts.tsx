import { use, useEffect, useState } from "react";
import cls from "./Posts.module.css";
import { Post } from "../../typesAndInterfaces";
import { getAllPosts } from "../../services";
import { useNavigate } from "react-router-dom";


const Posts = () => {

    const [posts, setPosts] = useState<Post[]>([])
    const [openedPost, setOpenedPost] = useState<number>(0)

    useEffect(() => {
        getAllPosts().then(({ data }) => {
            setPosts(data)
            console.log(data);
        })} ,[])


    const nav = useNavigate()

    const openPost = (id: number) => {

        const post = posts.find(post=> post.id === id)
        nav(`/posts/${id}`, { state: post })
    }

    return <div className={cls.container}>
        <h2>Пости</h2>
        <div>
            {posts.map(post => <div key={post.id} className={cls.post}>
                <h3>{post.title}</h3>
                {openedPost === post.id &&
                    <div>
                        <p>{post.body}</p>
                    </div>

                }
                <button onClick={() => setOpenedPost(post.id)}>Open</button>
                <button onClick={()=>{openPost(post.id)}}>Делатьніше</button>
            </div>)}
        </div>
    </div>;
};

export default Posts;
