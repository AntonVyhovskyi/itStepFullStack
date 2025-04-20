import dayjs, { Dayjs } from "dayjs";
import React from "react";
import cls from './CalendarGrid.module.css'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from "../../hooks/hooks";


interface CalendarGridInterface {
    currentMonth: Dayjs
}

const CalendarGrid: React.FC<CalendarGridInterface> = ({ currentMonth }) => {

    const events = useAppSelector(state => state.events.events.filter(el => {

        return el.date.startsWith(currentMonth.format('YYYY-MM'))
    }))
    const daysWithEvents = events.map(el => dayjs(el.date).date())
    console.log(daysWithEvents);



    const nowDay = dayjs().format('DD')
    const nowMonthAndYear = dayjs().format('YYYY-MM') == currentMonth.format('YYYY-MM')


    const navigate = useNavigate()
    // calendar grid render logik-------------======----------=========------
    const daysInMonth = currentMonth.daysInMonth()
    const firstWeekDay = currentMonth.startOf('month').day()
    const dates: string[] = [];
    for (let i = 0; i < firstWeekDay; i++) {
        dates.push('')

    }
    for (let i = 1; i <= daysInMonth; i++) {
        dates.push(`${i}`)

    }
    const weekDays = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    // -------------==========---------------==========----------======

    return (<div>
        <div className={cls.gridContainer}>
            {weekDays.map(el => (<div className={cls.weekDay}>{el}</div>))}
            {dates.map(el => {
              

                const isEvent: boolean = daysWithEvents.some(v => v === Number(el))
                return (<div className={
                    el
                        ? [
                            cls.date,
                            el === nowDay && nowMonthAndYear && cls.now,
                            isEvent && cls.isEvent
                        ]
                            .filter(Boolean)
                            .join(' ')
                        : ''
                }>
                    {el ? <div onClick={() => { navigate(`/day/${el}`) }}>{el}</div> : ''}
                </div>)
            })}
        </div>
    </div>);
}

export default CalendarGrid;