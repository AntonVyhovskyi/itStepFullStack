import dayjs from "dayjs";

function CalendarGrid() {
    
    const dates = [
        '', '', '1', '2', '3', '4', '5',
        '6', '7', '8', '9', '10', '11', '12',
        '13', '14', '15', '16', '17', '18', '19',
        '20', '21', '22', '23', '24', '25', '26',
        '27', '28', '29', '30', '', '', ''
    ];

    const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'];


    return ( <div>
        <div className="grid grid-cols-7">
            {weekDays.map(el=>(<div>{el}</div>))}
            {dates.map(el=>(<div>{el}</div>))}
        </div>
    </div> );
}

export default CalendarGrid;