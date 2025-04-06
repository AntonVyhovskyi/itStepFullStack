import React, { useEffect } from "react";
import styles from "./Posts.module.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { getAllPostsAsync } from "../../../store/slices/posts.slice";


const Posts = () => {

    const { posts, loading, error } = useAppSelector(state => state.posts)

    const dispatch = useAppDispatch()



    return <div className={styles.container}>
        <div><button onClick={()=>dispatch(getAllPostsAsync())}>Get Posts</button></div>
        <div></div>
        {loading && 'loading'}
        {error && 'нема постів або шось с інтернетом'}
        {posts && posts.map((el: Post) => {
        return <div key={el.id} style={{border: '1px solid red', marginBottom: '10px'}}>{el.body}</div>
    })}</div>;
};

export default Posts;
