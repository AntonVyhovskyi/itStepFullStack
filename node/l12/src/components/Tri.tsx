import axios from "axios";
import { useEffect, useState, type FunctionComponent } from "react";
import {v4 as uuidv4} from "uuid"

interface TriProps {

}

const Tri: FunctionComponent<TriProps> = () => {


    const [items, setItems] = useState<[]>([])

    useEffect(() => {
        axios.get('http://localhost:3000/unmatched-orderss').then(res => {
            setItems(res.data)

        })
    }, [])
    return (
        <div>
            { items.map((el:any, idx: number)=>(
                <div key={uuidv4()}>ордер {idx}: кліент {el.name? el.name : 'нема'}</div>
            ))}
        </div>
    );
}

export default Tri;