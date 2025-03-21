import { use, useEffect, useState } from "react";
import styles from "./Users.module.css";
import { User } from "../../typesAndInterfaces";
import { getAllUsers } from "../../services";
import { NavLink } from "react-router-dom";

const Users = () => {

    const [users, setUsers] = useState<User[]>([])
    const [openedUser, setOpenedUser] = useState<number>(0)

    useEffect(() => {
        getAllUsers().then(({ data }) => {
            setUsers(data)
            console.log(data);
        }
        )

    }, [])

    return <div className={styles.container}>
        <h2>Користувачі</h2>
        <div>
            {users.map(user => <div key={user.id} className={styles.user}>
                <h3>{user.name}</h3>
                {openedUser === user.id &&
                    <div>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </div>

                }
                <button onClick={() => setOpenedUser(user.id)}>Деталі</button>
                <NavLink to={`/users/${user.id}`} className={styles.link}>Детальніше</NavLink>
            </div>)}
        </div>
    </div>;
};

export default Users;
