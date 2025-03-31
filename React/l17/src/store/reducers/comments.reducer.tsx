
import { Comment } from "../../typesAndInterfaces";
import { CommentsActions, GET_COMMENTS } from "../actions/comments.actions";
import { GET_USERS, UsersActions } from "../actions/users.actions";

export interface InitialStateComments {
    comments: Comment[]
}

const initialState:InitialStateComments = {
    comments: []
}


export const commentsReducer = (state = initialState, action:CommentsActions): InitialStateUsers => {
    switch (action.type) {
        case GET_COMMENTS: {
            return {...state, comments: action.payload};
        }
        default: return state;
    }
}