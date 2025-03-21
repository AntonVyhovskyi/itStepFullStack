import React from "react";
import cls from "./Home.module.css";

const Home = () => {
    return <div className={cls.container}>
        <h2>
            Практика React Router
        </h2>
        <h2>
            Частина 2
        </h2>
        <div>
            <h3>Що робимо?</h3>
            <ul>
                <li>Здійснюємо запити на бекенд за допомогою axios</li>
                <li>Реалізовуемо роутинг разом з React Router Dom</li>
                <li>Практикуемо useParams i Navigate</li>
            </ul>
        </div>
    </div>;
};

export default Home;
