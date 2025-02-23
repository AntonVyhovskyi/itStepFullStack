import { Component } from "react";
import styles from "./Users.module.css";
import { users, UserInterface } from "../../constans/users"

interface Props {

}

interface State {
    users: UserInterface[]
}

class Users extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = { users: users }
    }

    deleteUser = (id: number) => {
        const newArr = this.state.users.filter(el => {
            return id !== el.id
        })
        this.setState({ users: newArr })
    }
    render() {
        const { users } = this.state

        return <div className={styles.container}>
            {users.map(el => {
                return <User user={{ ...el }} deleteUser={this.deleteUser} key={el.id} />
            })}
        </div>;
    }
}

export default Users;


interface UserProps {
    user: UserInterface;
    deleteUser: (id: number) => void;
}
interface UserState {
    user: UserInterface,
    showAddress: boolean
}


class User extends Component<UserProps, UserState> {

    constructor(props: UserProps) {
        super(props);
        this.state = {
            user: props.user,
            showAddress: false
        }

    }

    changeShowAdress = () => {
        this.setState({ showAddress: !this.state.showAddress })
    }
    render() {
        const { id, name, email, address } = this.state.user
        const { showAddress } = this.state
        return (
            <div className={styles.user}>
                <div className={styles.name}>{id}: {name}. email: {email}</div>
                <button onClick={this.changeShowAdress}>{showAddress ? 'hide adress' : 'show adress'}</button>
                {showAddress &&
                    <div className={styles.address}>
                        <div>{address.city}</div>
                        <div>{address.street}</div>
                        <div>{address.zipcode}</div>
                    </div>
                }
                <button onClick={() => this.props.deleteUser(id)}>Delete</button>
            </div>
        );
    }
}



