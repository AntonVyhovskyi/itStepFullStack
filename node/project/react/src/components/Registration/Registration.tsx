import { useEffect, useState, type FunctionComponent } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import cls from '../Login/Login.module.css';

import api from '../../api/axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../state';

interface RegistrationProps { }

const Registration: FunctionComponent<RegistrationProps> = () => {
  const [loginError, setloginError] = useState<boolean>(false);
  const navigate = useNavigate()

  const user = useSelector<RootState>(s => s.auth)

  useEffect(() => {
    if (user) {
      navigate('../dashboard')
    }
  }, [])

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Невірний email').required('Обов’язково'),
      name: Yup.string().min(1).max(64).required('Обов’язково'),
      password: Yup.string().min(6, 'Мінімум 6 символів').max(64, 'Максимум 64 символи').required('Обов’язково'),
    }),
    onSubmit: (values) => {
      api.post('/user/register', { ...values }, {
          withCredentials: true
      }).then(res => {
        localStorage.setItem('accessToken', res.data.accessToken)


      })
    },
  });

  return (
    <div className={cls.container}>
      <form onSubmit={formik.handleSubmit} className={cls.form}>

        <h2 className={cls.title}>Вхід до акаунту</h2>

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
          <label htmlFor="password" className={cls.label}>Пароль</label>
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
          Registration
        </button>
        <button className={cls.registration} type='button' onClick={() => { navigate('../login') }}>I have allready an account</button>
      </form>
    </div>
  );
};

export default Registration;