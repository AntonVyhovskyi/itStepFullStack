import { useEffect } from "react";
import { getAllUsers } from "../../services";
import { useComponentDidMount, useMyState } from "../../customHooks";
import { User } from "../types";



function Users() {

    const [users, setUsers] = useMyState<User[]>([])
 
    const [userData, setUserData] = useMyState<number>(0)

    // useEffect(() => {
    //     getAllUsers().then(res => {
    //         if (res.status === 200) {
    //             setError(false)
    //             setUsers(res.data)
    //         }

    //     }).catch(err => {
    //       
    //         console.log(err);

    //     })
    // }, [])

    useComponentDidMount(getAllUsers, setUsers)
    return (
        <div>
            {users && users.map(el => {
                return <div>
                    {el.name}
                    <button onClick={()=>setUserData(el.id)}>show dateils</button>
                    {userData === el.id && el.email}
                </div>
            })
            }
            
        </div>
    );
}

export default Users;