import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import cls from './Desktop.module.css'

interface DesktopProps {
    
}
 
const Desktop: FunctionComponent<DesktopProps> = () => {
    return ( 
        <div className={cls.container}>
            <Header/>
            <Outlet/>
        </div>
     );
}
 
export default Desktop;