import { Component } from "react";
import styles from "./Comments.module.css";
import { comments, CommentInterface } from '../../constans/comments'




interface CommentsProps {

}

interface CommentsState {
    comments: CommentInterface[]
}

class Comments extends Component<CommentsProps, CommentsState> {
    constructor(props: CommentsProps) {
        super(props);
        this.state = { comments: comments };
    }
    deleteComment = (id: number) => {
        const newArr = this.state.comments.filter(el => {
            return id !== el.id
        })
        this.setState({ comments: newArr })
    }
    render() {
        return (
            <div className={styles.container}>
                {this.state.comments.map((el) => {
                    return (
                       <Comment key={el.id} data={el} deleteComment={this.deleteComment}/>
                    )
                })}
            </div>
        );
    }
}

export default Comments;

interface CommentProps {
    data: CommentInterface
    deleteComment: (id:number)=> void
}

interface CommentState {
    showText: boolean
}

class Comment extends Component<CommentProps, CommentState> {
    constructor(props: CommentProps) {
        super(props);
        this.state = { showText: false };
    }

    changeShowText = () => {
        this.setState({ showText: !this.state.showText })
    }
    render() {
        const {postId, id, name, email, body} = this.props.data
        return (
            
            <div className={styles.comment}>
                <div>Post ID: {postId}, Comment ID: {id}</div>
                <div>Title: {name}</div>
                <div>email: {email}</div>
                <button onClick={this.changeShowText}>{this.state.showText ? 'Hide Text' : 'Show Text'}</button>
                {
                    this.state.showText 
                    &&
                    <div>
                        {body}
                    </div>
                }
                <button onClick={()=>{this.props.deleteComment(id)}}>Delete</button>
            </div>
        );
    }
}

