import axios from "axios";

 import { User } from "../components/types";


const baseUrl = 'https://jsonplaceholder.typicode.com'

export async function getAllUsers(): Promise<{data: User[], status: number}> {
    const response = await axios.get<User[]>(`${baseUrl}/users`)
    return {data: response.data, status: response.status}
}