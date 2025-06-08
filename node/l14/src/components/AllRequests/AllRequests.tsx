import { useEffect, useState, type FunctionComponent } from 'react';
import cls from './AllRequests.module.css';
import type { IRequest } from '../Requests/Requests';
import axios from 'axios';
import { useAppSelector } from '../../../hooks/hooks';

interface AllRequestsProps {

}

const AllRequests: FunctionComponent<AllRequestsProps> = () => {

    const [requests, setRequests] = useState<IRequest[]>([])
    const masters = useAppSelector(s => s.masters.masters)

    useEffect(() => {
        axios.get<IRequest[]>(`http://localhost:3000/requests`).then(res => {
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
            const newRequests = await axios.get<IRequest[]>(`http://localhost:3000/requests`)
            setRequests(newRequests.data)
        } catch (error) {
            console.log(error);

        }
    }

    const changeStatus = async (id: string, status: string) => {
        try {
            await axios.patch('http://localhost:3000/requests/changeStatus', {id, status})
            const newRequests = await axios.get<IRequest[]>(`http://localhost:3000/requests`)
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
                        <div className={cls.status}>
                            <select name="status" id="" value={e.status} onChange={(event)=>{
                                changeStatus(e.id, event.target.value)
                            }}>
                                <option value="нове">нове</option>
                                <option value="в роботі">в роботі</option>
                                <option value="завершено">завершено</option>
                            </select>
                        </div>
                        <button className={cls.deleteButton} onClick={() => { deleteRequest(e.id) }}>Видалити заявку</button>

                    </div>
                )

            }
            )
            }
        </div>
    );
}

export default AllRequests;
