import React, { useEffect } from "react";
import styles from "./Comments.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/state";
import {  getCommentsAsync } from "../../store/actions/comments.actions";
import { Comment } from "../../typesAndInterfaces";

const Comments = () => {

    const comments: Comment[] = useSelector((state: RootState) => state.comments.comments)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => { 
        dispatch(getCommentsAsync()) 
    }, [dispatch])



    return <div className={styles.container}>{comments && comments.map((el: Comment) => {
            return <div key={el.id} className="p-1 text-amber-600 border-amber-400 border-2 mb-10">{el.body}</div>
        })}</div>;
};

export default Comments;
