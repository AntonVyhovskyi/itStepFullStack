import {Outlet} from 'react-router'
 
function Day() {
    return ( 
        <div className="text-7xl text-blue-700 p-16 ">
            day component
            <Outlet/>
        </div>
     );
}

export default Day;