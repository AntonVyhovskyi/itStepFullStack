import { useState, type FunctionComponent } from "react";
import type { INewProject, IProject } from "./ContainerUpdateProjects";
import cls from './UpdateProjects.module.css'
import noPhoto from './../../../../assets/images/noImg.bmp'
import CreateProject from "./CreateProject/CreateProject";
import ContainerUpdateOneProject from "./UpdateOneProject/ContainerUpdateOneProject";

interface UpdateProjectsProps {
    projects: IProject[],
    addNewProject: (v:INewProject)=>void
}

const UpdateProjects: FunctionComponent<UpdateProjectsProps> = ({ projects, addNewProject }) => {

    const [stateOfForm, setstateOfForm] = useState<number>(0);
    return (
        <div className={cls.container}>
            <div className={cls.form} role="button" tabIndex={0}>
                {(stateOfForm === 0) ? <CreateProject addNewProject={addNewProject} /> : <ContainerUpdateOneProject projectId={stateOfForm}/>}
            </div>
            <div className={cls.items}>
                {projects.map(el => (
                    <div
                        key={el.id}
                        className={`${cls.item} ${stateOfForm === el.id ? cls.activeItem : ''}`}
                        onClick={() => setstateOfForm(stateOfForm === el.id ? 0 : el.id)}
                    >
                        <div className={cls.ItemLeft}>
                            <div className={cls.itemInfo}>
                                <div className={cls.itemTitle}>{el.title}</div>
                                <div className={cls.itemDescription}>{el.description}</div>
                            </div>
                        </div>
                        <div className={cls.img}>
                            <img src={el.image_url || noPhoto} alt="" />

                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default UpdateProjects;