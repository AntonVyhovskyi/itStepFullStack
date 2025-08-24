import { useNavigate } from 'react-router-dom';
import cls from './Main.module.css';

function Main() {
  const navigate = useNavigate();

  return (
    <div className={cls.container}>
      <div className={cls.content}>
        <h1 className={cls.title}>Create your own portfolio</h1>
        <h1 className={cls.titleBlack}>portfolio</h1>
        <p className={cls.subtitle}>
          A simple way to introduce yourself, your skills, and your projects. Perfect for developers, designers, and freelancers.
        </p>
        <button className={cls.button} onClick={() => navigate('login')}>
          Get started
        </button>
      </div>
    </div>
  );
}

export default Main;