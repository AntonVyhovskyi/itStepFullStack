import { useEffect, useState, type FunctionComponent } from "react";
import type { IProject } from "../ContainerUpdateProjects";
import api from "../../../../../api/axios";

interface ContainerUpdateOneProjectProps {
    projectId: number
}

const ContainerUpdateOneProject: FunctionComponent<ContainerUpdateOneProjectProps> = ({ projectId }) => {
    const [projectInfo, setprojectInfo] = useState<IProject>();
    const [error, seterror] = useState<boolean>(false);
    const fetchOneProject = () => {
        api.get<IProject>(`/project/${projectId}`).then(res => {
            seterror(false)
            setprojectInfo(res.data)
        }).catch(err => {
            console.log(err);
            seterror(true)
        })
    }

    useEffect(() => {
        fetchOneProject()
    }, [projectId])
    return (
        <div>
            {error ? <div>loading...</div> : (projectInfo?<>{projectInfo.title}</>: <div>loading...</div>)}

        </div>
    );
}

export default ContainerUpdateOneProject;