
import { useEffect } from "react";
import { useComponentDidMount, useMyState } from "../../customHooks";
import { Comment } from "../types";
import cls from "./Comments.module.css";
import { getAllComments } from "../../services";

function Comments() {

    const [comments, setComments] = useMyState<Comment[]>([])

    // useEffect(()=>{
    //     getAllComments().then((res)=>{
    //         if (res.status === 200) {
    //             setComments(res.data)
    //         }
    //     }).catch(err => {
    //         console.log(err);
            
    //     })
    // },[])

    useComponentDidMount(getAllComments, setComments)

    return ( 
        <div>
            {comments && comments.map(el=>(
                <div>
                    <h3>{el.id}</h3>
                    <h2>{el.name}</h2>
                    <p>{el.email}</p>
                    <p>{el.body}</p>
                    <hr />
                </div>
            ))}
        </div>
     );
}

export default Comments;


