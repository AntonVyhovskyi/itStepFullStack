import { useEffect, useState, type FunctionComponent } from "react";
import cls from './PortfolioPage.module.css'
import type { IBasicInfo } from "../Dashboard/UpdatePortfolio/UpdateBasicInfo/ContaierComponentUpdateBasicInfo";
import axios from "axios";
import api from "../../api/axios";
import { useParams } from "react-router-dom";
import BasicInfo from "./BasicInfo/BasicInfo";
import type { ISkill } from "../Dashboard/UpdatePortfolio/UpdateSkills/ContainerUpdateSkills";
import Skills from "./Skills/Skills";
import type { IProject } from "../Dashboard/UpdatePortfolio/UpdateProjects/ContainerUpdateProjects";
import Projects from "./Projects/Projects";
import Contacts from "./Contacts/Contacts";

interface PortfolioPageProps {

}

const PortfolioPage: FunctionComponent<PortfolioPageProps> = () => {

    const [basicInfo, setbasicInfo] = useState<IBasicInfo>();
    const [skills, setskills] = useState<ISkill[]>();
    const [projects, setprojects] = useState<IProject[]>();

    const { id } = useParams()

    const fetch = async () => {
        try {
            const basicInfoRes = await api.get<IBasicInfo>(`/portfolio/${id}`)
            setbasicInfo(basicInfoRes.data)
            const skillsRes = await api.get<ISkill[]>(`/skill/getByPortfolioId/${id}`)
            setskills(skillsRes.data)
            const projectsRes = await api.get<IProject[]>(`/project/byPortfolioId/${id}`)
            setprojects(projectsRes.data)
        } catch (error) {

        }
    }

    useEffect(() => {
        fetch()
    }, [])
     


    return (
        <div className={cls.container}>
            {basicInfo && 
            <BasicInfo basicInfo={basicInfo}/>
            }
            {skills && 
            <Skills skills={skills}/>
            }
            {projects && 
            <Projects projects={projects}/>
            }
            {basicInfo && 
            <Contacts basicInfo={basicInfo} />
            }
        </div>
    );
}

export default PortfolioPage;