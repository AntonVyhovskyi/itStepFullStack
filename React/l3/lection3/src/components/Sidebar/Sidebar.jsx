import './Sidebar.css'

function Sidebar(props) {
    return ( 
        <div className='sidebar'>
            <div>Name: {props.sidebarDate.name}</div>
            <div>Age: {props.sidebarDate.age}</div>
            <div>Email: {props.sidebarDate.email}</div>
        </div>
     );
}

export default Sidebar;