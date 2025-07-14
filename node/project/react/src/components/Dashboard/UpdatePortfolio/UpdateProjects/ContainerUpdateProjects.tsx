import { useEffect, useState, type FunctionComponent } from "react";
import { redirect, useParams } from "react-router-dom";
import api from "../../../../api/axios";
import UpdateProjects from "./UpdateProjects";

interface ContainerUpdateProjectsProps {

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


export interface INewProject {
    title: string,
    description: string,
    image_url: string,
    github_url: string,
    live_url: string,
}

const ContainerUpdateProjects: FunctionComponent<ContainerUpdateProjectsProps> = () => {
    const { id } = useParams()
    const [projects, setprojects] = useState<IProject[]>([]);

    const fetchProjects = () => {
        api.get<IProject[]>(`project/byPortfolioId/${id}`).then(res => {
            setprojects(res.data)
        })
    }

    useEffect(() => {
        fetchProjects()
    }, []);


    const addNewProject = (values: INewProject) => {
        debugger
        api.post(`project/${id}`, values).then(res=>{
            fetchProjects()
        }).catch(err=>{
            alert('project creating is falled')
        })
    }


    return (
        <>
            <UpdateProjects projects={projects} addNewProject={addNewProject}/>
        </>
    );
}

export default ContainerUpdateProjects;