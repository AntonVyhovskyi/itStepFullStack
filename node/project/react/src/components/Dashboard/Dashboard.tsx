import { useEffect, useState, type FunctionComponent } from "react";

import cls from './Dashboard.module.css'
import { useSelector } from "react-redux";
import type { RootState } from "../../state";
import Header from "./Header/Header";
import type { AuthState } from "../../state/slices/authSlice";
import { Outlet, useNavigate } from "react-router-dom";
import api from "../../api/axios";

interface DashboardProps {
    
}

export interface IPortfolio {
    id: number,
    user_id: number,
    first_name: string,
    last_name?: string,
    middle_name?: string,
    title: string,
    description: string,
    created_at: string,
    updated_at: string,
    email?: string,
    phone?: string,
    linkedin?: string,
    github?: string,
    telegram?: string,
    viber?: string,
    watsup?: string,
    image_url?: string
}
 
const Dashboard: FunctionComponent<DashboardProps> = () => {

    const [portfolios, setportfolios] = useState<IPortfolio[]>([]);

    const navigate = useNavigate()

    const userData: AuthState = useSelector((s: RootState)=>s.auth)

    useEffect(()=>{
        if (!userData.accessToken) {
            navigate('../login')
        }
    }, [userData])

    const fetchPortfolios = () => {
         api.get(`http://localhost:3000/portfolio/portfoliosByUserId/${userData.user?.id}`).then(res=>{
            setportfolios(res.data)
            console.log(res.data);
            
        })
    }
    useEffect(()=>{
        fetchPortfolios()
    },[])
    useEffect(()=>{
        console.log(portfolios);
        
    }, [portfolios])
    return ( 
        <div className={cls.container}>
            <Header userData={userData}/>
            <Outlet context={{portfolios}}/>
        </div>
     );
}
 
export default Dashboard;