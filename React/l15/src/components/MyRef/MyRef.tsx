import React from "react";
import styles from "./MyRef.module.css";
import axios from "axios";
interface Props {

}

interface State {
name: string,
email: string,
phone: string  
}

class MyRef extends React.Component<Props, State> {
    ref: React.RefObject<HTMLInputElement | null> = React.createRef<HTMLInputElement>();

    constructor(props: Props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: ""
        };
    }
    

    componentDidMount() {
        this.ref.current?.focus()
    }

    getAllUsers = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users/" + this.ref.current?.value);
       this.setState({name: response.data.name,
        email: response.data.email,
        phone: response.data.phone
       })
    }
    render() {
        return (
            <div>
                <h1>MyRef</h1>
                <input type="text" ref={this.ref} />
                <button onClick={this.getAllUsers}>go</button>
                <div>{this.state.name}</div>
                <div>{this.state.email}</div>
                <div>{this.state.phone}</div>
            </div>
        );
    }
}

export default MyRef;
