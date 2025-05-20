import axios from "axios"

export interface WishInterface {
    id: number,
    name: string,
    text: string,
    created_at: string
}

export type NewWish = Omit<WishInterface, 'id' | 'created_at'>

export const getWishes = (): Promise<WishInterface[]> =>
    axios.get<WishInterface[]>('http://localhost:3000/wishes')
        .then(res => res.data);


export const postWishes = (body: NewWish): Promise<WishInterface> =>
    axios.post<WishInterface>('http://localhost:3000/wishes', body)
        .then(res => res.data);