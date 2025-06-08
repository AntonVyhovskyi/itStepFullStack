import { useEffect, useState, type FunctionComponent } from 'react';
import cls from './Dream.module.css';
import type { IDream } from '../ById/ById';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface DreamProps {

}

const Dream: FunctionComponent<DreamProps> = () => {

    const [dream, setDream] = useState<IDream>()
    const { id } = useParams()
    useEffect(() => {
        axios.get<IDream>(`http://localhost:3000/dreamById/${id}`).then(res => {
            setDream(res.data)
        }).catch(err => {
            console.log(err);

        })
    })
    return (
        <div className={cls.container}>
            <div className={cls.title}>{dream?.title}</div>
            <div className={cls.description}>{dream?.description}</div>
            <div className={cls.category}>{dream?.category}</div>
            <div className={cls.img}>
                <img src={dream?.imageUrl} alt="s" />
            </div>
            
        </div>
    );
}

export default Dream;
