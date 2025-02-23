import { Component } from "react";
import cls from "./Posts.module.css";
import { posts, PostInterface } from "../../constans/posts"

interface PostsProps {

}

interface PostsState {
    posts: PostInterface[]
}

class Posts extends Component<PostsProps, PostsState> {
    constructor(props: PostsProps) {
        super(props);
        this.state = { posts: posts };
    }

    deletePost = (id: number) => {
        const newArr: PostInterface[] = this.state.posts.filter(el => {
           
            return el.id !== id
        })
        
        this.setState({ posts: newArr })
    }
    render() {
        return (
            <div className={cls.container}>
                {this.state.posts.map(el => {
                    return (
                        <Post data={el}
                            deletePost={this.deletePost} key={el.id} />
                    )
                })}
            </div>
        );
    }
}

export default Posts;

interface PostProps {
    data: PostInterface,
    deletePost: (id: number) => void
}
interface PostState {
    showText: boolean
}


class Post extends Component<PostProps, PostState> {
    constructor(props: PostProps) {
        super(props);
        this.state = {showText: false}
    }
    changeShowText = () => {
        this.setState({showText: !this.state.showText})
    }
    render() {
        const { userId, id, title, body } = this.props.data
        return (
            <div className={cls.post}>
                <div>user id: {userId}, Post id {id}</div>
                <h3>Title: {title}</h3>
                <button onClick={this.changeShowText}>{this.state.showText ? 'Hide text' : 'Show text'}</button>
                {this.state.showText 
                &&
                <div>{body}</div> 
                }
                <button onClick={()=>{this.props.deletePost(id)}}>delete</button>
            </div>
        );
    }
}


