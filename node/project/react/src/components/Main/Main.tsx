import { useNavigate } from 'react-router-dom';
import cls from './Main.module.css';

function Main() {
  const navigate = useNavigate();

  return (
    <div className={cls.container}>
      <div className={cls.content}>
        <h1 className={cls.title}>Створи власне портфоліо</h1>
        <p className={cls.subtitle}>
          Простий спосіб представити себе, свої навички та проєкти. Ідеально для розробників, дизайнерів і фрилансерів.
        </p>
        <button className={cls.button} onClick={() => navigate('login')}>
          Get started
        </button>
      </div>
    </div>
  );
}

export default Main;