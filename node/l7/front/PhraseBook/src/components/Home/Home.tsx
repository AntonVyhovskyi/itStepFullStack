import { Link } from 'react-router-dom';
import cls from './Home.module.css'
import imgList from '../../assets/img/list.jpg'
import imgWork from '../../assets/img/work.jpg'
import imgCreate from '../../assets/img/create.jpg'
import type { FunctionComponent } from 'react';


interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
    return (
        <div className={cls.container}>
            <Link to='/desktop/list'>
                <h2>Дивитись список фраз</h2>
                <div className={cls.linkImg}>
                    <img src={imgList} alt="imgList" />
                </div>
            </Link>
            <Link to='/desktop/work'>
                <h2>Вчити фрази</h2>
                <div className={cls.linkImg}>
                    <img src={imgWork} alt="imgWork" />
                </div>
            </Link>
            <Link to='/home/desktop/createNew'>
                <h2>Додати фразу</h2>
                <div className={cls.linkImg}>
                    <img src={imgCreate} alt="imgCreate" />
                </div>
            </Link>

        </div>
    );
}

export default Home;