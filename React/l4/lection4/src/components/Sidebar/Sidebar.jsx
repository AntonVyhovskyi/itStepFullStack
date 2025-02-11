import { Component } from 'react';
import './Sidebar.css'

class Sidebar extends Component {
    constructor(props) {
        super();
        this.name = props.sidebarDate.name
        this.age = props.sidebarDate.age
        this.email = props.sidebarDate.email
    }

    render() {
        return (
            <div className='sidebar'>
                <div>Name: {this.name}</div>
                <div>Age: {this.age}</div>
                <div>Email: {this.email}</div>
            </div>
        );
    }
}




export default Sidebar;