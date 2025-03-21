import axios from "axios";
import { Comment } from "../typesAndInterfaces";



export const getAllComments = () => axios.get<Comment[]>('https://jsonplaceholder.typicode.com/comments')
export const getOneComment = (id: number) => axios.get<Comment>('https://jsonplaceholder.typicode.com/comments/' + id)