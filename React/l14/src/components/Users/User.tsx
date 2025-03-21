import {  useEffect, useState } from "react";
import styles from "./Users.module.css";
import { User } from "../../typesAndInterfaces";
import {  getOneUser } from "../../services";
import {  useParams } from "react-router-dom";

const UserComponent = () => {

    const {id} = useParams<{id:string}>()
    const [data, setData] = useState<User>()
   

    useEffect(() => {
        getOneUser(Number(id)).then(({ data }) => {
            setData(data)
            console.log(data);
        }
        )

    }, [])

    return <div className={styles.container}>
        <div>id: {data?.id}</div>
        <div>name: {data?.name}</div>
        <div>username : {data?.username}</div>
        <div>email: {data?.email}</div>
        <div>
            <h3>adress</h3>
            <ul>
                <li>{data?.address.city}</li>
                <li>{data?.address.street}</li>
                <li>{data?.address.suite}</li>
                <li>{data?.address.zipcode}</li>
            </ul>
        </div>
    </div>;
};

export default UserComponent;
