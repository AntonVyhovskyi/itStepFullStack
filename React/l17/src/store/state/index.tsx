import { applyMiddleware, combineReducers, createStore, legacy_createStore } from "redux";
import { InitialStateUsers, usersReducer } from "../reducers/users.reducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import  {thunk}  from "redux-thunk";
import { InitialStatePosts, postsReducer } from "../reducers/posts.reducer";
import { commentsReducer } from "../reducers/comments.reducer";




const rootReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer
})

export type RootState = ReturnType<typeof rootReducer>;


export const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


export type AppDispatch = typeof store.dispatch;