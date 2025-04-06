import React, { useEffect } from "react";
import styles from "./Comments.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "../../../hooks/hooks";
import { getAllCommentsAsync } from "../../../store/slices/comments.slice";

const Comments = () => {

    const { comments, loading, error } = useAppSelector(s => s.comments)
    const dispatch = useDispatch()





    return (

        <div className={styles.container}>
            <div>
                <button onClick={() => { dispatch(getAllCommentsAsync()) }}>get comments</button>
            </div>
            <div>
                {loading && 'loading'}
                {error && 'шось з нетом або з серваком я хз'}
                {comments && comments.map((el) => {
                    return <div key={el.id} style={{border: '1px solid red', marginBottom: '10px'}}>{el.body}</div>
                })}
            </div>

        </div>
    )
};

export default Comments;
