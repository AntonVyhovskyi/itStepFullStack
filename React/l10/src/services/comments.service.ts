import axios from "axios";

 import { Comment } from "../components/types";


const baseUrl = 'https://jsonplaceholder.typicode.com'

export async function getAllComments(): Promise<{data: Comment[], status: number}> {
    const response = await axios.get<Comment[]>(`${baseUrl}/comments`)
    return {data: response.data, status: response.status}
}