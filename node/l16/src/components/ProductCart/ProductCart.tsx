import type { FunctionComponent } from 'react';
import cls from './ProductCart.module.css';
import type { IProduct } from '../../App';

interface ProductCartProps {
    info: IProduct,
    addToCard: (id:number)=>void
}
 
const ProductCart: FunctionComponent<ProductCartProps> = (props) => {

    const {id, title, price, image, category, description, rating} = props.info
    return ( 
        <div className='w-40 p-2 border-solid border-2 border-amber-950 rounded-2xl'>
            <div className='truncate'>{title}</div>
            <div className='w-full h-38 overflow-hidden'><img src={image} alt={title} className='w-full h-full object-contain' /></div>
            <div className='text-left'>{price} $</div>
            <div className='text-xs text-right'>
                Rating <span className='text-green-500'>{rating.rate}/5</span>, count <span className='text-blue-400'>{rating.count}</span>
            </div>
            <button className='cursor-pointer p-2 border-solid border-black border-2 mt-2 rounded-2xl hover:text-green-500 duration-300' onClick={()=>{props.addToCard(id)}}>add to card</button>
        </div>
     );
}
 
export default ProductCart;
