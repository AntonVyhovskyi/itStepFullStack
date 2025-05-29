
import { NavLink } from 'react-router-dom'
import cls from './App.module.css'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'

interface statInterface {
  totalTournaments: string,
  averagePrizePool: string,
  totalPlayers: string
}

interface listItemInterface {
  id: number,
  name: string,
  city: string,
  organizer: string,
  prize_pool: string,
  players_registered: number
}

function App() {
  const location = useLocation()
  const [citys, setCitys] = useState([])
  const [stat, setStat] = useState<statInterface>()
  const [list, setList] = useState<listItemInterface[]>()

  useEffect(() => {
    if (location.pathname === "/top") {
      axios.get('http://localhost:3000/top').then(res => {
        setList(res.data)
      })
    } else if (location.pathname === "/expensive") {
      axios.get('http://localhost:3000/above-average').then(res => {
        setList(res.data)
      })
    } else {
      axios.get('http://localhost:3000/tournaments').then(res => {
        setList(res.data)
      })
    }

    console.log(location.pathname);

  }, [location])

  useEffect(() => {
    axios.get('http://localhost:3000/citys').then((res => {
      setCitys(res.data)
    }))
    axios.get('http://localhost:3000/statistics').then(res => {
      setStat(res.data[0])
    })
  }, [])
  return (
    <>
      <div className={cls.header}>
        <nav>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? `${cls.navLink} ${cls.activeNavLink}` : cls.navLink
            }
          >
            home
          </NavLink>

          <NavLink
            to='/top'
            className={({ isActive }) =>
              isActive ? `${cls.navLink} ${cls.activeNavLink}` : cls.navLink
            }
          >
            top 5
          </NavLink>

          <NavLink
            to='/expensive'
            className={({ isActive }) =>
              isActive ? `${cls.navLink} ${cls.activeNavLink}` : cls.navLink
            }
          >
            Дорогі
          </NavLink>
        </nav>
      </div>
      <div className={cls.content}>
        <div className={cls.citys}>
          {citys && citys.map((el: any) => (
            <div key={uuidv4()}>{el.city}</div>
          ))}
        </div>
        <div className={cls.list}>
          {list && list.map((el) => (
            <div key={el.id} className={cls.listItem}>
              <h3>{el.name}</h3>
              <h4>{el.city}</h4>
              <div className={cls.listItemOrg}>організатор {el.organizer}</div>
              <div className={cls.listItemPrize}>Приз: <span>{el.prize_pool}</span></div>
              <div className={cls.listItemPlayers}>Гравців: <span>{el.players_registered}</span></div>
            </div>
          ))}
        </div>
        <div className={cls.statistics}>
          {stat && <>
            <div>Всього турнирів: <span>{stat.totalTournaments}</span></div>
            <div>Середній приз: <span>{stat.averagePrizePool}</span></div>
            <div>Всього гравців: <span>{stat.totalPlayers}</span></div>
          </>}
        </div>
      </div>

    </>
  )
}

export default App
