import { useState, type FunctionComponent } from "react";
import { useAppDispatch } from "../../../hooks/hooks";
import { setEmail } from "../../../store/reducers/userSlice";
import { useNavigate } from "react-router-dom";
import cls from './Auth.module.css'

interface AuthProps {

}

const Auth: FunctionComponent<AuthProps> = () => {

    const [emailInput, setEmailInput] = useState<string>('')

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const login = () => {
        dispatch(setEmail(emailInput))
        navigate('../')
    }


    return (
        <div className={cls.container}>
            <form action="" onSubmit={(e) => { login(), e.preventDefault(); }}>
                <input type="email" value={emailInput} onChange={(e) => { setEmailInput(e.target.value) }} />
                <button type="submit">login</button>
            </form>

        </div>
    );
}

export default Auth;