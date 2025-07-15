import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
import cls from './UpdatePortfolio.module.css'
import { useEffect, type FunctionComponent } from 'react';

interface UpdatePortfolioProps {

}



const UpdatePortfolio: FunctionComponent<UpdatePortfolioProps> = () => {



  const {id} = useParams()





    return (
        <div>
            <nav className={cls.navigation}>
                <NavLink
                    to={`/dashboard/update/${id}`}
                    end
                    className={({ isActive }) => ( isActive ? `${cls.link} ${cls.active}` : cls.link)}
                >
                    Basic Info
                </NavLink>
                <NavLink
                    to="skills"
                    className={({ isActive }) => ( isActive ? `${cls.link} ${cls.active}` : cls.link)}
                >
                    Skills
                </NavLink>
                <NavLink
                    to="projects"
                    className={({ isActive }) => ( isActive ? `${cls.link} ${cls.active}` : cls.link)}
                >
                    Projects
                </NavLink>

                <NavLink
                    to="../"
                    className={cls.buttonDashboard}
                >
                    To dashboard
                </NavLink>
                
                
            </nav>
            <Outlet />
        </div>
    );
}

export default UpdatePortfolio;