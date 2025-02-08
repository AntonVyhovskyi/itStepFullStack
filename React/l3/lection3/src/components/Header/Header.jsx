import './Header.css'

function Header(props) {
    return ( 
        <div className='header'>
            <a href="#">{props.nav[0]}</a>
            <a href="#">{props.nav[1]}</a>
            <a href="#">{props.nav[2]}</a>
        </div>
     );
}

export default Header;