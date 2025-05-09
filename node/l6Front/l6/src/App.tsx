import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import cls from './App.module.css'
import axios from 'axios'
import { NavLink, Outlet } from 'react-router-dom'

export interface ProductInterface {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}

function App() {
  const [products, setProducts] = useState<ProductInterface[]>([])
  const [sort, setSort] = useState<string>('')

  useEffect(() => {
    axios.get<{ message: string, products: ProductInterface[] }>('http://localhost:3000/products').then((res) => {

      setProducts(res.data.products)
    }).catch((err) => {
      console.log(err);

    })
  }, [])

  useEffect(() => {
    if (sort) {
      axios.get<{ message: string, products: ProductInterface[] }>(`http://localhost:3000/products/${sort}`).then((res) => {

        setProducts(res.data.products)
      }).catch((err) => {
        console.log(err);
  
      })
    }
    
  }, [sort])



  return (
    <>
      <div className={cls.sort}>
        <select name="" id="" onChange={(e)=>{setSort(e.target.value) 
          
          
        }}>
          <option value="">Сортувати</option>
          <option value="sortPriceDown">Від дорогих</option>
          <option value="sortPriceUp">Від дешевих</option>
          <option value="sortNameUp">По алфавіту</option>
          <option value="sortNameDown">По алфавіту в зворотньому напрямку</option>
        </select>
      </div>
      <div className={cls.products}>
        {products && products.map((el) => {
          return (
            <div key={el.id} className={cls.item}>
              <div className={cls.itemImage}>
                <img src={el.image} alt="" />
              </div>
              <div className={cls.itemText}>
                <div className={cls.itemTitle}>{el.title}</div>
                <div className={cls.itemPrice}>{el.price}</div>
                
                <NavLink to={`/${el.id}`}>Buy</NavLink>
              </div>


            </div>
          )
        })}
      </div>
      <Outlet context={products}/>
    </>
  )
}

export default App
