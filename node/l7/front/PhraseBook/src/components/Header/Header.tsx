import { Link, NavLink } from 'react-router-dom';
import cls from './Header.module.css'
import type { FunctionComponent } from 'react';

interface HeaderProps {

}

const links = [
    {
        path: 'list',
        text: 'Список'
    },
    {
        path: 'work',
        text: 'Вчити'
    },
    {
        path: 'createNew',
        text: 'Створити нову'
    },
]

const Header: FunctionComponent<HeaderProps> = () => {
    return (
        <div className={cls.container}>
            <Link to={'/'} className={cls.logo}>toto<span>Phrases</span></Link>

            <nav className={cls.nav}>
                {links.map(el => (
                    <NavLink key={el.path} className={({ isActive }) => isActive ? cls.active : ''} to={el.path}>{el.text}</NavLink>
                ))}
            </nav>

        </div>
    );
}

export default Header;