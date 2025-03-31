import { Dispatch } from "redux";
import { getAllComments } from "../../api";
import { Comment } from "../../typesAndInterfaces";

export const GET_COMMENTS = 'GET_COMMENTS' as const;



export const getComments = (payload:Comment[]) => ({
    type: GET_COMMENTS, payload
})


export const getCommentsAsync = () => (dispatch:Dispatch) => {
    getAllComments().then(res=>{
        dispatch(getComments(res.data))
    })
}


export type CommentsActions = ReturnType<typeof getComments>