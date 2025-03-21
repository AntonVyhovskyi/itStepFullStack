import axios from "axios";
import { Post } from "../typesAndInterfaces";



export const getAllPosts = () => axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')