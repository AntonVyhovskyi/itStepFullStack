import { useEffect, useState, type FunctionComponent } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import cls from './Login.module.css';

import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../state';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../../state/slices/authSlice';
import api from '../../api/axios';

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {

  const [errorLogin, seterrorLogin] = useState<boolean>(false);
  const token: string | null = useSelector((s: RootState)=>s.auth.accessToken)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(6, 'Мінімум 6 символів').max(64).required(),
    }),
    onSubmit: (values) => {
      api.post('/user/login', {...values}, { withCredentials: true }).then(res=>{
        localStorage.setItem('token', res.data.accessToken);
        dispatch(setToken(res.data.accessToken))
      }).catch(err=>{
        if (err.status === 401) {
          seterrorLogin(true)
        } else {
          console.log(err);
          alert('something wrong')
        }
      })
    },
  });

  useEffect(()=>{
    if (token) {
      navigate('../dashboard')
    }
  }, [token])

  return (
    <div className={cls.container}>
      <form onSubmit={formik.handleSubmit} className={cls.form}>
        <h2 className={cls.title}>Login</h2>
        {errorLogin && <div className={cls.error}>email or password is incorrect</div>}
        <div className={cls.field}>
          <label htmlFor="email" className={cls.label}>Email</label>
          <input
            id="email"
            type="email"
            {...formik.getFieldProps('email')}
            className={cls.input}
          />
          {formik.touched.email && formik.errors.email && (
            <div className={cls.error}>{formik.errors.email}</div>
          )}
        </div>

        <div className={cls.field}>
          <label htmlFor="password" className={cls.label}>Password</label>
          <input
            id="password"
            type="password"
            {...formik.getFieldProps('password')}
            className={cls.input}
          />
          {formik.touched.password && formik.errors.password && (
            <div className={cls.error}>{formik.errors.password}</div>
          )}
        </div>

        <button type="submit" className={cls.button}>
          Увійти
        </button>
        <button className={cls.registration} type='button' onClick={() => { navigate('../registration') }}>I havnt acc.. registration</button>
      </form>
    </div>
  );
};

export default Login;