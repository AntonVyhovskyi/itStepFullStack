import type { FunctionComponent } from "react";

import cls from './Dashboard.module.css'
import { useSelector } from "react-redux";
import type { RootState } from "../../state";
import Header from "./Header/Header";

interface DashboardProps {
    
}
 
const Dashboard: FunctionComponent<DashboardProps> = () => {

    const userData = useSelector<RootState>(s=>s.auth)
    return ( 
        <div className={cls.container}>
            <Header userData={userData}/>
        </div>
     );
}
 
export default Dashboard;