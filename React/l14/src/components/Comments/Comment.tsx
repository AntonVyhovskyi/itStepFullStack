
import { useEffect, useState } from "react";
import { getOneComment } from "../../services";
import { Comment } from "../../typesAndInterfaces";
import cls from "./Comments.module.css";
import {  useParams } from "react-router-dom";

const CommentComponent = () => {
    
const [commentData, setCommentData] = useState<Comment>({} as Comment) 
const {id} = useParams()
useEffect(() => {
    
    getOneComment(id).then(({data}) => {
        setCommentData(data)
    })
    }
    )
    
    return <div className={cls.container}>
        {commentData?.email}
        {commentData?.body}
    </div>;
};

export default CommentComponent;
