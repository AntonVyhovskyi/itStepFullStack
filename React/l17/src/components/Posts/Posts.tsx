import React, { useEffect } from "react";
import styles from "./Posts.module.css";
import { Post } from "../../typesAndInterfaces";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/state";
import { getPosts, getPostsAsync } from "../../store/actions/posts.actions";

const Posts = () => {

    const posts: Post[] = useSelector((state: RootState) => state.posts.posts)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => { 
        dispatch(getPostsAsync()) 
    }, [dispatch])



    return <div className={styles.container}>{posts && posts.map((el: Post) => {
        return <div key={el.id} className="p-1 text-amber-600 border-amber-400 border-2 mb-10">{el.body}</div>
    })}</div>;
};

export default Posts;
