import { Action, Dispatch } from "redux";
import { User } from "../../typesAndInterfaces";
import { getAllUsers } from "../../api";

export const GET_USERS = 'GET_USERS' as const;


export const getUsers = (users: User[]) => (
    {
        type: GET_USERS,
        payload: users
    }
)

export const getUsersAsync = () => (dispatch: Dispatch) => {
    getAllUsers().then((res)=> {
      
        
        dispatch(getUsers(res.data))
    })
}


export type UsersActions = ReturnType<typeof getUsers>;