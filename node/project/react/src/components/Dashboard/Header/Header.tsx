import { useDispatch } from 'react-redux';
import api from '../../../api/axios';
import { logout, type AuthState } from '../../../state/slices/authSlice';
import cls from './Header.module.css'

import type { FunctionComponent } from "react";


interface HeaderProps {
    userData: AuthState | null
}

const Header: FunctionComponent<HeaderProps> = (props) => {
    let name = null
    if (props.userData !== null) {
        name = props.userData?.user?.name
    }

    const dispatch = useDispatch()
    const logoutHandler = () => {
        api.post('user/logout', null, {
            withCredentials: true
        }).then(() => {
            dispatch(logout())
        }).catch(err => {
            console.log(err);
            dispatch(logout())

        })
    }

    return (
        <div className={cls.container}>
            <div className={cls.title}>Portfo<span>Craft</span></div>
            <div className={cls.right}>
                <div className={cls.name}>
                    {name && name}
                </div>
                <button onClick={logoutHandler}>Вийти</button></div>

        </div>
    );
}

export default Header;