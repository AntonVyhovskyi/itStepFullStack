import axios from "axios";
import { useEffect, useState, type FunctionComponent } from "react";
import {v4 as uuidv4} from "uuid"

interface OdinProps {

}

const Odin: FunctionComponent<OdinProps> = () => {


    const [items, setItems] = useState<[]>([])

    useEffect(() => {
        axios.get('http://localhost:3000/customer-orders').then(res => {
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

export default Odin;