import { Dayjs } from 'dayjs';
import { Outlet, useNavigate, useOutletContext, useParams } from 'react-router'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { EventInterface } from '../../interfacesAndTypes';
import { deleteEvent } from '../../state/slices/events.slice';
import cls from './Day.module.css'
import { useEffect } from 'react';


export type ContextType = {
    currentMonth: Dayjs,
    nowDateForTitle?: string

}

const Day: React.FC = () => {

    const dispatch = useAppDispatch()

    const { date } = useParams()

    const { currentMonth } = useOutletContext<ContextType>()

    const nowDateForTitle = currentMonth.date(Number(date)).format('DD-MM-YYYY')

    const events = useAppSelector(state => {
        const newArrEvents: EventInterface[] = []
        state.events.events.forEach(el => {
            if (el.date.startsWith(currentMonth.date(Number(date)).format('YYYY-MM-DD'))) {
                newArrEvents.push(el)
            }
        })
        return newArrEvents
    })





    const navigate = useNavigate()


    return (
        <div className={cls.fullMonitorContainer}>



            <div className={cls.container}>
                <div className={cls.containerTop}>
                    <div>Events</div>
                    <div>{nowDateForTitle}</div>
                    <button
                        onClick={() => {

                            navigate('..')

                        }}
                        className={cls.goBack}>close</button>
                </div>



                {events && events.map(el => (
                    <div className={cls.event}>
                        <div className={cls.eventTop}>
                            <div className={cls.eventTitle}>{el.title}</div>
                            <div className={cls.eventButtons}>
                                <button className={cls.eventDel} onClick={() => { dispatch(deleteEvent(el.id)) }}>delete</button>
                                <button className={cls.eventEdit} onClick={() => { navigate(`event/edit/${el.id}`) }}>correct</button>
                            </div>

                        </div>
                        {el.description ? <div className={cls.eventDiscription}>{el.description}</div> : ''}

                    </div>

                ))}

                <div
                    onClick={() => { navigate('./event/new') }}
                    className={cls.addNewEvent}>Add new event</div>

            </div>
            <Outlet context={{ currentMonth: currentMonth.date(Number(date)),  nowDateForTitle}} />
        </div>
    );
}

export default Day;