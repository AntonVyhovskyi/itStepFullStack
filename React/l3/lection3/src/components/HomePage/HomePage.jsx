import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';


import './HomePage.css'


function HomePage() {
    const headerDate = {
        nav: [
            'Home',
            'First Page',
            'Second Page'
        ]
    }

    const sidebarDate = {
        name: 'Anton',
        age: 28,
        email: 'aaa@gmail@com'
    }
    const footerDate = {
        info: 'many many info about this web site'
    }

    return (
        <div className='homepage'>
            <Header nav={headerDate.nav} />
            <div className='centr'>
                <Sidebar sidebarDate={sidebarDate} />
                <Content />

            </div>
            <Footer footerDate={footerDate} />

        </div>
    );
}

export default HomePage;