import { createSlice } from "@reduxjs/toolkit"
import { EventInterface } from "../../interfacesAndTypes"


interface EventsStateInterface {
    events: EventInterface[]
}

const eventsFromLocalStorage = localStorage.getItem('events')

const initialState: EventsStateInterface = {
    events:eventsFromLocalStorage ? JSON.parse(eventsFromLocalStorage) as EventInterface[] : []
}


const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        addEvent(state, action) {
            state.events = [...state.events, action.payload]
            localStorage.setItem('events', JSON.stringify(state.events))
        },
        
        deleteEvent(state, action) {
            state.events = state.events.filter(el=>{
                return el.id !== action.payload
            })
            localStorage.setItem('events', JSON.stringify(state.events))
        },
        correctnEvent(state, action) {
            const index = state.events.findIndex(event => event.id === action.payload.id);
            if (index) {
                state.events[index] = {...action.payload}
                localStorage.setItem('events', JSON.stringify(state.events))
            } else {
                console.error('не знайдено евент')
            }
            
            
        },
    }
})

export const {addEvent, deleteEvent, correctnEvent} = eventsSlice.actions

export default eventsSlice.reducer