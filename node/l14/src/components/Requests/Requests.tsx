import { useEffect, useState, type FunctionComponent } from 'react';
import cls from './Requests.module.css';
import axios from 'axios';
import { useAppSelector } from '../../../hooks/hooks';

interface RequestsProps {

}

export interface IRequest {
    id: string;
    customer: string;
    email: string;
    master_id: string;
    description: string;
    status: 'нове' | 'в роботі' | 'завершено';
    created_at: string;
}

const Requests: FunctionComponent<RequestsProps> = () => {

    const [requests, setRequests] = useState<IRequest[]>([]);
    const email = useAppSelector(s => s.user.email)
    const masters = useAppSelector(s => s.masters.masters)

    

    useEffect(() => {
        axios.get<IRequest[]>(`http://localhost:3000/requests/${email}`).then(res => {
            setRequests(res.data)
        }).catch(err => {
            console.log(err);
        })
    }, [])

    const getMasterById = (id: string) => {
        const master = masters.find((el) => el.id === id)
        return master
    }

    const deleteRequest = async (id: string) => {
        try {
            await axios.delete(`http://localhost:3000/requests/${id}`)
            const newRequests = await axios.get<IRequest[]>(`http://localhost:3000/requests/${email}`)
            setRequests(newRequests.data)
        } catch (error) {
            console.log(error);
            
        }
    }
    return (
        <div className={cls.container}>
            {requests.map(e => {

                const master = getMasterById(e.master_id)

                return (
                    <div className={cls.item} key={e.id}>
                        <div className={cls.name}>{e.customer}</div>
                        <div className={cls.master}>Майстер: {master?.name}({master?.category})</div>
                        <div className={cls.description}>{e.description}</div>
                        <div className={cls.status}>{e.status}</div>
                        <button className={cls.deleteButton} onClick={()=>{deleteRequest(e.id)}}>Видалити заявку</button>
                    </div>
                )

            }
            )}
        </div>
    );
}

export default Requests;
