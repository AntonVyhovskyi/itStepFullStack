import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import Header from "../Header/Header";
import { useEffect } from "react";
import cls from './Dashboard.module.css'

function Dashboard() {
    const navigate = useNavigate()
    const {isAuth} = useAppSelector(s=>s.auth)

    useEffect (()=>{
        if (!isAuth) {
            navigate('/login')
        }
    },[isAuth])

    return ( 
        <div className={cls.container}>
            <Header />
            <div className={cls.content}>

            </div>
        </div>
     );
}

export default Dashboard;