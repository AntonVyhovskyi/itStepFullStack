import axios from "axios";

 import { Post } from "../components/types";


const baseUrl = 'https://jsonplaceholder.typicode.com'

export async function getAllPosts(): Promise<{data: Post[], status: number}> {
    const response = await axios.get<Post[]>(`${baseUrl}/posts`)
    return {data: response.data, status: response.status}
}