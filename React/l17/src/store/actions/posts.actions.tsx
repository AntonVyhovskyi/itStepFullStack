import { Dispatch } from "redux";
import { getAllPosts } from "../../api";
import { Post } from "../../typesAndInterfaces";

export const GET_POSTS = 'GET_POSTS' as const;



export const getPosts = (payload:Post[]) => ({
    type: GET_POSTS, payload
})


export const getPostsAsync = () => (dispatch:Dispatch) => {
    getAllPosts().then(res=>{
        dispatch(getPosts(res.data))
    })
}


export type PostsTypes = ReturnType<typeof getPosts>