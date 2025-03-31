import { Post } from "../../typesAndInterfaces";
import { GET_POSTS, PostsTypes } from "../actions/posts.actions";

export interface InitialStatePosts  {
    posts: Post[]
}

const initialState: InitialStatePosts = {
    posts:[]
}


export const postsReducer = (state = initialState, action: PostsTypes): InitialStatePosts => {
    switch (action.type) {
        case GET_POSTS: return {...state, posts: action.payload}



        default: return state

    }
}