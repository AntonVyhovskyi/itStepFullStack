
import { useEffect, useState } from "react";
import { getAllComments } from "../../services";
import { Comment } from "../../typesAndInterfaces";
import cls from "./Comments.module.css";
import { NavLink } from "react-router-dom";

const Comments = () => {
    const [comments, setComments] = useState<Comment[]>([])
    const [openedComment, setOpenedComment] = useState<number>(0)

    useEffect(() => {
        getAllComments().then(({ data }) => {
            setComments(data)
            console.log(data);
        }
        )

    }
        , [])
    return <div className={cls.container}>
        <h2>Коментарі</h2>
        <div>
            {comments && comments.map(c => <div key={c.id} className={cls.comment}>
                <h3>{c.name}</h3>
                {openedComment === c.id &&
                    <div>
                        <p>{c.body}</p>
                    </div>

                }
                <button onClick={() => setOpenedComment(c.id)}>Open</button>
                <NavLink to={`/comments/${c.id}`}>Детальніше</NavLink>
            </div>)}
        </div>
    </div>;
};

export default Comments;
