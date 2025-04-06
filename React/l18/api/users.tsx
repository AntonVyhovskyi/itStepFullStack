import axios from "axios";
import { User } from "../typesAndInterfaces";



export const getAllUsers = () => axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
export const getOneUser = (id:number) => axios.get<User>('https://jsonplaceholder.typicode.com/users/' + id)