import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { Component } from 'react';


import './HomePage.css'


class HomePage extends Component {
     headerDate = {
        nav: [
            'Home',
            'First Page',
            'Second Page'
        ]
    }

     sidebarDate = {
        name: 'Anton',
        age: 28,
        email: 'aaa@gmail@com'
    }
     footerDate = {
        info: 'many many info about this web site'
    }

    render() { 
        return (
            <div className='homepage'>
            <Header nav={this.headerDate.nav} />
            <div className='centr'>
                <Sidebar sidebarDate={this.sidebarDate} />
                <Content />

            </div>
            <Footer footerDate={this.footerDate} />

        </div>
        );
    }
}
 
export default HomePage;

