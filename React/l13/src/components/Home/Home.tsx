import React from "react";
import cls from "./Home.module.css";

const Home = () => {
    return <div className={cls.container}>
        <h2>
            Практика React
        </h2>
        <div>
            <h3>Що робимо?</h3>
            <ul>
                <li>Здійснюємо запити на бекенд за допомогою axios</li>
                <li>Реалізовуемо роутинг разом з React Router Dom</li>
                <li>Створюемо компоненти і трохи бавимся з ними</li>
            </ul>
        </div>
    </div>;
};

export default Home;
