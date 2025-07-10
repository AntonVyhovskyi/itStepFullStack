import { useEffect, useState, type FunctionComponent } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import cls from '../Login/Login.module.css';

import api from '../../api/axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../state';
import { setToken } from '../../state/slices/authSlice';

interface RegistrationProps { }

const Registration: FunctionComponent<RegistrationProps> = () => {
  
  const [emailError, setemailError] = useState<boolean>(false);

  const navigate = useNavigate()

  const token = useSelector((s: RootState) => s.auth.accessToken)

  const dispatch = useDispatch()

  useEffect(() => {
    if (token) {
      navigate('../dashboard')
    }
  }, [token])

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      name: Yup.string().min(1).max(64).required(),
      password: Yup.string().min(6).max(64).required(),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'confirm password is not same as password')
        .required(),
    }),
    onSubmit: (values) => {
      const { confirmPassword, ...dataToSend } = values;
      api.post('/user/register', { ...dataToSend }, {
        withCredentials: true
      }).then(res => {
        localStorage.setItem('accessToken', res.data.accessToken)
        dispatch(setToken(res.data.accessToken))

      }).catch((err)=>{
        if(err.status === 409) {
          setemailError(true)
        }
        else{
          alert('something wrong')
        }
      })
    },
  });

  return (
    <div className={cls.container}>
      <form onSubmit={formik.handleSubmit} className={cls.form}>

        <h2 className={cls.title}>Registration</h2>
        {emailError && <div className={cls.error}>email is already in use</div>}
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
          <label htmlFor="name" className={cls.label}>Name</label>
          <input
            id="name"
            type="text"
            {...formik.getFieldProps('name')}
            className={cls.input}
          />
          {formik.touched.name && formik.errors.name && (
            <div className={cls.error}>{formik.errors.name}</div>
          )}
        </div>

        <div className={cls.field}>
          <label htmlFor="password" className={cls.label}>password</label>
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

        <div className={cls.field}>
          <label htmlFor="confirmPassword" className={cls.label}>Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            {...formik.getFieldProps('confirmPassword')}
            className={cls.input}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className={cls.error}>{formik.errors.confirmPassword}</div>
          )}
        </div>

        <button type="submit" className={cls.button}>
          Registration
        </button>
        <button className={cls.registration} type='button' onClick={() => { navigate('../login') }}>I have already an account</button>
      </form>
    </div>
  );
};

export default Registration;