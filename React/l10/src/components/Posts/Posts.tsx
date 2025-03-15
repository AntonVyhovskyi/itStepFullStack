
import cls from "./Posts.module.css";
import { Post } from "../types";
import { useComponentDidMount, useMyState } from "../../customHooks";
import { getAllPosts } from "../../services/posts.service";


function Posts() {
    const [posts, setPosts] = useMyState<Post[]>([])

    // useEffect(()=>{
    //     getAllPosts().then(res=> {
    //         if(res.status === 200) {
    //             setPosts(res.data)
    //         }
    //     }).catch(err => {
    //         console.log(err);
            
    //     })
    // }, [])

    useComponentDidMount(getAllPosts, setPosts)
    return ( 
        <div>
           {posts && posts.map(el=>(
            <div key={el.id}>
                <h3>{el.id}</h3>
                <h2>{el.title}</h2>
                <p>{el.body}</p>
                <hr />
            </div>
           ))}
        </div>
     );
}

export default Posts;


