import React from "react";
import cls from './Header.module.css'




interface HeaderProps {
    currentMonth: Dayjs;
    setCurrentMonth: (date: Dayjs) => void;
}

const Header: React.FC<HeaderProps> = ({
    currentMonth,
    setCurrentMonth,
}) => {
    const prevMonth = () => {
        setCurrentMonth(currentMonth.subtract(1, "month"));
    };

    const nextMonth = () => {
        setCurrentMonth(currentMonth.add(1, "month"));
    };

    return (
        <div className={cls.container}>
            <button
                onClick={prevMonth}
                className={`${cls.button} ${cls.left}`}
            >
                <div>V</div>
            </button>

            <h2 className={cls.month}>
                {currentMonth.format("MMMM YYYY")}
            </h2>

            <button
                onClick={nextMonth}
                className={`${cls.button} ${cls.right}`}
            >
                <div>V</div>
            </button>
        </div>
    );
};

export default Header;