import { useEffect, useState, type FunctionComponent } from "react";
import type { IProject } from "../ContainerUpdateProjects";
import api from "../../../../../api/axios";
import UpdateOnePortfolio from "./UpdateOneProject";
import nullsToEmpty from "../../../../../utils/helpers/nullsToEmpty";
import cls from './UpdateOneProject.module.css' 

interface ContainerUpdateOneProjectProps {
    projectId: number
}

const ContainerUpdateOneProject: FunctionComponent<ContainerUpdateOneProjectProps> = ({ projectId }) => {

    const [projectInfo, setprojectInfo] = useState<IProject>();
    const [error, seterror] = useState<boolean>(false);
    const [success, setsuccess] = useState<boolean>(false);
    const fetchOneProject = async () => {
        try {
            const res = await api.get<IProject>(`/project/${projectId}`);
            const dataWithoutNull = nullsToEmpty(res.data) as IProject;
            setprojectInfo(dataWithoutNull);
            seterror(false);
        } catch (err) {
            console.error(err);
            seterror(true);
        }
    };
    useEffect(() => {
        fetchOneProject()
        console.log('fetch');

    }, [projectId])

    const updateProjectFetch = async (values: Omit<IProject, 'id' | 'created_at' | 'portfolio_id'>) => {
        try {
            await api.patch(`project/${projectId}`, values)
            setsuccess(true)
            setTimeout(() => {
                setsuccess(false)
                fetchOneProject()
            }, 1500)
        } catch (error) {
            console.log(error);
            
        }

    }
    return (
        <div>
            {success
                ?
                <div className={cls.success}>success</div>
                :
                (error
                    ?
                    <div className={cls.downloadError}>download error</div>
                    :
                    (projectInfo
                        ?
                        <UpdateOnePortfolio projectInfo={projectInfo} updateProjectFetch={updateProjectFetch} />
                        :
                        <div className={cls.loading}>loading...</div>))}


        </div>
    );
}

export default ContainerUpdateOneProject;