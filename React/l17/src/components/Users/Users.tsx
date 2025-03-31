import React, { useEffect, useState } from "react";
import styles from "./Users.module.css";
import { User } from "../../typesAndInterfaces";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAsync } from "../../store/actions/users.actions";
import { AppDispatch, RootState } from "../../store/state";


const Users = () => {

    
    const users:User[] = useSelector((state: RootState)=> {
       return state.users.users
    })
    const dispatch = useDispatch<AppDispatch>()

    useEffect(()=>{
        dispatch(getUsersAsync())
    }, [dispatch])

    useEffect(()=>{
        console.log(users);
        
    }, [users])

    return <div className={styles.container}>{users && users.map((el:User)=><div className="p-1 text-amber-600 border-amber-400 border-2 mb-10" key={el.id}>{el.name}</div>)}</div>;
    
};

export default Users;
