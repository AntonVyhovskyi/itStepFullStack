import { Action } from "redux";
import { User } from "../../typesAndInterfaces";
import { GET_USERS, UsersActions } from "../actions/users.actions";

export interface InitialStateUsers {
    users: User[]
}

const initialState:InitialStateUsers = {
    users: []
}


export const usersReducer = (state = initialState, action:UsersActions): InitialStateUsers => {
    switch (action.type) {
        case GET_USERS: {
            return {...state, users: action.payload};
        }
        default: return state;
    }
}