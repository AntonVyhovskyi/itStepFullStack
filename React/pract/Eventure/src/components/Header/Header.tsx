import React from "react";




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
        <div className="flex items-center justify-between mb-4 px-4">
            <button
                onClick={prevMonth}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
                ← Назад
            </button>

            <h2 className="text-xl font-semibold">
                {currentMonth.format("MMMM YYYY")}
            </h2>

            <button
                onClick={nextMonth}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
                Вперед →
            </button>
        </div>
    );
};

export default Header;