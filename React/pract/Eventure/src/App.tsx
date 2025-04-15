import { useState } from 'react'
import {Outlet} from 'react-router'

import './App.css'
import Header from './components/Header/Header';
import dayjs, { Dayjs } from 'dayjs';
import CalendarGrid from './components/CalendarGrid/CalendarGrid';



function App() {
  const [currentMonth, setCurrentMonth] = useState<Dayjs>(dayjs());

  return (
    <>
    <div className="max-w-xl mx-auto p-4">
      <Header
        currentMonth={currentMonth}
        setCurrentMonth={setCurrentMonth}
      />
      

      <CalendarGrid/>
      <Outlet/>
    </div>
    </>
  )
}

export default App
