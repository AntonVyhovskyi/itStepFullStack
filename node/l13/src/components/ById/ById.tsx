import { useEffect, useState, type FunctionComponent } from 'react';
import cls from './ById.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface ByIdProps {
    
}

export interface IDream {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  creator: string;
}
 
const ById: FunctionComponent<ByIdProps> = () => {
    const [searchValue, setSearchValue] = useState<string>('')
    const [dreams, setDreams] = useState<IDream[]>([])
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get<IDream>(`http://localhost:3000/dreamById/${searchValue}`).then(res=>{
            setDreams([res.data])
        }).catch(err=>{
            setDreams([])
        })
    },[searchValue])


    return ( 
        <div className={cls.container}>
            <div className={cls.search}>
                <input type="text" value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}} />
            </div>
            <div className={cls.dreams}>
                {dreams.length>0 ? dreams.map(e=>(
                    <div className={cls.item} key={e.id} onClick={()=>{navigate(`dream/${e.id}`)}}>
                        {e.description}
                    </div>
                ))
                : 'нема'
            }
            </div>
        </div>
     );
}
 
export default ById;
