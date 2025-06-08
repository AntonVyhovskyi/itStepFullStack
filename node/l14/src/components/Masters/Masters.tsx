import { useEffect, useState, type FunctionComponent } from 'react';
import cls from './Masters.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { fetchMasters } from '../../../store/reducers/mastersSlice';

interface MastersProps {

}

interface IMasters {
    id: string,
    name: string,
    category: string

}

type TCategory = 'сантехнік' | 'електрик' | 'маляр' | 'всі';

const categoryArray: TCategory[] = [
    'сантехнік',
    'електрик',
    'маляр',
    'всі'
]

const Masters: FunctionComponent<MastersProps> = () => {
   const masters = useAppSelector(s=>s.masters.masters)
    const [category, setCategory] = useState<TCategory>('всі')

    const navigate = useNavigate()
    

   



    return (
        <div className={cls.container}>

            <div>
                <h2>Category</h2>
                {categoryArray.map(el => (
                    <button key={el} onClick={() => {
                        setCategory(el)
                    }} className={el === category ? cls.activeCategoryButton : cls.notActiveCategoryButton}>{el}</button>
                ))}
            </div>

            {masters.map(el => {

                if (el.category === category || category === 'всі') {
                    return (
                        <div key={el.id} className={cls.master}>
                            <div className={cls.masterName}>{el.name}</div>
                            <div className={cls.masterCategory}>{el.category}</div>
                            <button className={cls.createReqButton} onClick={() => {
                                navigate(el.id)
                            }}>Залишити заявку</button>
                        </div>
                    )
                }

            }

            )}
        </div>
    );
}

export default Masters;