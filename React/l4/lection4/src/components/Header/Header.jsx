import './Header.css'
import { Component } from 'react';


class Header extends Component {
   
    constructor(props) {
        super();
        this.nav1 = props.nav[0]
        this.nav2 = props.nav[1]
        this.nav3 = props.nav[2]
    }
    
    render() { 
        return ( 
            <div className='header'>
            <a href="#">{this.nav1}</a>
            <a href="#">{this.nav2}</a>
            <a href="#">{this.nav3}</a>
        </div>
         );
    }
}



export default Header;