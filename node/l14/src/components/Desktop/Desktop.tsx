import { useEffect, type FunctionComponent } from "react";
import cls from './Desktop.module.css'
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { NavLink, Outlet } from "react-router-dom";
import { setEmail } from "../../../store/reducers/userSlice";
import { fetchMasters } from "../../../store/reducers/mastersSlice";

interface DesktopProps {

}

const links: {path: string, text:string}[] = [
    {
        path: '/',
        text: 'Майстри'
    },
    {
        path: '/requests',
        text: 'Заявки'
    },
    {
        path: '/requestsAll',
        text: 'Усі Заявки(адмін)'
    },

]

const Desktop: FunctionComponent<DesktopProps> = () => {

    const dispatch = useAppDispatch()

    const exit = () => {
        dispatch(setEmail(null))
    }
    useEffect(()=>{
        dispatch(fetchMasters())
    },[])

    const email = useAppSelector(s => s.user.email)
    return (
        <div className={cls.container}>
            <div className={cls.header}>
                <div className={cls.headerEmail}>
                    {email}
                </div>
                <nav className={cls.headerNav}>
                    {links.map(e=>(
                        <NavLink to={e.path} 
                        key={e.path}
                        className={({isActive })=>isActive ? cls.headerNavActiveLink : ''}
                        >{e.text}</NavLink>
                    ))}
                </nav>
                <button className={cls.exitButton} onClick={()=>{exit()}}>exit</button>
            </div>
            <div className="content">
                <Outlet/>
            </div>
        </div>
    );
}

export default Desktop;