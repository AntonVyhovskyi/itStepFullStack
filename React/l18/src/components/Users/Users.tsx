
import { useEffect } from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks/hooks'

import { asyncUsers } from '../../../store/slices/user.slice';

const Users = () => {
    const {users, loading, error} = useAppSelector((state)=> state.users)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(asyncUsers())
    },
[dispatch])


    return (
        <div>
            {loading ? 'loading' : ''}
            {users && users.map(((el)=> (<div key={el.id}>{el.name}</div>)))}
            {error ? 'нема юзерів' : ''}
        </div>
    )
};

export default Users;
