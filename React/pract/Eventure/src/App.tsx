import { useState } from 'react'
import { Outlet } from 'react-router'
import cls from './App.module.css'

import Header from './components/Header/Header';
import dayjs, { Dayjs } from 'dayjs';
import CalendarGrid from './components/CalendarGrid/CalendarGrid';



function App() {
  const [currentMonth, setCurrentMonth] = useState<Dayjs>(dayjs());
  


  return (
    <>
      <div className={cls.container}>
        <Header
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
        />


        <CalendarGrid currentMonth={currentMonth} />
        <Outlet context={{ currentMonth }} />
      </div>
    </>
  )
}

export default App
