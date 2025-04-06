import axios from "axios";
import { Comment } from "../typesAndInterfaces";



export const getAllComments = () => axios.get<Comment[]>('https://jsonplaceholder.typicode.com/comments')