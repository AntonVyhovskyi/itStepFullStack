import axios from "axios";
import { useEffect, useState, type FunctionComponent } from "react";
import {v4 as uuidv4} from "uuid"

interface DvaProps {

}

const Dva: FunctionComponent<DvaProps> = () => {


    const [items, setItems] = useState<[]>([])

    useEffect(() => {
        axios.get('http://localhost:3000/only-orders').then(res => {
            setItems(res.data)

        })
    }, [])
    return (
        <div>
            { items.map((el:any)=>(
                <div key={uuidv4()}>{el.name}{el.product? ` в ордері продукт с назвою ${el.product}` : ' нема ордерів'}</div>
            ))}
        </div>
    );
}

export default Dva;