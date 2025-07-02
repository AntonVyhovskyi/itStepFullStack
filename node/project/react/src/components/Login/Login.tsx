import type { FunctionComponent } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import cls from './Login.module.css';

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Невірний email').required('Обов’язково'),
      password: Yup.string().min(6, 'Мінімум 6 символів').max(64, 'Максимум 64 символи').required('Обов’язково'),
    }),
    onSubmit: (values) => {
      console.log('login', values);
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
          Увійти
        </button>
      </form>
    </div>
  );
};

export default Login;