import { NavLink, useNavigate, useOutletContext, useParams } from 'react-router-dom';
import cls from './ItemCart.module.css'
import type { ProductInterface } from './App';
import { useState } from 'react';
import axios from 'axios';


interface ItemCartProps {

}

const ItemCart: FunctionComponent<ItemCartProps> = () => {
    const { id } = useParams()
    const products: ProductInterface[] = useOutletContext()
    let item: ProductInterface | undefined = products.find(el => el.id === Number(id))

    const [uncorectCollect, setUncorectCollect] = useState<boolean>(false)

    const navigate = useNavigate();

    const checkCollect = (val: number) => {
        axios.post('http://localhost:3000/products/check', { id: Number(id) }).then((res) => {
            if(res.data.data<val) {
                setUncorectCollect(true)
            }
            else (
                setUncorectCollect(false)
            )
            

        }).catch((err) => {
            console.log(err);

        })
    }

    const handleGoHome = () => {
        navigate('/');  // Переходить на головну сторінку
    };


    return (
        <div className={cls.container}>
            <div className={cls.image}>
                <img src={item?.image} alt="" />
            </div>
            <div className={cls.text}>
                <button className={cls.close} onClick={()=>{handleGoHome()}}>Close</button>
                <div className={cls.title}>{item?.title}</div>
                <div className={cls.description}>{item?.description}</div>
                <div className={cls.price}>{item?.price}$</div>
            </div>
            <div className={cls.buy}>
                <div>Кількість</div>
                <input type="number" min="0" step="1" onChange={(e) => checkCollect(Number(e.target.value))} />
                <button>Купити</button>
                {uncorectCollect && <div style={{color: 'red'}}>Недостятня кількість товару на складі</div>}

            </div>
        </div>
    );
}

export default ItemCart;