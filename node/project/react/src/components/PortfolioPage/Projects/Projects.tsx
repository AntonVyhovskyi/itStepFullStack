import type { FunctionComponent } from "react";
import cls from './Projects.module.css'
import type { IProject } from "../../Dashboard/UpdatePortfolio/UpdateProjects/ContainerUpdateProjects";
import { Link } from "react-router-dom";
import noPhoto from '../../../assets/images/noImg.bmp'

interface ProjectsProps {
    projects: IProject[]
}
 
const Projects: FunctionComponent<ProjectsProps> = ({projects}) => {
    return ( 
        <div className={cls.container}>
            <h2 className={cls.blockTitle}>Projects</h2>
            {projects.map(el=>(
                <div key={el.id} className={cls.item}>
                    <div className={cls.itemInfo}>
                        <div className={cls.itemTitle}>{el.title}</div>
                        <div className={cls.itemDescription}>{el.description}</div>
                        {el.github_url && <Link to={el.github_url} className={cls.gitLink}>GitHub</Link>}
                        {el.live_url && <Link to={el.live_url } className={cls.liveLink}>Live</Link>}
                    </div>
                    <div className={cls.itemImg}>
                        <img src={el.image_url ? el.image_url : noPhoto} alt="" />
                    </div>

                </div>
            ))}

        </div>
     );
}
 
export default Projects;