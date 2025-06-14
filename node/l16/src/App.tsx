import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import ProductCart from './components/ProductCart/ProductCart';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface IItemInCard {
  id: number,
  count: number
}

function App() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [card, setCard] = useState<IItemInCard[]>([])
  useEffect(() => {
    axios.get<IProduct[]>('http://localhost:3000/products').then(res => {
      setProducts(res.data)
    })
  }, [])

  const buyHandler = () => {
    axios.post('http://localhost:3000/create-session', {items: card}).then(res=>{
      window.open(res.data.url, '_blank')
    })
  }

  const addToCard = (id: number) => {
    const ind = card.findIndex(el => el.id === id)
    if (ind !== -1) {
      const updatedCard = card.map((item, i) =>
        i === ind ? { ...item, count: item.count + 1 } : item
      );
      setCard(updatedCard);
    } else {
      setCard([...card, { id, count: 1 }])
    }
  }

  return (
    <div className='container'>
      <div className='flex flex-wrap gap-10'>
        {products.map(el => <ProductCart info={el} addToCard={addToCard} />)}
      </div>
      <div >
        <div >card</div>
        <div>
          {card && card.map(el => {
            const item = products.find(i => i.id === el.id)
            return (

              <div>
                {item ? <>
                  <div>{item?.title}</div>
                  <div>count: {el.count}</div>
                  <div>price: {(el.count * item?.price)}</div>
                </> : 'не знайдено товар'}

              </div>
            )
          })}
        </div>
        <button onClick={buyHandler}>kauf</button>

      </div>
    </div>



  )
}

export default App
