import { NavLink, Outlet, useParams } from 'react-router-dom';
import cls from './UpdatePortfolio.module.css'
import { useEffect, useState, type FunctionComponent } from 'react';
import api from '../../../api/axios';

interface UpdatePortfolioProps {

}

export interface IBasicInfo {
    id: number,
    user_id: number,
    first_name: string,
    last_name?: string,
    middle_name?: string,
    title: string,
    description: string,
    created_at: string,
    updated_at: string,
    email: string,
    phone: string,
    linkedin: string,
    github: string,
    telegram: string,
    viber: string,
    watsup: string,
    image_url: string
}

interface ISkill {
    id: number;
    name: string;
}

export interface IProject {
    id: number,
    title: string,
    description: string,
    image_url: string,
    github_url: string,
    live_url: string,
    created_at: string,
    portfolio_id: number
}


const UpdatePortfolio: FunctionComponent<UpdatePortfolioProps> = () => {

    const { id } = useParams()

    const [basicInfo, setbasicInfo] = useState<IBasicInfo>();
    const [skills, setskills] = useState<ISkill[] | null>([]);
    const [projects, setprojects] = useState<IProject[] | null>();

    const updateAllInfoFetch = async () => {

        const infoResponse = await api.get<IBasicInfo>(`/portfolio/${id}`)
        setbasicInfo(infoResponse.data)
        const skillsResponse = await api.get<ISkill[] | null>(`/skill/getByPortfolioId/${id}`)
        setskills(skillsResponse.data)
        const projectsResponse = await api.get<IProject[] | null>(`project/byPortfolioId/${id}`)
        setprojects(projectsResponse.data)

    }

    useEffect(() => {
        updateAllInfoFetch()
    }, []);

    useEffect(() => {
        console.log({ basicInfo, skills, projects });

    }, [basicInfo, skills, projects]);



    return (
        <div>
            <nav className={cls.navigation}>
                <NavLink
                    to="basicInfo"
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
            </nav>
            <Outlet context={{basicInfo}}/>
        </div>
    );
}

export default UpdatePortfolio;