import React, { Component } from "react";
import styles from "./Content.module.css";
import Posts from "../Posts/Posts";
import Users from "../Users/Users";
import Comments from "../Comments/Comments";

class Content extends Component {
    render() {
        return <div className={styles.container}>
            <Users/>
            <Posts/>
            <Comments/>
        </div>;
    }
}

export default Content;
