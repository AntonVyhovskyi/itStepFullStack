import { useAppDispatch } from "../../hooks/hooks";
import { logout } from "../../store/slices/auth.slice";
import cls from './Header.module.css'

function Header() {

    const dispatch = useAppDispatch()

    return ( 
        <div className={cls.container}>
            <button onClick={()=>{dispatch(logout())}}>Log out</button>
        </div>
     );
}

export default Header;