import { ErrorMessage, Field, Form, Formik } from 'formik';
import cls from './Login.module.css'
import { object, string } from 'yup';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { login } from '../../store/slices/auth.slice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function Login() {

    const {isAuth} = useAppSelector(state=>state.auth)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(()=> {
        if(isAuth) {
            navigate('/')
        }
    },[isAuth])
    return (
        <div className={cls.container}>
            <div className={cls.block}>

                
                <Formik 
                initialValues={{ email: '', password: '' }}
                validationSchema={object({
                    email: string().email('Невалідна пошта').required('Обовʼязково'),
                    password: string().min(6, 'Мінімум 6 символів').required('Обовʼязково'),
                  })}
                onSubmit={(values)=>{
                    dispatch(login(values.email)
                   
                )}}
                >
                    <Form className={cls.form}>
                        <h3>Login</h3>
                        <Field name="email" type="email" />
                        <ErrorMessage name='email' className={cls.error} component='div'/>
                        <Field name="password" type="password" />
                        <ErrorMessage name='password'/>
                      <button type='submit'>login</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default Login;